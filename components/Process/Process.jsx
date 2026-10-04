"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    shortTitle: "Understand",
    description:
      "We understand your business, goals, audience, requirements and the problem your digital product needs to solve.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategy",
    shortTitle: "Plan",
    description:
      "We turn your requirements into a clear technical and product strategy with the right features and priorities.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design",
    shortTitle: "Create",
    description:
      "We create modern interfaces and user experiences designed around clarity, usability and your brand.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    shortTitle: "Build",
    description:
      "Our development process turns the approved design into a responsive, scalable and production-ready solution.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    shortTitle: "Deliver",
    description:
      "After testing and optimization, we prepare your product for deployment and make sure everything works as expected.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth",
    shortTitle: "Improve",
    description:
      "After launch, we can continue improving, maintaining and expanding your digital product as your business grows.",
    icon: TrendingUp,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(null);

  const progressWidth =
    activeStep === null
      ? 0
      : (activeStep / (steps.length - 1)) * 84;

  const progressPosition =
    activeStep === null
      ? 8
      : 8 + (activeStep / (steps.length - 1)) * 84;

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute bottom-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.07] blur-[130px]" />

        <div className="absolute right-[-10%] top-20 h-[350px] w-[350px] rounded-full bg-purple-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            Our Process
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From Idea
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              To Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A structured process keeps your project clear, focused and moving
            forward from the first conversation to long-term growth.
          </p>
        </motion.div>

        {/* Desktop Process */}

        <div className="relative mt-20 hidden lg:block">
          {/* Base Connecting Line */}

          <div className="absolute left-[8%] right-[8%] top-[42px] h-px bg-gradient-to-r from-cyan-500/10 via-cyan-400/50 to-purple-500/10" />

          {/* Initial Animated Line */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute left-[8%] right-[8%] top-[42px] h-px origin-left bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
          />

          {/* Hover Progress Line */}

          <motion.div
            className="absolute left-[8%] top-[42px] h-[2px] origin-left rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            animate={{
              width: `${progressWidth}%`,
              opacity: activeStep === null ? 0 : 1,
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          />

          {/* Traveling Glow Dot */}

          {activeStep !== null && (
            <motion.div
              className="pointer-events-none absolute top-[35px] z-20"
              initial={{
                left: "8%",
                opacity: 0,
              }}
              animate={{
                left: `${progressPosition}%`,
                opacity: 1,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              <div className="relative -translate-x-1/2">
                <div className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,1),0_0_25px_rgba(59,130,246,0.8)]" />

                <motion.div
                  className="absolute inset-0 rounded-full border border-cyan-300"
                  animate={{
                    scale: [1, 2.2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          )}

          {/* Process Grid */}

          <div className="grid grid-cols-6 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              const isActive = activeStep === index;

              const isReached =
                activeStep !== null && index <= activeStep;

              return (
                <motion.div
                  key={step.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative text-center"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Icon Circle */}

                  <motion.div
                    animate={{
                      scale: isActive ? 1.18 : isReached ? 1.05 : 1,
                      y: isActive ? -5 : 0,
                    }}
                    whileHover={{
                      rotate: [0, -6, 6, -3, 0],
                    }}
                    transition={{
                      scale: {
                        duration: 0.3,
                      },
                      y: {
                        duration: 0.3,
                      },
                      rotate: {
                        duration: 0.5,
                      },
                    }}
                    className={`relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full border bg-[#080d20] shadow-xl transition-all duration-500 ${
                      isActive
                        ? "border-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                        : isReached
                        ? "border-cyan-400/40 shadow-cyan-500/20"
                        : "border-white/10"
                    }`}
                  >
                    {/* Inner Glow */}

                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : isReached ? 0.5 : 0,
                        scale: isActive ? 1 : 0.8,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20"
                    />

                    {/* Pulsing Ring */}

                    {isActive && (
                      <>
                        <motion.div
                          initial={{
                            scale: 0.8,
                            opacity: 0.8,
                          }}
                          animate={{
                            scale: 1.55,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 rounded-full border border-cyan-400/60"
                        />

                        <motion.div
                          initial={{
                            scale: 0.8,
                            opacity: 0.6,
                          }}
                          animate={{
                            scale: 1.3,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0.25,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 rounded-full border border-blue-400/40"
                        />
                      </>
                    )}

                    {/* Icon */}

                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="relative"
                    >
                      <Icon
                        size={27}
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : isReached
                            ? "text-cyan-200"
                            : "text-cyan-300"
                        }`}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Number */}

                  <motion.p
                    animate={{
                      y: isActive ? -2 : 0,
                      opacity: isActive ? 1 : 0.85,
                    }}
                    className="mt-6 text-xs font-bold tracking-[0.2em] text-cyan-400"
                  >
                    {step.number}
                  </motion.p>

                  {/* Title */}

                  <motion.h3
                    animate={{
                      y: isActive ? -2 : 0,
                    }}
                    className={`mt-2 text-lg font-bold transition-colors duration-300 ${
                      isActive ? "text-cyan-200" : "text-white"
                    }`}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>

                  {/* Active Indicator */}

                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="mx-auto mt-4 h-px w-12 origin-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Process */}

        <div className="relative mt-16 lg:hidden">
          {/* Vertical Line */}

          <div className="absolute bottom-10 left-[25px] top-10 w-px bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-purple-400/20" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="relative flex gap-5"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Icon */}

                  <motion.div
                    animate={{
                      scale: isActive ? 1.12 : 1,
                      rotate: isActive ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border bg-[#080d20] transition-all duration-300 ${
                      isActive
                        ? "border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                        : "border-white/10"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        initial={{
                          scale: 0.8,
                          opacity: 0.7,
                        }}
                        animate={{
                          scale: 1.5,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 rounded-full border border-cyan-400"
                      />
                    )}

                    <Icon
                      size={21}
                      className={`relative transition-colors duration-300 ${
                        isActive ? "text-white" : "text-cyan-300"
                      }`}
                    />
                  </motion.div>

                  {/* Content */}

                  <motion.div
                    animate={{
                      y: isActive ? -3 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`flex-1 rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 ${
                      isActive
                        ? "border-cyan-400/30 bg-cyan-500/[0.06] shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                        : "border-white/10 bg-white/[0.035]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold tracking-[0.18em] text-cyan-400">
                          {step.number}
                        </p>

                        <h3
                          className={`mt-1 text-xl font-bold transition-colors duration-300 ${
                            isActive ? "text-cyan-200" : "text-white"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500 sm:block">
                        {step.shortTitle}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 text-center"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <ArrowDown
              size={22}
              className="mb-4 animate-bounce text-cyan-400"
            />

            <p className="text-lg font-medium text-gray-300 sm:text-xl">
              Have an idea?
              <span className="ml-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold text-transparent">
                Let&apos;s turn it into something real.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}