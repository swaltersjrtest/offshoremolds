# ZUVIX Command Center

Steven tracks every project and task at https://command.zuvix.net. Keep this repo's dashboard project current.

If a note starting "ZUVIX Command Center:" appeared when the session started, a hook is already syncing your task list; just follow that note. If no such note appeared (for example in a project thread), do it yourself with the API below, using the bearer token in `$ZUVIX_COMMAND_TOKEN`:

- **Find the project and its open tasks** at the start of your work: `GET https://command.zuvix.net/api/claude/projects` (match `repo_url` to this repo's GitHub URL), then `GET https://command.zuvix.net/api/claude/tasks?project=<Project Name>`.
- **Starting a piece of work:** `POST https://command.zuvix.net/api/claude/tasks` with `{"project": "<Project Name>", "title": "<task>", "status": "doing"}`, or `{"id": "<task id>", "status": "doing"}` when it matches an open dashboard task (reuse its exact title).
- **Finishing it:** the same call with `"status": "done"`, plus `POST https://command.zuvix.net/api/claude/activity` with `{"project": "<Project Name>", "summary": "Done: <task>"}`.
- **Also log** merged PRs and deploys as activity, and add follow-ups Steven still needs to do as tasks with `"priority"` 1 (highest) to 5.

Example: `curl -s -X POST https://command.zuvix.net/api/claude/activity -H "Authorization: Bearer $ZUVIX_COMMAND_TOKEN" -H "Content-Type: application/json" -d '{"project":"<Project Name>","summary":"<what changed>"}'`

Track real work items only, not tiny steps. Never send secrets, keys or client credentials to the dashboard. If `ZUVIX_COMMAND_TOKEN` isn't set or a call fails (for example the environment can't reach command.zuvix.net), tell Steven once and carry on with the work.
