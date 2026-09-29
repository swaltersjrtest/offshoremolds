"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// Visitor analytics for the OMI sales dashboard. crm.offshoremolds.com serves the same
// file once its DNS record is live; either address works.
const TRACKER_SRC = "https://omi-crm-six.vercel.app/omi-tracker.js";

// false: analytics run until the visitor clicks Decline (U.S. notice model).
// true: nothing loads until the visitor clicks Accept (EU/UK opt-in model).
const REQUIRE_OPT_IN = false;

const STORAGE_KEY = "omi-cookie-consent";
const OPEN_EVENT = "omi:cookie-settings";

type Choice = "accepted" | "declined";
type ConsentState = Choice | "unset" | "pending";

declare global {
  interface Window {
    // Read by omi-tracker.js before every request.
    omiTrackerOptOut?: boolean;
  }
}

// Used when the browser blocks localStorage, so the banner still closes for this page view.
let memoryChoice: Choice | null = null;
const listeners = new Set<() => void>();

function readChoice(): ConsentState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") return stored;
  } catch {}
  return memoryChoice ?? "unset";
}

function saveChoice(choice: Choice) {
  memoryChoice = choice;
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {}
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie Settings
    </button>
  );
}

export function CookieConsent() {
  // "pending" during server render and hydration, before localStorage can be read.
  const choice = useSyncExternalStore<ConsentState>(subscribe, readChoice, () => "pending");
  const [reopened, setReopened] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (reopened) bannerRef.current?.focus();
  }, [reopened]);

  function decide(next: Choice) {
    // Also stops a tracker that is already running on this page.
    window.omiTrackerOptOut = next === "declined";
    saveChoice(next);
    setReopened(false);
  }

  const loadTracker = choice === "accepted" || (!REQUIRE_OPT_IN && choice === "unset");
  const showBanner = choice === "unset" || (reopened && choice !== "pending");

  return (
    <>
      {loadTracker && <Script src={TRACKER_SRC} strategy="afterInteractive" />}

      {showBanner && (
        <div
          ref={bannerRef}
          tabIndex={-1}
          role="region"
          aria-label="Cookie notice"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-4xl border border-t-4 border-[#d7dcde] border-t-[#BD1816] bg-white p-5 text-[#222222] shadow-2xl outline-none sm:inset-x-6 sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.14em]">We value your privacy</p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                We use cookies and similar technologies to understand how our site is used and to improve your
                experience. You can change your choice at any time under Cookie Settings at the bottom of the page. See
                our{" "}
                <Link href="/privacy" className="font-semibold text-[#004ff9] underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("declined")}
                className="min-h-11 flex-1 border border-[#004ff9] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition hover:bg-[#004ff9] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004ff9] focus-visible:ring-offset-2 md:flex-none"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="min-h-11 flex-1 bg-[#BD1816] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004ff9] focus-visible:ring-offset-2 md:flex-none"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
