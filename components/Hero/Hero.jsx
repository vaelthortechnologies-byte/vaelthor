"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  MousePointer2,
  Code2,
} from "lucide-react";

import AnimatedBackground from "./AnimatedBackground";
import BrowserMockup from "./BrowserMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}

      <AnimatedBackground />

      {/* =========================================================
          EXTRA AMBIENT GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Center glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[42%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]"
        />

        {/* Purple glow */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-150px] top-[15%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[140px]"
        />

        {/* Blue glow */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-180px] left-[-120px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]"
        />

        {/* Floating particles */}

        <motion.span
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-cyan-400"
        />

        <motion.span
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute left-[48%] top-[18%] h-1 w-1 rounded-full bg-blue-400"
        />

        <motion.span
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute right-[12%] top-[38%] h-1.5 w-1.5 rounded-full bg-purple-400"
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          pb-20
          pt-24
          sm:px-6
          sm:pb-24
          sm:pt-28
          lg:px-8
          lg:pb-28
          lg:pt-32
        "
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="text-center lg:text-left"
          >
            {/* =====================================================
                WELCOME BADGE
            ===================================================== */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                  scale: 0.9,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="relative inline-flex"
            >
              {/* Badge glow */}

              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-1 rounded-full bg-cyan-400/20 blur-md"
              />

              <div className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] px-4 py-2 text-xs text-cyan-300 backdrop-blur-xl sm:px-5 sm:text-sm">
                {/* Rocket */}

                <motion.span
                  animate={{
                    y: [0, -5, 0],
                    rotate: [-12, 12, -12],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  🚀
                </motion.span>

                <span>Welcome to Vaelthor Technologies</span>

                {/* Live dot */}

                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                  }}
                  className="ml-1 h-1.5 w-1.5 rounded-full bg-cyan-400"
                />
              </div>
            </motion.div>

            {/* =====================================================
                HEADING
            ===================================================== */}

            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="
                mt-6
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:mt-8
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
              "
            >
              Transform Your
              <br />

              {/* Digital Vision */}

              <span className="relative inline-block">
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
                  className="
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-400
                    to-purple-400
                    bg-[length:200%_auto]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Digital Vision
                </motion.span>

                {/* Animated underline */}

                <motion.div
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  animate={{
                    width: "100%",
                    opacity: 1,
                  }}
                  transition={{
                    width: {
                      duration: 1.2,
                      delay: 1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.4,
                      delay: 1,
                    },
                  }}
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-purple-500
                    shadow-[0_0_15px_rgba(34,211,238,0.5)]
                  "
                />

                {/* Moving light on underline */}

                <motion.span
                  animate={{
                    left: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -bottom-[4px]
                    h-[7px]
                    w-10
                    -translate-x-1/2
                    rounded-full
                    bg-white/80
                    blur-sm
                  "
                />
              </span>

              <br />

              Into Reality
            </motion.h1>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
                md:text-xl
                lg:mx-0
              "
            >
              We craft{" "}
              <motion.span
                whileHover={{
                  color: "#67e8f9",
                }}
                className="font-semibold text-cyan-400 transition-colors"
              >
                high-performance websites
              </motion.span>
              ,{" "}
              <motion.span
                whileHover={{
                  color: "#93c5fd",
                }}
                className="font-semibold text-blue-400 transition-colors"
              >
                powerful mobile applications
              </motion.span>{" "}
              and{" "}
              <motion.span
                whileHover={{
                  color: "#d8b4fe",
                }}
                className="font-semibold text-purple-400 transition-colors"
              >
                result-driven digital marketing
              </motion.span>{" "}
              solutions that accelerate business growth, strengthen your brand,
              and turn ideas into extraordinary digital experiences.
            </motion.p>

            {/* =====================================================
                BUTTONS
            ===================================================== */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row lg:justify-start"
            >
              {/* START PROJECT */}

              <Link href="/get-started" className="group">
                <motion.button
                  whileHover={{
                    scale: 1.045,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-purple-500
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-cyan-500/20
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                    sm:text-base
                  "
                >
                  {/* Button shine */}

                  <motion.span
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-16
                      skew-x-[-20deg]
                      bg-white/20
                      blur-md
                    "
                  />

                  <span className="relative z-10">Start Project</span>

                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <ArrowRight
                      size={18}
                    />
                  </motion.span>
                </motion.button>
              </Link>

              {/* VIEW SERVICES */}

              <Link href="/services" className="group">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-cyan-400/50
                    hover:bg-cyan-400/[0.06]
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                    sm:text-base
                  "
                >
                  <Sparkles
                    size={17}
                    className="text-cyan-400 transition-transform duration-500 group-hover:rotate-12"
                  />

                  <span>View Services</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* =====================================================
                TRUST / MINI FEATURES
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-3
                text-xs
                text-gray-500
                lg:justify-start
              "
            >
              <span className="flex items-center gap-2">
                <Zap
                  size={14}
                  className="text-cyan-400"
                />
                High Performance
              </span>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span className="flex items-center gap-2">
                <Code2
                  size={14}
                  className="text-blue-400"
                />
                Modern Technology
              </span>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-purple-400"
                />
                Premium Experience
              </span>
            </motion.div>
          </motion.div>

          {/* =======================================================
              RIGHT SIDE
          ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mt-10
              flex
              min-h-[420px]
              w-full
              items-center
              justify-center
              sm:min-h-[500px]
              md:min-h-[560px]
              lg:mt-0
              lg:min-h-[620px]
            "
          >
            {/* =====================================================
                BACK GLOW
            ===================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-cyan-400/10
                blur-[100px]
                sm:h-[380px]
                sm:w-[380px]
              "
            />

            {/* =====================================================
                FLOATING TOP BADGE
            ===================================================== */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[2%]
                top-[7%]
                z-20
                hidden
                items-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-[#0a1024]/80
                px-4
                py-3
                text-xs
                text-gray-300
                shadow-2xl
                backdrop-blur-xl
                sm:flex
              "
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10">
                <Zap
                  size={14}
                  className="text-cyan-400"
                />
              </span>

              <div>
                <p className="font-semibold text-white">
                  Fast & Scalable
                </p>

                <p className="text-[10px] text-gray-500">
                  Built for growth
                </p>
              </div>
            </motion.div>

            {/* =====================================================
                FLOATING BOTTOM BADGE
            ===================================================== */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="
                absolute
                bottom-[8%]
                left-[0%]
                z-20
                hidden
                items-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-[#0a1024]/80
                px-4
                py-3
                shadow-2xl
                backdrop-blur-xl
                sm:flex
              "
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-purple-400/10">
                <MousePointer2
                  size={15}
                  className="text-purple-400"
                />

                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-purple-400"
                />
              </div>

              <div>
                <p className="font-semibold text-white">
                  Premium UI
                </p>

                <p className="text-[10px] text-gray-500">
                  Designed to impress
                </p>
              </div>
            </motion.div>

            {/* =====================================================
                MOCKUP WRAPPER
            ===================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full"
            >
              <BrowserMockup />
            </motion.div>

            {/* =====================================================
                FLOATING ORBS
            ===================================================== */}

            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[8%]
                top-[20%]
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_20px_6px_rgba(34,211,238,0.25)]
              "
            />

            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="
                absolute
                bottom-[22%]
                right-[6%]
                h-2
                w-2
                rounded-full
                bg-purple-400
                shadow-[0_0_20px_6px_rgba(168,85,247,0.25)]
              "
            />
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM SCROLL INDICATOR
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
          className="mt-10 flex justify-center lg:mt-2"
        >
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-600"
          >
            <span>Explore</span>

            <span className="h-8 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}