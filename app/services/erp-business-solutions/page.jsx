"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Database,
  Workflow,
  BarChart3,
  Users,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Connected Workflows",
    text: "Bring different business processes together so your team can manage operations from one connected system.",
  },
  {
    icon: Database,
    title: "Centralized Data",
    text: "Keep important business information organized and accessible through structured digital systems.",
  },
  {
    icon: BarChart3,
    title: "Business Visibility",
    text: "Turn operational information into useful dashboards and reports that help teams understand their workflows.",
  },
  {
    icon: Users,
    title: "Team Management",
    text: "Create role-based experiences that help different members of your organization work with the information they need.",
  },
];

const modules = [
  "Admin Dashboard",
  "Employee Management",
  "Customer Management",
  "Inventory Management",
  "Sales & Orders",
  "Reports & Analytics",
  "Attendance & Records",
  "Custom Business Modules",
];

export default function ERPBusinessSolutionsPage() {
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
                <Building2 size={15} />
                ERP & Business Solutions
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                One connected system
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  for your business.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                We build business management systems that bring workflows,
                data and teams together into a more organized digital
                environment.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link href="/get-started">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20"
                  >
                    Discuss Your Business
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

            {/* RIGHT DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >

              <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d20] shadow-2xl shadow-cyan-500/10">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="h-6 w-32 rounded-lg bg-white/[0.04]" />

                </div>

                <div className="flex min-h-[400px]">

                  {/* Sidebar */}
                  <div className="hidden w-32 border-r border-white/10 p-4 sm:block">

                    <div className="h-5 w-20 rounded bg-gradient-to-r from-cyan-400/60 to-blue-500/60" />

                    <div className="mt-8 space-y-4">

                      <div className="h-2 w-20 rounded bg-cyan-400/30" />
                      <div className="h-2 w-16 rounded bg-white/10" />
                      <div className="h-2 w-20 rounded bg-white/10" />
                      <div className="h-2 w-14 rounded bg-white/10" />
                      <div className="h-2 w-20 rounded bg-white/10" />
                      <div className="h-2 w-16 rounded bg-white/10" />

                    </div>

                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 p-5 sm:p-7">

                    <div className="flex items-center justify-between">

                      <div>
                        <div className="h-3 w-20 rounded bg-white/10" />
                        <div className="mt-2 h-6 w-32 rounded bg-white/10" />
                      </div>

                      <div className="h-8 w-20 rounded-lg bg-cyan-400/10" />

                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                      <DashboardCard value="24" />
                      <DashboardCard value="86" />
                      <DashboardCard value="42" />
                      <DashboardCard value="18" />

                    </div>

                    {/* Chart */}
                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                      <div className="flex items-center justify-between">

                        <div className="h-3 w-24 rounded bg-white/10" />

                        <div className="h-3 w-12 rounded bg-cyan-400/20" />

                      </div>

                      <div className="mt-8 flex h-28 items-end gap-2">

                        <div className="h-[35%] flex-1 rounded-t bg-cyan-400/20" />
                        <div className="h-[52%] flex-1 rounded-t bg-cyan-400/30" />
                        <div className="h-[45%] flex-1 rounded-t bg-blue-400/30" />
                        <div className="h-[68%] flex-1 rounded-t bg-blue-400/40" />
                        <div className="h-[58%] flex-1 rounded-t bg-purple-400/30" />
                        <div className="h-[82%] flex-1 rounded-t bg-cyan-400/40" />
                        <div className="h-[72%] flex-1 rounded-t bg-purple-400/40" />

                      </div>

                    </div>

                    {/* Table */}
                    <div className="mt-4 space-y-2">

                      <div className="h-9 rounded-lg bg-white/[0.025]" />
                      <div className="h-9 rounded-lg bg-white/[0.02]" />
                      <div className="h-9 rounded-lg bg-white/[0.02]" />

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
                WHY BUSINESS SYSTEMS
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Bring your operations
                <br />
                <span className="text-cyan-300">
                  into one digital environment.
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
                Growing businesses often work across spreadsheets, separate
                tools and disconnected processes. A connected business system
                can help organize those workflows into a single environment.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-500">
                We design systems around the actual requirements of your
                organization, allowing different modules and workflows to work
                together.
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
              Better systems.
              <br />
              <span className="text-cyan-300">
                Better visibility.
              </span>
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

      {/* MODULES */}
      <section className="bg-[#070b1c] py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <span className="h-px w-8 bg-cyan-400" />
                POSSIBLE MODULES
              </div>

              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Build the system
                <br />
                <span className="text-cyan-300">
                  your business needs.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                Your system doesn't have to contain everything. We can build
                the modules that are relevant to your organization and expand
                the platform as your requirements grow.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {modules.map((module, index) => (
                <motion.div
                  key={module}
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
                    {module}
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
              Need a system built around your business?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Tell us about your operations and we'll help you plan a digital
              system around your actual requirements.
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

function DashboardCard({ value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
      <div className="h-2 w-10 rounded bg-white/10" />
      <div className="mt-3 text-lg font-bold text-cyan-300">
        {value}
      </div>
    </div>
  );
}