"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  LayoutDashboard,
  Palette,
  Megaphone,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Development",
    description:
      "Fast, scalable and modern websites built to create a strong digital presence and convert visitors into customers.",
    gradient: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-400",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile App Development",
    description:
      "Powerful mobile applications designed with smooth experiences, modern interfaces and scalable architecture.",
    gradient: "from-blue-400 to-purple-500",
    glow: "bg-blue-400",
  },
  {
    icon: Code2,
    number: "03",
    title: "Custom Software",
    description:
      "Tailored software solutions built around your business processes, requirements and long-term goals.",
    gradient: "from-purple-400 to-pink-500",
    glow: "bg-purple-400",
  },
  {
    icon: LayoutDashboard,
    number: "04",
    title: "ERP & Business Solutions",
    description:
      "Connected business systems that help manage operations, data, customers and everyday workflows efficiently.",
    gradient: "from-cyan-400 to-teal-500",
    glow: "bg-teal-400",
  },
  {
    icon: Palette,
    number: "05",
    title: "UI/UX Design",
    description:
      "Clean, intuitive and engaging interfaces that make your digital products easier and more enjoyable to use.",
    gradient: "from-indigo-400 to-cyan-500",
    glow: "bg-indigo-400",
  },
  {
    icon: Megaphone,
    number: "06",
    title: "Digital Marketing",
    description:
      "Data-driven digital strategies designed to improve visibility, reach the right audience and generate opportunities.",
    gradient: "from-orange-400 to-purple-500",
    glow: "bg-orange-400",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
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
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main cyan glow */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Purple glow */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[-10%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]"
        />

        {/* Center glow */}

        <motion.div
          animate={{
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[170px]"
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
          className="absolute left-[15%] top-[25%] h-1.5 w-1.5 rounded-full bg-cyan-400"
        />

        <motion.span
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[15%] top-[35%] h-1 w-1 rounded-full bg-purple-400"
        />

        <motion.span
          animate={{
            x: [0, 20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-[20%] left-[40%] h-1.5 w-1.5 rounded-full bg-blue-400"
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.08] px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl"
          >
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-cyan-400"
            />

            <span>What We Do</span>

            <Sparkles
              size={14}
              className="text-cyan-400"
            />
          </motion.div>

          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Digital Solutions
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
              Built For Growth
            </motion.span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            From powerful websites to intelligent business systems, we build
            digital products that help businesses move forward.
          </p>
        </motion.div>

        {/* =======================================================
            SERVICES GRID
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="group relative"
              >
                {/* =================================================
                    OUTER GLOW
                ================================================= */}

                <div
                  className={`absolute -inset-[1px] rounded-[26px] bg-gradient-to-r ${service.gradient} opacity-0 blur-md transition-all duration-700 group-hover:opacity-40`}
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className="
                    relative
                    h-full
                    min-h-[360px]
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-white/[0.08]
                    bg-[#080d20]/80
                    p-7
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    group-hover:border-white/[0.18]
                    group-hover:bg-[#0a1026]/90
                    sm:p-8
                  "
                >
                  {/* =================================================
                      CARD SPOTLIGHT
                  ================================================= */}

                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full ${service.glow} opacity-0 blur-[100px] transition-all duration-700 group-hover:opacity-20`}
                  />

                  {/* =================================================
                      MOVING TOP LINE
                  ================================================= */}

                  <motion.div
                    initial={{
                      x: "-100%",
                    }}
                    whileHover={{
                      x: "100%",
                    }}
                    transition={{
                      duration: 1.1,
                      ease: "easeInOut",
                    }}
                    className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100`}
                  />

                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div className="absolute right-6 top-5 overflow-hidden">
                    <motion.span
                      initial={{
                        opacity: 0.08,
                      }}
                      whileHover={{
                        opacity: 0.35,
                        scale: 1.1,
                      }}
                      className="block origin-right text-5xl font-black tracking-tighter text-white transition-all duration-500"
                    >
                      {service.number}
                    </motion.span>
                  </div>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div className="relative mb-8 inline-flex">
                    {/* Glow */}

                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.12, 0.22, 0.12],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.25,
                        ease: "easeInOut",
                      }}
                      className={`absolute -inset-4 rounded-3xl ${service.glow} blur-2xl`}
                    />

                    {/* Rotating outer ring */}

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute -inset-2 rounded-2xl border border-dashed border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    {/* Icon box */}

                    <motion.div
                      whileHover={{
                        scale: 1.12,
                        rotate: 4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 16,
                      }}
                      className="
                        relative
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#080d20]
                        shadow-[0_10px_35px_rgba(0,0,0,0.3)]
                        transition-all
                        duration-500
                        group-hover:border-white/20
                      "
                    >
                      {/* Inner gradient */}

                      <div
                        className={`absolute inset-1.5 rounded-xl bg-gradient-to-br ${service.gradient} opacity-[0.06] transition-opacity duration-500 group-hover:opacity-20`}
                      />

                      <Icon
                        size={26}
                        strokeWidth={1.7}
                        className="relative z-10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:text-white"
                      />

                      {/* Tiny active dot */}

                      <motion.span
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className={`absolute -right-1 -top-1 h-2 w-2 rounded-full ${service.glow}`}
                      />
                    </motion.div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <h3 className="relative z-10 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="relative z-10 mt-4 text-sm leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300 sm:text-base">
                    {service.description}
                  </p>

                  {/* =================================================
                      LINK
                  ================================================= */}

                  <Link
                    href="/services"
                    className="group/link relative z-10 mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors duration-300 group-hover:text-cyan-300"
                  >
                    <span>Explore Service</span>

                    <motion.span
                      whileHover={{
                        x: 4,
                        y: -4,
                      }}
                      className="flex"
                    >
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </motion.span>
                  </Link>

                  {/* =================================================
                      BOTTOM PROGRESS LINE
                  ================================================= */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileHover={{
                        width: "100%",
                      }}
                      className={`h-full bg-gradient-to-r ${service.gradient}`}
                    />
                  </div>

                  {/* =================================================
                      CORNER DECORATION
                  ================================================= */}

                  <div className="absolute bottom-5 right-5 h-8 w-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <motion.div
                      animate={{
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute inset-0 rounded-lg border border-dashed bg-gradient-to-br ${service.gradient} bg-clip-border opacity-30`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          <p className="text-sm text-gray-500 sm:text-base">
            Have a unique project in mind?
          </p>

          <Link
            href="/get-started"
            className="group mt-4 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-2.5 text-sm font-semibold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <span>Let&apos;s build it together</span>

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={17} />
            </motion.span>
          </Link>

          {/* Decorative line */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 120,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-7 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}