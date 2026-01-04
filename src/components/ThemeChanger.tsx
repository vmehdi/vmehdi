"use client";
import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const themes = [
  { name: "light", icon: Moon, label: "Light Mode" },
  { name: "dark", icon: Palette, label: "Dark Mode" },
  { name: "unicorn", icon: Sun, label: "Unicorn Mode" }
];

export function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "system") return;
    const findIndex = themes.findIndex((item) => item.name === theme);
    if (findIndex !== -1) {
      setCurrentIndex(findIndex);
    }
  }, [theme]);

  const onChangeTheme = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(nextIndex);
    setTheme(themes[nextIndex].name);
  };

  if (!mounted) {
    return <button className="h-9 w-9 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />;
  }

  const CurrentIcon = themes[currentIndex].icon;

  return (
    <motion.button
      onClick={onChangeTheme}
      className="group relative ml-auto flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${themes[(currentIndex + 1) % themes.length].label}`}
      title={`Current: ${themes[currentIndex].label}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <CurrentIcon className="h-6 w-6 text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 unicorn:text-gray-1000 dark:group-hover:text-indigo-400" />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
