"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Smartphone,
  Boxes,
  Database,
  Palette,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Globe2,
    number: "01",
    title: "Web Development",
    text: "Fast, responsive and scalable websites built for modern businesses and digital experiences.",
    tags: ["Next.js", "React", "Modern UI"],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile Applications",
    text: "User-focused mobile experiences designed to help businesses reach customers on every screen.",
    tags: ["Mobile", "UX", "Scalable"],
  },
  {
    icon: Boxes,
    number: "03",
    title: "Custom Software",
    text: "Purpose-built software solutions designed around your unique business processes and requirements.",
    tags: ["Automation", "Systems", "Integration"],
  },
  {
    icon: Database,
    number: "04",
    title: "ERP & Business Systems",
    text: "Connected business systems that simplify workflows, manage information and improve operational visibility.",
    tags: ["ERP", "Data", "Management"],
  },
  {
    icon: Palette,
    number: "05",
    title: "UI/UX Design",
    text: "Clean, intuitive interfaces that combine visual quality with usability and meaningful user experiences.",
    tags: ["UI", "UX", "Product Design"],
  },
  {
    icon: Layers3,
    number: "06",
    title: "Digital Solutions",
    text: "End-to-end digital solutions that bring technology, design and business strategy together.",
    tags: ["Strategy", "Technology", "Growth"],
  },
];

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[#070b1c] py-24 sm:py-28 lg:py-32">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />

        <div className="absolute right-[-10%] bottom-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/[0.05] blur-[150px]" />
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Our Capabilities
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technology built around
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            From websites and applications to custom business systems, we
            combine technology and design to create solutions that solve real
            problems.
          </p>
        </motion.div>

        {/* Capability Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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

                {/* Hover Glow */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-500/20 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 group-hover:border-white/20 group-hover:bg-white/[0.055]">

                  {/* Number */}
                  <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.035] transition duration-500 group-hover:text-cyan-400/[0.08]">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                    <Icon
                      size={24}
                      className="text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                    {item.text}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-400 transition group-hover:border-cyan-400/20 group-hover:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Link */}
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cyan-300 opacity-70 transition duration-300 group-hover:opacity-100">
                    Explore capability
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="text-lg leading-8 text-gray-400 sm:text-xl">
            One team.
            <span className="text-white"> Multiple capabilities.</span>
            <br />
            <span className="text-cyan-300">
              One technology partner for what comes next.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}