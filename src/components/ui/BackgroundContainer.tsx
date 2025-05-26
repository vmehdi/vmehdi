"use client";

import { useTheme } from "next-themes";
import { BackgroundBeam } from "@/components/ui/BackgroundBeam";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";

export function BackgroundContainer() {
  const { theme } = useTheme();

  return (
    <>
      {theme === "unicorn" && <BackgroundGradientAnimation />}
      <BackgroundBeam />
    </>
  );
}
