"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Database,
  Palette,
  Megaphone,
  Settings2,
  Sparkles,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites designed to represent your brand and convert visitors into customers.",
    features: [
      "Business Websites",
      "Web Applications",
      "Landing Pages",
      "E-commerce Websites",
    ],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile App Development",
    description:
      "User-focused mobile applications built to deliver smooth experiences and help businesses stay connected with their customers.",
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-platform Apps",
      "App UI Development",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Custom Software",
    description:
      "Purpose-built software designed around your workflows, business requirements and operational challenges.",
    features: [
      "Business Software",
      "Automation Systems",
      "Custom Dashboards",
      "API Integrations",
    ],
  },
  {
    icon: Settings2,
    number: "04",
    title: "ERP & Business Solutions",
    description:
      "Connected digital systems that help businesses manage operations, information and workflows from one place.",
    features: [
      "ERP Systems",
      "Admin Panels",
      "Management Systems",
      "Business Automation",
    ],
  },
  {
    icon: Palette,
    number: "05",
    title: "UI/UX Design",
    description:
      "Clean and intuitive interfaces designed around real users, clear interactions and strong visual identity.",
    features: [
      "Website UI",
      "App UI",
      "Dashboard Design",
      "UX Improvements",
    ],
  },
  {
    icon: Megaphone,
    number: "06",
    title: "Digital Marketing",
    description:
      "Digital strategies that help businesses improve their online presence, reach the right audience and generate opportunities.",
    features: [
      "Social Media",
      "Lead Generation",
      "Online Campaigns",
      "Digital Strategy",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-10%] top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.07] blur-[140px]" />

          <div className="absolute right-[-10%] top-32 h-[450px] w-[450px] rounded-full bg-purple-500/[0.07] blur-[150px]" />

          <div className="absolute bottom-[-100px] left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[130px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <Sparkles size={15} />
              What We Build
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Digital solutions
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                built for growth.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              From websites and mobile applications to custom business
              systems, Vaelthor Technologies helps turn ideas into practical
              digital products.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
            >

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

              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
                >
                  Talk to Us
                </motion.div>
              </Link>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-[#070b1c] py-24 sm:py-28 lg:py-32">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[140px]" />
          <div className="absolute right-[-10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.04] blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              <span className="h-px w-8 bg-cyan-400" />
              OUR SERVICES
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Everything you need to
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  build digitally.
                </span>
              </h2>

              <p className="max-w-xl text-base leading-7 text-gray-500">
                Our capabilities cover the complete digital journey — from
                strategy and design to development, deployment and growth.
              </p>

            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative"
                >

                  {/* Glow */}
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-500/20 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 group-hover:border-white/20 group-hover:bg-white/[0.055] sm:p-8">

                    {/* Number */}
                    <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.035] transition group-hover:text-cyan-400/[0.08]">
                      {service.number}
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                      <Icon
                        size={26}
                        className="text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-7 text-2xl font-bold text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mt-7 space-y-3 border-t border-white/[0.07] pt-6">

                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-gray-400"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10">
                            <Check size={12} className="text-cyan-300" />
                          </span>

                          {feature}
                        </div>
                      ))}

                    </div>

                    {/* Bottom */}
{/* Bottom */}
<Link
  href={
    service.title === "Web Development"
      ? "/services/web-development"
      : service.title === "Mobile App Development"
        ? "/services/mobile-app-development"
        : service.title === "Custom Software"
          ? "/services/custom-software"
          : service.title === "ERP & Business Solutions"
            ? "/services/erp-business-solutions"
             : service.title === "UI/UX Design"
                   ? "/services/ui-ux-design"
                     : service.title === "Digital Marketing"
    ? "/services/digital-marketing"
    : "#"
  }
  className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300"
>
  Learn More

  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>



                    {/* <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      Learn More  <Link href="/services/web-development"> </Link>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div> */}

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-28">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-14 text-center backdrop-blur-xl sm:px-10 sm:py-16"
          >

            <Sparkles
              className="mx-auto text-cyan-300"
              size={28}
            />

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Tell us what you're building and let's explore how technology
              can help move it forward.
            </p>

            <Link href="/get-started">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                Start Your Project
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