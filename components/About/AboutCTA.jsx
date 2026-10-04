"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  Rocket,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute left-[-10%] bottom-[-20%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

        <div className="absolute right-[-10%] top-[-20%] h-[350px] w-[350px] rounded-full bg-purple-500/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-14 text-center backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >

          {/* Decorative Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

          <div className="relative z-10">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 text-sm font-medium text-cyan-300"
            >
              <Sparkles size={15} />
              Let's Build Something Great
            </motion.div>

            {/* Heading */}
            <h2 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's turn it into reality.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Whether you are starting something new, improving an existing
              product or looking for a long-term technology partner, let's
              create something meaningful together.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

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
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
                >
                  <MessageCircle size={18} />
                  Talk to Us
                </motion.div>
              </Link>

            </div>

            {/* Mini Features */}
            <div className="mx-auto mt-12 grid max-w-2xl gap-4 border-t border-white/[0.07] pt-8 sm:grid-cols-3">

              <MiniFeature
                icon={<Rocket size={17} />}
                text="Build for growth"
              />

              <MiniFeature
                icon={<Sparkles size={17} />}
                text="Modern technology"
              />

              <MiniFeature
                icon={<MessageCircle size={17} />}
                text="Human support"
              />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function MiniFeature({ icon, text }) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
      <span className="text-cyan-300">
        {icon}
      </span>

      {text}
    </div>
  );
}