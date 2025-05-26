"use client";
import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { name: "light", icon: <Moon size={28} /> },
  { name: "dark", icon: <Palette size={28} /> },
  { name: "unicorn", icon: <Sun size={35} /> }
];

export function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [themeSelect, setThemeSelect] = useState(themes[0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "system") return;
    const findIndex = themes.findIndex((item) => item.name === theme) || 0;
    setThemeSelect(themes[findIndex]);
  }, [theme]);

  const onChangeTheme = () => {
    const findIndex = themes.findIndex((item) => item.name === theme);
    setTheme(themes[findIndex === 2 ? 0 : findIndex + 1].name);
  };

  if (!mounted) {
    return <button className="bg-foreground text-background animate-pulse rounded text-xs" />;
  }

  return (
    <div className="hover:text-primary dark:hover:text-primary unicorn:text-secondary ml-auto cursor-pointer" onClick={onChangeTheme}>
      {themeSelect.icon}
    </div>
  );
}
