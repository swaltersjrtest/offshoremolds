#!/usr/bin/env node
// ZUVIX Command Center hook for Claude Code cloud sessions (Node 18+).
//   start : SessionStart -> tells Claude which dashboard project this repo is, lists its open tasks
//   sync  : PostToolUse  -> mirrors Claude's task list to the dashboard
//           in progress -> task shown as "doing" (created if new); completed -> marked done + logged
// Runs only when CLAUDE_CODE_REMOTE=true; on Steven's PC the global PowerShell hook does this job.
// Never blocks Claude Code: every failure exits 0 and is noted in <tmp>/zuvix-command-center/hook.log.
import { execFileSync } from "node:child_process";
import { appendFileSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";

const mode = process.argv[2] || "sync";
if (process.env.CLAUDE_CODE_REMOTE !== "true" && process.env.ZUVIX_COMMAND_FORCE !== "1") process.exit(0);

const BASE = (process.env.ZUVIX_COMMAND_BASE || "https://command.zuvix.net/api/claude").replace(/\/+$/, "");
const STATE_DIR = join(tmpdir(), "zuvix-command-center");
const log = (msg) => {
  try {
    mkdirSync(STATE_DIR, { recursive: true });
    appendFileSync(join(STATE_DIR, "hook.log"), `${new Date().toISOString()} [${mode}] ${msg}\n`);
  } catch {}
};
const key = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
const norm = (u) =>
  String(u || "")
    .trim()
    .toLowerCase()
    .replace(/^git@github\.com:/, "github.com/")
    .replace(/^[a-z+]+:\/\/([^@/]+@)?/, "")
    .replace(/^www\./, "")
    .replace(/\.git$/, "")
    .replace(/\/+$/, "")
    // cloud sessions often clone through a local git proxy: .../git/<owner>/<repo>
    .replace(/^.*?\/git\/([^/]+\/[^/]+)$/, "github.com/$1");

const readStdin = () =>
  new Promise((resolve) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (c) => (data += c));
    process.stdin.on("end", () => resolve(data));
    setTimeout(() => resolve(data), 3000);
  });

