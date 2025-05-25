"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = ["rgb(28, 117, 188)", "rgb(40, 170, 225)", "rgb(247, 148, 29)", "rgb(252, 176, 64)", "rgb(237, 27, 36)", "rgb(185, 31, 37)"];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0
      }}
      animate={{
        // color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1]
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05
      }}
      className="inline-block text-5xl tracking-tight whitespace-pre"
    >
      {char}
    </motion.span>
  ));
}
