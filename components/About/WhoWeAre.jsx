"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Lightbulb,
  Users,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const points = [
  {
    icon: Lightbulb,
    title: "Ideas Into Products",
    text: "We help turn business ideas into practical digital products that can be launched, improved and scaled.",
  },
  {
    icon: Building2,
    title: "Business Focused",
    text: "Technology should solve real business problems. Our solutions are planned around your goals and workflows.",
  },
  {
    icon: Users,
    title: "Built Around People",
    text: "From interfaces to complete applications, we focus on experiences that are clear, useful and easy to use.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute right-[-10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Who We Are
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Technology that
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                moves businesses forward.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-400 sm:text-lg">
              Vaelthor Technologies is focused on building modern digital
              experiences and software solutions for businesses that want to
              grow in an increasingly digital world.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-500">
              We bring together development, design and technology strategy to
              create solutions that are not only visually modern, but also
              practical, maintainable and ready to evolve.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Explore What We Build
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* RIGHT */}

          <div className="grid gap-4">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 6 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 group-hover:border-white/20 group-hover:bg-white/[0.06]">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#080d20]">
                      <Icon
                        size={22}
                        className="text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {point.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/[0.07] pt-10"
        >
          <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-white/[0.07]">

            <Stat
              number="01"
              title="Think"
              text="Understand the problem."
            />

            <Stat
              number="02"
              title="Build"
              text="Create the right solution."
            />

            <Stat
              number="03"
              title="Grow"
              text="Improve for what comes next."
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, title, text }) {
  return (
    <div className="px-0 sm:px-8 first:pl-0 last:pr-0">
      <p className="text-xs font-bold tracking-[0.2em] text-cyan-400">
        {number}
      </p>

      <h3 className="mt-2 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {text}
      </p>
    </div>
  );
}