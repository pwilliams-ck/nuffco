"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
        suppressHydrationWarning
        className="transition-all duration-500"
      />
      <Moon className="h-4 w-4" />
    </div>
  );
}