"use client";

import Footer from "@/components/Footer/Footer";               
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  LayoutDashboard,
  MousePointer2,
  Layers3,
  PenTool,
  Sparkles,
  Check,
} from "lucide-react";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer/Footer";

const features = [
  {
    icon: MousePointer2,
    title: "User-Centered Design",
    description:
      "Interfaces designed around real users, their goals, and how they interact with your product.",
  },
  {
    icon: Layers3,
    title: "Design Systems",
    description:
      "Reusable design components that keep your digital product consistent and scalable.",
  },
  {
    icon: LayoutDashboard,
    title: "Clear Information Architecture",
    description:
      "Organized layouts and navigation that help users find what they need quickly.",
  },
  {
    icon: Sparkles,
    title: "Responsive Interfaces",
    description:
      "Beautiful experiences that work smoothly across desktops, tablets, and mobile devices.",
  },
];

const solutions = [
  "Website UI Design",
  "Mobile App UI Design",
  "Dashboard Design",
  "Landing Page Design",
  "UX Improvements",
  "Design Systems",
  "Product Prototyping",
  "Interface Redesign",
];

export default function UIUXDesignPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-36 sm:px-10 lg:px-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-40 -z-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Palette size={16} />
              UI/UX Design
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Interfaces designed to make
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                technology feel simple.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              We design clean, intuitive, and conversion-focused digital
              experiences that make your products easier to understand,
              navigate, and use.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/get-started">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black shadow-lg shadow-cyan-500/20"
                >
                  Start a Project
                  <ArrowRight size={18} />
                </motion.div>
              </Link>

              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to Us
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Design Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] p-4 shadow-2xl shadow-cyan-500/10">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/40">
                  Design System
                </div>
              </div>

              {/* Main design area */}
              <div className="grid min-h-[420px] grid-cols-[70px_1fr] gap-4 pt-4">
                {/* Sidebar */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-3">
                  <div className="space-y-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Palette size={18} />
                    </div>

                    <div className="h-8 w-8 rounded-lg bg-white/5" />
                    <div className="h-8 w-8 rounded-lg bg-white/5" />
                    <div className="h-8 w-8 rounded-lg bg-white/5" />
                    <div className="h-8 w-8 rounded-lg bg-white/5" />
                  </div>
                </div>

                {/* Canvas */}
                <div className="rounded-2xl border border-white/10 bg-[#080d1b] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-3 w-24 rounded bg-white/20" />
                      <div className="mt-2 h-2 w-40 rounded bg-white/10" />
                    </div>

                    <div className="h-9 w-20 rounded-lg bg-cyan-400/20" />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                        <PenTool size={22} />
                      </div>

                      <div className="mt-8 h-3 w-28 rounded bg-white/20" />
                      <div className="mt-3 h-2 w-full rounded bg-white/10" />
                      <div className="mt-2 h-2 w-4/5 rounded bg-white/10" />

                      <div className="mt-6 h-9 w-24 rounded-lg bg-cyan-400/20" />
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-20 rounded bg-white/20" />
                        <div className="h-7 w-7 rounded-lg bg-purple-400/10" />
                      </div>

                      <div className="mt-7 space-y-3">
                        <div className="h-2 w-full rounded bg-white/10" />
                        <div className="h-2 w-5/6 rounded bg-white/10" />
                        <div className="h-2 w-3/4 rounded bg-white/10" />
                      </div>

                      <div className="mt-7 h-24 rounded-xl bg-gradient-to-r from-purple-400/10 to-cyan-400/10" />
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-28 rounded bg-white/20" />
                      <div className="h-2 w-16 rounded bg-cyan-400/20" />
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-3">
                      <div className="h-12 rounded-xl bg-white/5" />
                      <div className="h-12 rounded-xl bg-white/5" />
                      <div className="h-12 rounded-xl bg-white/5" />
                      <div className="h-12 rounded-xl bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY UI/UX */}
      <section className="border-y border-white/5 bg-white/[0.015] px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why UI/UX Matters
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Good design makes technology easier.
            </h2>

            <p className="mt-5 text-white/60">
              Your users should not have to think about how your product works.
              Our designs focus on clarity, usability, consistency, and a
              smooth experience from the first interaction.
            </p>
          </motion.div>

          {/* Features */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400/15">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What We Design
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From first sketch to polished interface.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/55">
              Whether you are launching a new product or improving an existing
              one, we create interfaces that combine visual quality with
              practical usability.
            </p>

            <Link
              href="/get-started"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Discuss Your Design
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Solutions */}
          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan-400/20 hover:bg-white/[0.04]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <Check size={17} />
                </div>

                <span className="font-medium text-white/80">
                  {solution}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/[0.08] via-blue-500/[0.04] to-purple-500/[0.08] p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-3 md:items-center">
            <div>
              <div className="text-4xl font-bold text-cyan-300">01</div>
              <h3 className="mt-3 text-xl font-semibold">Understand</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                We understand your users, goals, and business requirements.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-blue-300">02</div>
              <h3 className="mt-3 text-xl font-semibold">Design</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                We transform ideas into structured and intuitive interfaces.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-purple-300">03</div>
              <h3 className="mt-3 text-xl font-semibold">Refine</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                We refine every detail to create a polished user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/[0.025] px-6 py-16 text-center sm:px-10"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Palette size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Have a product in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/55">
              Let&apos;s turn your idea into an experience people enjoy using.
            </p>

            <Link
              href="/get-started"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition hover:bg-cyan-300"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}