"use client";
import { motion } from "motion/react";
import I1 from "@/assets/images/illustration1.svg";
import I3 from "@/assets/images/illustration3.svg";
import I4 from "@/assets/images/illustration4.svg";
import Image from "next/image";

export function UnderConstruction() {
  const SLOW = 44;
  const FAST = 22;

  return (
    <div className="relative min-h-96 min-w-sm">
      <motion.div
        className="absolute top-10 left-0"
        animate={{
          y: SLOW
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image src={I4} width={360} height={240} alt={"illustration"} />
      </motion.div>

      <motion.div
        className="absolute top-10 left-0"
        animate={{
          y: SLOW
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image src={I3} width={360} height={240} alt={"illustration"} />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0"
        animate={{
          y: FAST
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image src={I1} width={360} height={240} alt={"illustration"} />
      </motion.div>
    </div>
  );
}
