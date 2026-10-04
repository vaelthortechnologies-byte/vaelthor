"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Zap,
  ShieldCheck,
  Layers3,
  Users,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    text: "Applications designed specifically for smooth and intuitive experiences on mobile devices.",
  },
  {
    icon: Zap,
    title: "Fast & Responsive",
    text: "Optimized application experiences focused on speed, smooth interactions and usability.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Development",
    text: "Structured applications built with maintainability, reliability and future improvements in mind.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    text: "Solutions designed so your application can evolve as your users and business requirements grow.",
  },
];

const solutions = [
  "Business Applications",
  "Customer Applications",
  "Education Apps",
  "E-commerce Apps",
  "Booking Applications",
  "Management Apps",
  "Custom Mobile Solutions",
  "Application Dashboards",
];

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-10%] top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

          <div className="absolute right-[-10%] top-32 h-[450px] w-[450px] rounded-full bg-purple-500/[0.08] blur-[150px]" />

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
                <Smartphone size={15} />
                Mobile App Development
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Mobile experiences
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  built around your users.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                We build modern mobile applications that help businesses
                connect with customers, simplify operations and turn ideas
                into useful digital experiences.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link href="/get-started">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20"
                  >
                    Start a Project
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

            {/* PHONE VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center"
            >

              <div className="absolute h-[400px] w-[300px] rounded-full bg-cyan-400/10 blur-[100px]" />

              {/* Phone */}
              <div className="relative w-[250px] rounded-[2.5rem] border border-white/15 bg-[#080d20] p-3 shadow-2xl shadow-cyan-500/10 sm:w-[280px]">

                {/* Top */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816]">

                  <div className="mx-auto mt-3 h-5 w-24 rounded-full bg-black/70" />

                  <div className="px-5 pb-8 pt-8">

                    <div className="flex items-center justify-between">

                      <div>
                        <div className="h-3 w-14 rounded bg-white/20" />
                        <div className="mt-2 h-5 w-24 rounded bg-white/10" />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">
                        <Smartphone
                          size={16}
                          className="text-cyan-300"
                        />
                      </div>

                    </div>

                    <div className="mt-7 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 p-5">

                      <div className="h-3 w-16 rounded bg-white/20" />

                      <div className="mt-3 h-7 w-32 rounded bg-white/20" />

                      <div className="mt-5 h-9 w-24 rounded-full bg-cyan-400/40" />

                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">

                      <div className="h-24 rounded-2xl border border-white/10 bg-white/[0.03]" />

                      <div className="h-24 rounded-2xl border border-white/10 bg-white/[0.03]" />

                    </div>

                    <div className="mt-3 h-16 rounded-2xl border border-white/10 bg-white/[0.03]" />

                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex justify-around border-t border-white/10 px-4 py-4">

                    <span className="h-2 w-8 rounded bg-cyan-400/50" />
                    <span className="h-2 w-8 rounded bg-white/10" />
                    <span className="h-2 w-8 rounded bg-white/10" />
                    <span className="h-2 w-8 rounded bg-white/10" />

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
                WHY MOBILE APPS
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Put your business
                <br />
                <span className="text-cyan-300">in your customer's hands.</span>
              </h2>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-base leading-8 text-gray-400 sm:text-lg">
                Mobile applications can create direct and convenient
                experiences for customers while helping businesses simplify
                everyday processes.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-500">
                From customer-facing applications to internal business tools,
                we focus on creating products that are useful, intuitive and
                built around real requirements.
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
              Designed for users,
              <br />
              <span className="text-cyan-300">built for growth.</span>
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
                Applications for
                <br />
                <span className="text-cyan-300">real business needs.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                We can shape a mobile solution around your customers,
                operations, industry and long-term goals.
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
              Have an app idea?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Tell us what you want to build and let's turn your idea into a
              useful mobile experience.
            </p>

            <Link href="/get-started">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                Start a Project
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