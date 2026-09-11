"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const storageKey = "portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event("portfolio-theme-change"));
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const syncPreference = () => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(storageKey); } catch { /* Use system preference. */ }
    applyTheme(saved === "light" || saved === "dark" ? saved : media.matches ? "dark" : "light");
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) syncPreference();
  };
  window.addEventListener("portfolio-theme-change", onChange);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", syncPreference);
  return () => {
    window.removeEventListener("portfolio-theme-change", onChange);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", syncPreference);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme, () => undefined);
  function selectTheme(value: Theme) {
    try { localStorage.setItem(storageKey, value); } catch { /* Still apply for this visit. */ }
    applyTheme(value);
  }
  return (
    <div className="theme-toggle" role="group" aria-label="화면 테마">
      <button type="button" data-mode="light" aria-label="라이트 모드" title="라이트 모드" aria-pressed={theme === "light"} onClick={() => selectTheme("light")}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
      </button>
      <button type="button" data-mode="dark" aria-label="다크 모드" title="다크 모드" aria-pressed={theme === "dark"} onClick={() => selectTheme("dark")}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.9 13.1A9 9 0 0 1 10.9 3.1a9 9 0 1 0 10 10Z" /></svg>
      </button>
    </div>
  );
}
