"use client";

import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const beliefs = [
  {
    icon: Target,
    number: "01",
    title: "Purpose Before Technology",
    text: "We start by understanding the real problem before choosing the technology. Every solution should have a clear purpose.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Innovation That Matters",
    text: "We believe innovation should create practical value, improve experiences and open new opportunities for businesses.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality & Reliability",
    text: "Clean architecture, thoughtful design and reliable development are at the heart of everything we build.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Built To Grow",
    text: "Our solutions are designed with the future in mind, so businesses can evolve without constantly starting over.",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="relative overflow-hidden bg-[#070b1c] py-24 sm:py-28 lg:py-32">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-150px] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            What We Believe
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Principles behind
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              everything we build.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            Great technology is not just about writing code. It is about
            understanding people, solving meaningful problems and creating
            solutions that continue to deliver value.
          </p>
        </motion.div>

        {/* BELIEF CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {beliefs.map((belief, index) => {
            const Icon = belief.icon;

            return (
              <motion.div
                key={belief.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-500/20 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 group-hover:border-cyan-400/20 group-hover:bg-white/[0.055] sm:p-8">

                  {/* Number */}
                  <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.035] transition duration-500 group-hover:text-cyan-400/[0.08]">
                    {belief.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-13 w-13 h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                    <Icon
                      size={24}
                      className="text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {belief.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                    {belief.text}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-7 h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-24" />

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}