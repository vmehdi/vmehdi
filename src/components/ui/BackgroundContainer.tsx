"use client";

import { useTheme } from "next-themes";
import { BackgroundBeam } from "@/components/ui/BackgroundBeam";
import React, { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";

export function BackgroundContainer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {currentTheme === "unicorn" && <BackgroundGradientAnimation />}
      <BackgroundBeam />
    </div>
  );
}
