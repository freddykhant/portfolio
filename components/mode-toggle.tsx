"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:bg-card/80 hover:border-border/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/5"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 w-5 h-5 text-foreground/70 group-hover:text-foreground transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 w-5 h-5 text-foreground/70 group-hover:text-foreground transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>

      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </div>
    </button>
  );
}
