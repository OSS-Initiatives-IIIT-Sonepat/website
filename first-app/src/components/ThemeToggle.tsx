"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="grid size-10 place-items-center border border-[#1b1b1b]/20 bg-[#fafafa] text-sm font-black text-[#1b1b1b] transition hover:bg-[#1b1b1b] hover:text-[#fafafa] dark:border-[#fafafa]/25 dark:bg-[#1b1b1b] dark:text-[#fafafa] dark:hover:bg-[#fafafa] dark:hover:text-[#1b1b1b]"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? "L" : "D"}
    </button>
  );
}
