"use client";

import { Code, Globe, Sparkles } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  Zap,
  ShieldCheck,
  Smartphone,
  Search,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Modern Development",
    text: "Clean and maintainable development using modern frameworks and development practices.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    text: "Fast-loading experiences designed to provide smooth interactions across devices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    text: "Interfaces that adapt naturally across desktops, tablets and mobile devices.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Architecture",
    text: "Structured solutions designed with maintainability, security and future growth in mind.",
  },
];

const solutions = [
  "Business Websites",
  "Corporate Websites",
  "Landing Pages",
  "E-commerce Websites",
  "Web Applications",
  "Admin Dashboards",
  "School & Education Websites",
  "Custom Web Platforms",
];

export default function WebDevelopmentPage() {
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

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Globe2 size={15} />
                Web Development
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Websites that
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  work for your business.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                We build modern, responsive and high-performance websites
                designed to give your business a strong digital presence and a
                better experience for your customers.
              </p>

              {/* Buttons */}
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

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[90px]" />

              {/* Browser */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d20] shadow-2xl shadow-cyan-500/10">

                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />

                  <div className="ml-4 h-7 flex-1 rounded-lg border border-white/10 bg-white/[0.03]" />

                </div>

                {/* Mock Website */}
                <div className="p-6 sm:p-8">

                  <div className="flex items-center justify-between">

                    <div className="h-5 w-28 rounded bg-gradient-to-r from-cyan-400 to-blue-500" />

                    <div className="hidden gap-3 sm:flex">
                      <span className="h-2 w-12 rounded bg-white/10" />
                      <span className="h-2 w-12 rounded bg-white/10" />
                      <span className="h-2 w-12 rounded bg-white/10" />
                    </div>

                  </div>

                  <div className="mt-12">

                    <div className="h-8 w-3/4 rounded-lg bg-white/10" />

                    <div className="mt-3 h-8 w-1/2 rounded-lg bg-gradient-to-r from-cyan-400/50 to-purple-400/50" />

                    <div className="mt-6 h-3 w-full rounded bg-white/[0.06]" />
                    <div className="mt-2 h-3 w-5/6 rounded bg-white/[0.06]" />

                    <div className="mt-7 h-10 w-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

                  </div>

                  <div className="mt-12 grid grid-cols-3 gap-3">

                    <div className="h-24 rounded-xl border border-white/10 bg-white/[0.03]" />
                    <div className="h-24 rounded-xl border border-white/10 bg-white/[0.03]" />
                    <div className="h-24 rounded-xl border border-white/10 bg-white/[0.03]" />

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
                WHY WEB DEVELOPMENT
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Your website is more than
                <br />
                <span className="text-cyan-300">just a website.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-base leading-8 text-gray-400 sm:text-lg">
                A good website communicates your brand, builds trust and
                provides customers with a clear path to take action. We focus
                on combining design, technology and usability to create
                digital experiences that serve a real business purpose.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-500">
                Whether you need a simple business website or a complex web
                application, we can build the experience around your actual
                requirements.
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
              Built for performance,
              <br />
              <span className="text-cyan-300">designed for people.</span>
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
                A website for
                <br />
                <span className="text-cyan-300">every digital need.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                From a simple online presence to a complete digital platform,
                our web solutions can be shaped around your business.
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
              Ready to build your website?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Tell us about your idea, and let's turn it into a digital
              experience built around your business.
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

// function Navbar() {
//   return null;
// }