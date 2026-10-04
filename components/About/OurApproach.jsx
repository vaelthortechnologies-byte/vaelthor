"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    text: "We understand your business, audience, goals and challenges before defining the right digital solution.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    text: "We transform ideas into clear user experiences, thoughtful interfaces and a practical product strategy.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    text: "Our development process turns the approved direction into fast, reliable and scalable digital products.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow",
    text: "After launch, we focus on improvements, optimization and future opportunities as your business evolves.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

        <div className="absolute right-[-15%] bottom-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/[0.05] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Our Approach
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            From idea to
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              real-world impact.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            A structured approach helps us turn complex ideas into focused,
            useful and scalable digital solutions.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20">

          {/* Connecting Line - Desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-cyan-400/20 via-blue-400/30 to-purple-400/20 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >

                  {/* Step Number */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#080d20] shadow-xl shadow-black/20 transition duration-500 group-hover:border-cyan-400/40 group-hover:shadow-cyan-500/10">

                    <Icon
                      size={25}
                      className="text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white"
                    />

                  </div>

                  {/* Card */}
                  <div className="mt-6 h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-center backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:bg-white/[0.055]">

                    {/* Number */}
                    <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
                      STEP {step.number}
                    </p>

                    {/* Title */}
                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                      {step.text}
                    </p>

                    {/* Arrow */}
                    <div className="mt-6 flex justify-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                        <ArrowRight
                          size={16}
                          className="text-gray-500 transition group-hover:text-cyan-300"
                        />
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom Statement */} 
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="relative z-20 mx-auto mt-28 max-w-3xl text-center"
>
          <p className="text-lg font-medium leading-8 text-gray-400 sm:text-xl">
            We don't just deliver a project.
            <span className="text-white"> We build a foundation for what's next.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}