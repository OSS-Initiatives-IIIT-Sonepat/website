"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  // To prevent hydration mismatch, the initial render must exactly match what the server renders.
  const displayTheme = mounted ? theme : "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Switch to ${displayTheme === "dark" ? "light" : "dark"} mode`
          : "Toggle theme"
      }
      className="grid size-10 place-items-center rounded-full border border-[#1b1b1b]/20 bg-[#fafafa] text-lg text-[#1b1b1b] transition-all duration-200 hover:scale-105 hover:bg-[#1b1b1b] hover:text-[#fafafa] active:scale-95 dark:border-[#fafafa]/25 dark:bg-[#1b1b1b] dark:text-[#fafafa] dark:hover:bg-[#fafafa] dark:hover:text-[#1b1b1b]"
    >
      {mounted ? (displayTheme === "dark" ? "☾" : "☀") : "☀"}
    </button>
  );
}
