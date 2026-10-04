"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/[0.08] blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/[0.09] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-16 text-center backdrop-blur-xl sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          {/* Decorative circles */}

          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-cyan-400/10" />

          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full border border-purple-400/10" />

          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            <Sparkles size={15} />

            Ready To Build?
          </motion.div>

          {/* Heading */}

          <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Tell us about your idea, business or project. We&apos;ll help you
            turn it into a practical digital solution designed for growth.
          </p>

          {/* Buttons */}

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link href="/get-started">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 sm:w-auto"
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] sm:w-auto"
              >
                <MessageCircle size={18} />

                Talk To Us
              </motion.button>
            </Link>
          </div>

          {/* Small trust text */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500">
            <span>Web Development</span>

            <span className="h-1 w-1 rounded-full bg-gray-700" />

            <span>Mobile Apps</span>

            <span className="h-1 w-1 rounded-full bg-gray-700" />

            <span>Custom Software</span>

            <span className="h-1 w-1 rounded-full bg-gray-700" />
            
            <span>Digital Solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}