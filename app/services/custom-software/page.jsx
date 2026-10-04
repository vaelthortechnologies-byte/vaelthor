"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Workflow,
  Settings2,
  ShieldCheck,
  Zap,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Built Around Your Workflow",
    text: "We design software around the way your business actually works instead of forcing your process into a generic system.",
  },
  {
    icon: Settings2,
    title: "Custom Functionality",
    text: "Every feature can be planned around your specific requirements, users and business operations.",
  },
  {
    icon: Database,
    title: "Connected Systems",
    text: "Bring your data, workflows and different business operations together in one connected digital environment.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Maintainable",
    text: "Structured development helps create software that can be maintained, improved and expanded over time.",
  },
];

const solutions = [
  "Business Management Software",
  "Custom Admin Panels",
  "CRM Systems",
  "Inventory Systems",
  "Booking & Management Platforms",
  "Workflow Automation",
  "Internal Business Tools",
  "API & Third-party Integrations",
];

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-10%] top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

          <div className="absolute right-[-10%] top-32 h-[450px] w-[450px] rounded-full bg-purple-500/[0.07] blur-[150px]" />

          <div className="absolute bottom-[-100px] left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[130px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Code2 size={15} />
                Custom Software
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Software built
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  around your business.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                We create custom software solutions that match your business
                processes, automate repetitive work and give your team better
                digital tools.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link href="/get-started">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20"
                  >
                    Discuss Your Project
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>

                <Link href="/services">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
                  >
                    All Services
                  </motion.div>
                </Link>

              </div>

            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >

              <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

              {/* Software Dashboard */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d20] shadow-2xl shadow-cyan-500/10">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                  <div className="flex items-center gap-2">

                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />

                  </div>

                  <div className="h-6 w-32 rounded-lg bg-white/[0.04]" />

                </div>

                {/* Dashboard */}
                <div className="flex min-h-[390px]">

                  {/* Sidebar */}
                  <div className="hidden w-32 border-r border-white/10 p-4 sm:block">

                    <div className="h-5 w-20 rounded bg-gradient-to-r from-cyan-400/60 to-blue-500/60" />

                    <div className="mt-8 space-y-4">

                      <div className="h-2 w-20 rounded bg-cyan-400/30" />
                      <div className="h-2 w-16 rounded bg-white/10" />
                      <div className="h-2 w-20 rounded bg-white/10" />
                      <div className="h-2 w-14 rounded bg-white/10" />
                      <div className="h-2 w-20 rounded bg-white/10" />

                    </div>

                  </div>

                  {/* Main */}
                  <div className="flex-1 p-5 sm:p-7">

                    <div className="h-5 w-32 rounded bg-white/10" />

                    <div className="mt-5 grid grid-cols-3 gap-3">

                      <div className="rounded-xl border border-white/10 bg-cyan-400/[0.04] p-4">
                        <div className="h-2 w-12 rounded bg-white/10" />
                        <div className="mt-3 h-6 w-16 rounded bg-cyan-400/30" />
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <div className="h-2 w-12 rounded bg-white/10" />
                        <div className="mt-3 h-6 w-16 rounded bg-white/15" />
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <div className="h-2 w-12 rounded bg-white/10" />
                        <div className="mt-3 h-6 w-16 rounded bg-white/15" />
                      </div>

                    </div>

                    {/* Chart */}
                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                      <div className="flex items-center justify-between">
                        <div className="h-3 w-24 rounded bg-white/10" />
                        <div className="h-3 w-12 rounded bg-cyan-400/20" />
                      </div>

                      <div className="mt-8 flex h-28 items-end gap-2">

                        <div className="h-[35%] flex-1 rounded-t bg-cyan-400/20" />
                        <div className="h-[50%] flex-1 rounded-t bg-cyan-400/30" />
                        <div className="h-[42%] flex-1 rounded-t bg-blue-400/30" />
                        <div className="h-[65%] flex-1 rounded-t bg-blue-400/40" />
                        <div className="h-[58%] flex-1 rounded-t bg-purple-400/30" />
                        <div className="h-[82%] flex-1 rounded-t bg-cyan-400/40" />
                        <div className="h-[72%] flex-1 rounded-t bg-purple-400/40" />

                      </div>

                    </div>

                    {/* Table */}
                    <div className="mt-4 space-y-2">

                      <div className="h-8 rounded-lg bg-white/[0.025]" />
                      <div className="h-8 rounded-lg bg-white/[0.02]" />
                      <div className="h-8 rounded-lg bg-white/[0.02]" />

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#070b1c] py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <span className="h-px w-8 bg-cyan-400" />
                WHY CUSTOM SOFTWARE
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Your business is unique.
                <br />
                <span className="text-cyan-300">
                  Your software can be too.
                </span>
              </h2>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-base leading-8 text-gray-400 sm:text-lg">
                Generic software can be useful, but it may not always match
                the way your organization works. Custom software allows the
                product to be designed around your actual processes.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-500">
                We work with you to understand the problem, define the
                functionality and build a solution that can evolve with your
                business.
              </p>

            </motion.div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <Sparkles size={15} />
              What You Get
            </div>

            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Software designed around
              <br />
              <span className="text-cyan-300">the way you work.</span>
            </h2>

          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition hover:border-white/20 sm:p-8"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                    <Icon size={24} className="text-cyan-300" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                    {feature.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#070b1c] py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <span className="h-px w-8 bg-cyan-400" />
                WHAT WE BUILD
              </div>

              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Digital systems for
                <br />
                <span className="text-cyan-300">
                  real business operations.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                From internal tools to complete business platforms, custom
                software can be shaped around the exact functionality your
                organization needs.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {solutions.map((solution, index) => (
                <motion.div
                  key={solution}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                    <Check size={14} className="text-cyan-300" />
                  </span>

                  <span className="text-sm font-medium text-gray-300">
                    {solution}
                  </span>

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-28">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-14 text-center backdrop-blur-xl sm:px-10 sm:py-16"
          >

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Need software built for your business?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Tell us about your workflow, challenge or idea and let's explore
              the right custom solution.
            </p>

            <Link href="/get-started">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </motion.div>
            </Link>

          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}