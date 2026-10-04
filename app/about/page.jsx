"use client";

import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhoWeAre from "@/components/About/WhoWeAre";
import WhatWeBelieve from "@/components/About/WhatWeBelieve";
import OurApproach from "@/components/About/OurApproach";
import Capabilities from "@/components/About/Capabilities";
import AboutCTA from "@/components/About/AboutCTA";


import {
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  return (


    <main className="min-h-screen bg-[#050816] text-white">
      
      {/* Hero */}

            <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">

        {/* Background */}


        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />

          <div className="absolute right-[-10%] top-32 h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[140px]" />

          <div className="absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[130px]" />
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
              About Vaelthor Technologies
            </div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              We Build Technology
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                With Purpose.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              Vaelthor Technologies is a technology company focused on
              creating modern websites, applications and custom digital
              solutions that help businesses turn ideas into real-world
              products.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
            >

              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 sm:w-auto"
                >
                  Start a Project
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/[0.07] sm:w-auto"
                >
                  Explore Services
                  <Code2 size={18} />
                </motion.button>
              </Link>

            </motion.div>
          </motion.div>

          {/* Bottom Feature Cards */}

          <div className="mx-auto mt-20 grid max-w-5xl gap-4 sm:grid-cols-3">

            <Feature
              icon={<Code2 size={22} />}
              title="Technology"
              text="Modern tools and scalable development."
            />

            <Feature
              icon={<Rocket size={22} />}
              title="Innovation"
              text="Ideas transformed into practical products."
            />

            <Feature
              icon={<Sparkles size={22} />}
              title="Experience"
              text="Clean interfaces built around people."
            />

          </div>
        </div>
      </section>
     <WhoWeAre />
     <WhatWeBelieve />
     <OurApproach />
      <Capabilities />
      <AboutCTA />
      <Footer />
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-white/20"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#080d20] text-cyan-300">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {text}
      </p>
    </motion.div>
  );
}