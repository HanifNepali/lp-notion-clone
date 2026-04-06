"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, x, y, className }: RevealProps) {
  const offsetX = x ?? 0;
  const offsetY = y ?? (x === undefined ? 24 : 0);
  return (
    <motion.div
      className={cn("reveal", className ?? "")}
      initial={{ opacity: 0, x: offsetX, y: offsetY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
