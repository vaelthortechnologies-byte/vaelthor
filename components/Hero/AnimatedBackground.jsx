"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* GRID */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
      />

      {/* BLUE GLOW */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -top-40
        -left-40
        w-[650px]
        h-[650px]
        rounded-full
        bg-blue-500/20
        blur-[180px]
        "
      />

      {/* PURPLE */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-250px]
        right-[-250px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-purple-500/20
        blur-[200px]
        "
      />

      {/* CYAN */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[600px]
        h-[600px]
        rounded-full
        bg-cyan-400
        blur-[220px]
        opacity-20
        "
      />

      {/* TOP LIGHT */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-cyan-400/5
        via-transparent
        to-transparent
        "
      />

      {/* BOTTOM FADE */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#050816]
        via-transparent
        to-transparent
        "
      />
    </>
  );
}