async function main() {
  const raw = (await readStdin()).replace(/^﻿/, "");
  if (!raw.trim()) return;
  const hook = JSON.parse(raw);
  const token = process.env.ZUVIX_COMMAND_TOKEN;
  if (!token) {
    log("ZUVIX_COMMAND_TOKEN is not set");
    if (mode === "start")
      console.log(
        "ZUVIX Command Center sync is off in this cloud session: ZUVIX_COMMAND_TOKEN isn't set in the cloud environment. Mention this to Steven once."
      );
    return;
  }

  const api = async (method, path, body) => {
    const res = await fetch(`${BASE}/${path}`, {
      method,
      headers: { Authorization: `Bearer ${token}`, ...(body ? { "Content-Type": "application/json" } : {}) },
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`${method} ${path}: HTTP ${res.status}`);
    return res.json();
  };

  // ---- Which dashboard project is this repo? ----
  const cwd = hook.cwd || process.env.CLAUDE_PROJECT_DIR || process.cwd();
  const git = (...args) => {
    try {
      return execFileSync("git", ["-C", cwd, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    } catch {
      return "";
    }
  };
  const remote = git("remote", "get-url", "origin");
  const root = git("rev-parse", "--show-toplevel");
  const folder = basename(root || cwd);
  const { projects = [] } = await api("GET", "projects");
  let proj = remote ? projects.find((p) => p.repo_url && norm(p.repo_url) === norm(remote)) : null;
  if (!proj) proj = projects.find((p) => key(p.name) === key(folder));
  if (!proj) {
    log(`no dashboard project for ${cwd} (remote: ${remote})`);
    if (mode === "start")
      console.log(
        `ZUVIX Command Center: this repo (${remote || folder}) isn't linked to a dashboard project yet, so task sync is off. ` +
          `Ask Steven which project it belongs to, then set that project's repo_url with POST ${BASE}/projects ` +
          `({"name": "<project>", "repo_url": "<github url>"}) using the ZUVIX_COMMAND_TOKEN bearer token.`
      );
    return;
  }

  // ---- SessionStart ----
  if (mode === "start") {
    const { tasks = [] } = await api("GET", `tasks?project_id=${proj.id}`);
    const lines = [`ZUVIX Command Center: this repo is the dashboard project "${proj.name}" (https://command.zuvix.net).`];
    if (tasks.length) {
      lines.push("Open tasks on the dashboard:");
      for (const t of tasks) lines.push(`- [${t.status}] P${t.priority} ${t.title}`);
    } else lines.push("The dashboard has no open tasks for it.");
    lines.push(
      'Your task list syncs to the dashboard automatically: a task you mark in progress shows there as "doing", and a completed one is marked done and logged. When your work matches a dashboard task above, use its exact title for your task. Track real work items only, not tiny steps.',
      `Also log a one-line activity when you merge a PR or deploy: POST ${BASE}/activity with {"project": "${proj.name}", "summary": "<what changed>"} and header "Authorization: Bearer $ZUVIX_COMMAND_TOKEN". Add follow-ups Steven still needs to do with POST ${BASE}/tasks ({"project", "title", "priority" 1-5}). Never send secrets to the dashboard.`
    );
    console.log(lines.join("\n"));
    return;
  }

  // ---- PostToolUse: mirror the task list ----
  const sid = String(hook.session_id || "default").replace(/[^A-Za-z0-9_-]/g, "") || "default";
  mkdirSync(STATE_DIR, { recursive: true });
  const stateFile = join(STATE_DIR, `session-${sid}.json`);
  let state = { names: {}, seen: {} };
  if (existsSync(stateFile)) {
    try {
      state = { names: {}, seen: {}, ...JSON.parse(readFileSync(stateFile, "utf8")) };
    } catch {}
  }

  const ti = hook.tool_input || {};
  const items = [];
  if (hook.tool_name === "TodoWrite") {
    for (const t of ti.todos || []) items.push({ title: t.content, status: t.status });
  } else if (hook.tool_name === "TaskCreate") {
    const resp = hook.tool_response;
    const text = typeof resp === "string" ? resp : JSON.stringify(resp ?? "");
    let id =
      (resp && typeof resp === "object" && (resp.task?.id ?? resp.taskId ?? resp.id)) ??
      text.match(/#(\d+)/)?.[1] ??
      text.match(/"(?:taskId|id)"\s*:\s*"?([A-Za-z0-9_-]+)/)?.[1];
    if (id != null && ti.subject) state.names[String(id)] = ti.subject;
    else log(`TaskCreate: could not read the task id from: ${text.slice(0, 300)}`);
  } else if (hook.tool_name === "TaskUpdate") {
    const tid = ti.taskId != null ? String(ti.taskId) : "";
    if (ti.subject && tid) state.names[tid] = ti.subject;
    const title = ti.subject || state.names[tid];
    if (ti.status) {
      if (title) items.push({ title, status: ti.status });
      else log(`TaskUpdate: unknown title for task ${tid}`);
    }
  }

  const todo = items.filter((i) => i.status === "in_progress" || i.status === "completed");
  if (todo.length) {
    const { tasks: open = [] } = await api("GET", `tasks?project_id=${proj.id}`);
    for (const it of todo) {
      let title = String(it.title || "").trim().slice(0, 300);
      if (!title) continue;
      const k = key(title);
      const target = it.status === "completed" ? "done" : "doing";
      if (state.seen[k] === target || state.seen[k] === "done") continue;
      const match = open.find((t) => key(t.title) === k);
      if (match) {
        if (match.status !== target) await api("POST", "tasks", { id: match.id, status: target });
      } else {
        await api("POST", "tasks", { project_id: proj.id, title, status: target, priority: 3, source: "claude-code" });
      }
      if (target === "done") await api("POST", "activity", { project_id: proj.id, summary: `Done: ${title}`, source: "claude-code" });
      state.seen[k] = target;
      log(`${proj.name}: ${target} - ${title}`);
    }
  }
  writeFileSync(stateFile, JSON.stringify(state));
}

main()
  .catch((e) => log(`error: ${e?.message || e}`))
  .finally(() => process.exit(0));
