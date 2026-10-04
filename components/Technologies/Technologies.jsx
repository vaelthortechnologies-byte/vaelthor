"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Palette,
  Cloud,
  Server,
  Globe,
  Braces,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    category: "Web Framework",
    icon: Globe,
  },
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: Braces,
  },
  {
    name: "Tailwind CSS",
    category: "UI Styling",
    icon: Palette,
  },
  {
    name: "Supabase",
    category: "Backend & Database",
    icon: Database,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
  },
  {
    name: "Mobile Development",
    category: "Applications",
    icon: Smartphone,
  },
  {
    name: "Cloud & Deployment",
    category: "Infrastructure",
    icon: Cloud,
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

        <div className="absolute left-[-10%] top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

        <div className="absolute right-[-10%] bottom-10 h-[350px] w-[350px] rounded-full bg-purple-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Our Technology
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built With
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            We use modern development tools and technologies to build
            reliable, scalable and high-performance digital products.
          </p>
        </motion.div>

        {/* Technology Grid */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative"
              >
                {/* Glow */}

                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/30 to-purple-500/30 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                {/* Card */}

                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 group-hover:border-white/20 group-hover:bg-white/[0.06]">

                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#080d20]">
                      <Icon
                        size={23}
                        className="text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white"
                      />
                    </div>

                    <span className="text-xs text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {technology.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {technology.category}
                  </p>

                  <div className="mt-5 h-[2px] w-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-gray-500 sm:text-base">
            Technology is only the foundation. We choose the right tools
            according to your product, business requirements and growth goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}