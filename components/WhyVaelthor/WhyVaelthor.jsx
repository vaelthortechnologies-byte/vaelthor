"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Layers3,
  Headphones,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Zap,
    number: "01",
    title: "Performance First",
    description:
      "We focus on fast-loading, responsive and scalable digital experiences that work smoothly across devices.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Built With Reliability",
    description:
      "Clean architecture, secure implementation and maintainable code are considered from the beginning.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Scalable Solutions",
    description:
      "Our solutions are designed with future growth in mind, so your digital product can evolve with your business.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Long-Term Support",
    description:
      "We stay focused beyond launch with improvements, maintenance and technical support when your business needs it.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyVaelthor() {
  return (
    <section
      id="why-vaelthor"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Center blue glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]"
        />

        {/* Cyan glow */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-100px] top-[15%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Purple glow */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-100px] right-[-80px] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]"
        />

        {/* Floating particles */}

        <motion.span
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-400"
        />

        <motion.span
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[12%] top-[25%] h-1 w-1 rounded-full bg-purple-400"
        />

        <motion.span
          animate={{
            x: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-[25%] left-[45%] h-1.5 w-1.5 rounded-full bg-blue-400"
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =======================================================
            HEADING
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-xl"
          >
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-purple-400"
            />

            <span>Why Vaelthor</span>

            <Sparkles
              size={14}
              className="text-purple-400"
            />
          </motion.div>

          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technology With
            <br />

            <motion.span
              initial={{
                backgroundPosition: "0% 50%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Purpose
            </motion.span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            We combine technology, design and business thinking to create
            digital solutions that are built for real-world results.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* =====================================================
              LEFT PANEL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -55,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Outer glow */}

            <motion.div
              animate={{
                opacity: [0.15, 0.3, 0.15],
                scale: [0.98, 1.03, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 blur-2xl"
            />

            {/* Main card */}

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.16] sm:p-9">
              {/* Animated spotlight */}

              <motion.div
                animate={{
                  x: [0, 40, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]"
              />

              <motion.div
                animate={{
                  x: [0, -30, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-purple-500/10 blur-[80px]"
              />

              <div className="relative">
                {/* Label */}

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-400/60" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Built For The Future
                  </p>
                </div>

                {/* Main heading */}

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Turning ideas into
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    digital products.
                  </span>
                </h3>

                <p className="mt-6 leading-7 text-gray-400">
                  Whether you are launching a new business, improving an
                  existing operation or creating a completely new digital
                  product, we build technology around your actual goals.
                </p>

                {/* =================================================
                    MINI STATS
                ================================================= */}

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {/* Strategy */}

                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    className="group/stat relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-cyan-400/20"
                  >
                    <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-white">
                          01
                        </p>

                        <CheckCircle2
                          size={15}
                          className="text-cyan-400"
                        />
                      </div>

                      <p className="mt-1 text-xs text-gray-500">
                        Strategy First
                      </p>
                    </div>
                  </motion.div>

                  {/* Growth */}

                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    className="group/stat relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-purple-400/20"
                  >
                    <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-purple-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-white">
                          ∞
                        </p>

                        <Sparkles
                          size={15}
                          className="text-purple-400"
                        />
                      </div>

                      <p className="mt-1 text-xs text-gray-500">
                        Growth Mindset
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Link */}

                <Link
                  href="/about"
                  className="group/about mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]"
                >
                  <span>Learn More About Us</span>

                  <motion.span
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowUpRight size={17} />
                  </motion.span>
                </Link>

                {/* Bottom decorative line */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                  }}
                  className="mt-8 h-px bg-gradient-to-r from-cyan-400/30 via-blue-400/10 to-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT BENEFITS
          ===================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              staggerChildren: 0.12,
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.number}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className="group relative"
                >
                  {/* Outer gradient */}

                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-purple-500/30 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />

                  {/* Card */}

                  <div className="relative h-full min-h-[270px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-2xl transition-all duration-500 group-hover:border-white/[0.17] group-hover:bg-white/[0.055]">
                    {/* Spotlight */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/0 blur-[70px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                    {/* Moving top line */}

                    <motion.div
                      initial={{
                        x: "-100%",
                      }}
                      whileHover={{
                        x: "100%",
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                      className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                    />

                    {/* Top row */}

                    <div className="relative z-10 flex items-start justify-between">
                      {/* Icon */}

                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.1, 0.2, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.25,
                          }}
                          className="absolute -inset-3 rounded-2xl bg-cyan-400 blur-xl"
                        />

                        <motion.div
                          whileHover={{
                            scale: 1.12,
                            rotate: 5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 16,
                          }}
                          className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#080d20] shadow-lg transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.7}
                            className="text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                          />

                          {/* Active dot */}

                          <motion.span
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: index * 0.15,
                            }}
                            className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-400"
                          />
                        </motion.div>
                      </div>

                      {/* Number */}

                      <motion.span
                        whileHover={{
                          scale: 1.15,
                        }}
                        className="text-xs font-bold tracking-[0.25em] text-white/[0.12] transition-colors duration-300 group-hover:text-cyan-400/40"
                      >
                        {benefit.number}
                      </motion.span>
                    </div>

                    {/* Title */}

                    <h4 className="relative z-10 mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {benefit.title}
                    </h4>

                    {/* Description */}

                    <p className="relative z-10 mt-3 text-sm leading-6 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {benefit.description}
                    </p>

                    {/* Bottom indicator */}

                    <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
                      <motion.div
                        initial={{
                          width: "0%",
                        }}
                        whileHover={{
                          width: "100%",
                        }}
                        className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
                      />
                    </div>

                    {/* Corner arrow */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -5,
                        y: 5,
                      }}
                      whileHover={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      className="absolute bottom-5 right-5 text-cyan-400"
                    >
                      <ArrowRight size={15} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.05]"
            >
              <Sparkles
                size={15}
                className="text-cyan-400"
              />
            </motion.div>

            <p className="text-base font-medium text-gray-500 sm:text-lg">
              Technology should solve problems,
              <span className="ml-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold text-transparent">
                not create them.
              </span>
            </p>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 100,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-5 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}