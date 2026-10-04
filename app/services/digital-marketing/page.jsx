"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Megaphone,
  Target,
  BarChart3,
  Search,
  MousePointer2,
  TrendingUp,
  Check,
  Users,
  Globe,
} from "lucide-react";


const features = [
  {
    icon: Target,
    title: "Targeted Strategy",
    description:
      "Marketing strategies built around your business goals, audience, and growth objectives.",
  },
  {
    icon: Search,
    title: "Search Visibility",
    description:
      "Improve your online presence with search-focused content and optimization strategies.",
  },
  {
    icon: MousePointer2,
    title: "Conversion Focused",
    description:
      "Campaigns and landing experiences designed to turn attention into meaningful actions.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "Understand campaign performance through useful metrics, reports, and insights.",
  },
];

const solutions = [
  "Digital Marketing Strategy",
  "SEO & Search Optimization",
  "Social Media Marketing",
  "Content Marketing",
  "Lead Generation",
  "Landing Page Optimization",
  "Campaign Management",
  "Analytics & Reporting",
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-36 sm:px-10 lg:px-20">
        <div className="pointer-events-none absolute left-1/4 top-20 -z-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-32 -z-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Megaphone size={16} />
              Digital Marketing
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Turn your digital presence into
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                meaningful growth.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              We help businesses build visibility, reach the right audience,
              generate leads, and create a stronger digital presence through
              focused marketing strategies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/get-started">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black shadow-lg shadow-cyan-500/20"
                >
                  Start a Campaign
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

          {/* MARKETING DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] p-4 shadow-2xl shadow-cyan-500/10">
              {/* TOP BAR */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/40">
                  Marketing Analytics
                </div>
              </div>

              {/* DASHBOARD */}
              <div className="grid min-h-[420px] gap-4 pt-4">
                {/* KPI CARDS */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Reach</span>
                      <Globe size={15} className="text-cyan-300" />
                    </div>

                    <div className="mt-4 text-xl font-bold">84.6K</div>

                    <div className="mt-2 flex items-center gap-1 text-xs text-cyan-300">
                      <TrendingUp size={12} />
                      +18.4%
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Leads</span>
                      <Users size={15} className="text-blue-300" />
                    </div>

                    <div className="mt-4 text-xl font-bold">1,248</div>

                    <div className="mt-2 flex items-center gap-1 text-xs text-blue-300">
                      <TrendingUp size={12} />
                      +24.7%
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Growth</span>
                      <BarChart3 size={15} className="text-purple-300" />
                    </div>

                    <div className="mt-4 text-xl font-bold">32.8%</div>

                    <div className="mt-2 flex items-center gap-1 text-xs text-purple-300">
                      <TrendingUp size={12} />
                      +12.2%
                    </div>
                  </div>
                </div>

                {/* CHART */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-3 w-28 rounded bg-white/20" />
                      <div className="mt-2 h-2 w-40 rounded bg-white/10" />
                    </div>

                    <div className="rounded-lg bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">
                      Growth
                    </div>
                  </div>

                  <div className="mt-8 flex h-36 items-end gap-2">
                    {[35, 48, 42, 65, 55, 72, 62, 86, 76, 94, 82, 100].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + index * 0.05,
                          }}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-400/20 to-cyan-300/70"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* CAMPAIGN ROWS */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                        <Search size={18} />
                      </div>

                      <div>
                        <div className="text-sm font-semibold">Search</div>
                        <div className="mt-1 text-xs text-white/40">
                          Organic visibility
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                        <Megaphone size={18} />
                      </div>

                      <div>
                        <div className="text-sm font-semibold">Campaign</div>
                        <div className="mt-1 text-xs text-white/40">
                          Audience engagement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY DIGITAL MARKETING */}
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
              Why Digital Marketing
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Reach the people who matter.
            </h2>

            <p className="mt-5 text-white/60">
              A strong digital strategy connects your business with the right
              audience while giving you measurable ways to understand what is
              working.
            </p>
          </motion.div>

          {/* FEATURES */}
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-300">
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

      {/* SERVICES */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A complete digital growth toolkit.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/55">
              From visibility and content to lead generation and analytics, we
              help businesses build a digital presence that supports their
              wider goals.
            </p>

            <Link
              href="/get-started"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Discuss Your Goals
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* SERVICE LIST */}
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

      {/* GROWTH PROCESS */}
      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/[0.08] via-blue-500/[0.04] to-purple-500/[0.08] p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-cyan-300">01</div>
              <h3 className="mt-3 text-xl font-semibold">Discover</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Understand your business, audience, market, and objectives.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-blue-300">02</div>
              <h3 className="mt-3 text-xl font-semibold">Execute</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Launch focused campaigns and content across relevant channels.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-purple-300">03</div>
              <h3 className="mt-3 text-xl font-semibold">Optimize</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Review performance and continuously improve the strategy.
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
              <Megaphone size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Ready to grow your digital presence?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/55">
              Let&apos;s create a focused digital strategy around your business
              goals.
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