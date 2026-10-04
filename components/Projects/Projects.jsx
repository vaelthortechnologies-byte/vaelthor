"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  ShoppingBag,
  GraduationCap,
  BookOpen,
  Leaf,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Education Platform",
    title: "Udaan World School",
    description:
      "A modern school website designed to present academics, admissions, events and the school's digital presence through a clean experience.",
    icon: GraduationCap,
    tags: ["Next.js", "Supabase", "Responsive"],
    gradient: "from-cyan-400 to-blue-500",
    type: "EDUCATION",
    link: "https://www.udaanworldschool.in/",
  },
  {
    number: "02",
    category: "E-Commerce",
    title: "King Collection",
    description:
      "A modern e-commerce experience with product discovery, variants, wishlist, cart and a scalable shopping workflow.",
    icon: ShoppingBag,
    tags: ["Next.js", "Supabase", "E-Commerce"],
    gradient: "from-blue-400 to-purple-500",
    type: "COMMERCE",
    link: null,
  },
  {
    number: "03",
    category: "Business Website",
    title: "Vaelthor Technologies",
    description:
      "Our own digital platform built to showcase technology services, products, capabilities and future solutions.",
    icon: Globe2,
    tags: ["Next.js", "Modern UI", "SEO"],
    gradient: "from-purple-400 to-pink-500",
    type: "TECHNOLOGY",
    link: null,
  },
  {
    number: "04",
    category: "Education & Coaching",
    title: "Excellent Coaching",
    description:
      "A modern coaching platform focused on learning, programs, coaches, testimonials and an engaging digital experience.",
    icon: BookOpen,
    tags: ["Next.js", "Supabase", "AI Features"],
    gradient: "from-emerald-400 to-cyan-500",
    type: "EDUCATION",
    link: "https://excellentcoaching.online/",
  },
  {
    number: "05",
    category: "Ayurvedic E-Commerce",
    title: "Pure Ayur Herbs",
    description:
      "A modern digital experience for an Ayurvedic products brand, designed to showcase the brand and its products through a clean online presence.",
    icon: Leaf,
    tags: ["E-Commerce", "Modern UI", "Responsive"],
    gradient: "from-green-400 to-emerald-500",
    type: "AYURVEDA",
    link: "https://www.purreayurherbs.com/",
  },
  {
    number: "06",
    category: "Digital Experience",
    title: "Custom Digital Solutions",
    description:
      "Purpose-built digital experiences combining modern interfaces, scalable technology and business-focused functionality.",
    icon: Sparkles,
    tags: ["Web Apps", "UI/UX", "Scalable"],
    gradient: "from-orange-400 to-purple-500",
    type: "DIGITAL",
    link: null,
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue Glow */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]"
        />

        {/* Purple Glow */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.08, 0.2, 0.08],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]"
        />

        {/* Center Glow */}

        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[170px]"
        />

        {/* Floating Particles */}

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
            x: [0, 20, 0],
            y: [0, -15, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[15%] top-[25%] h-1 w-1 rounded-full bg-purple-400"
        />

        <motion.span
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-[20%] left-[45%] h-1.5 w-1.5 rounded-full bg-blue-400"
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-xl"
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
              className="h-2 w-2 rounded-full bg-blue-400"
            />

            <span>Our Work</span>

            <Sparkles
              size={14}
              className="text-blue-400"
            />
          </motion.div>

          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ideas We Turned
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
              Into Reality
            </motion.span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A selection of digital experiences and solutions created with a
            focus on performance, usability and modern technology.
          </p>
        </motion.div>

        {/* =======================================================
            PROJECT GRID
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
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
                  className={`absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r ${project.gradient} opacity-0 blur-md transition-all duration-700 group-hover:opacity-40`}
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#080d20]/80 backdrop-blur-2xl transition-all duration-500 group-hover:border-white/[0.18] group-hover:bg-[#0a1026]/90">
                  {/* =================================================
                      PROJECT PREVIEW
                  ================================================= */}

                  <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#080d20]">
                    {/* Grid */}

                    <div
                      className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* Gradient Glow */}

                    <motion.div
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.12, 0.2, 0.12],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r ${project.gradient} blur-[70px]`}
                    />

                    {/* =================================================
                        BROWSER WINDOW
                    ================================================= */}

                    <motion.div
                      whileHover={{
                        scale: 1.045,
                        y: -4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      }}
                      className="absolute left-6 right-6 top-8 overflow-hidden rounded-xl border border-white/10 bg-[#0b1126]/95 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                    >
                      {/* Browser Header */}

                      <div className="relative flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                        <motion.span
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="h-2 w-2 rounded-full bg-white/20"
                        />

                        <motion.span
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.3,
                          }}
                          className="h-2 w-2 rounded-full bg-white/20"
                        />

                        <motion.span
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.6,
                          }}
                          className="h-2 w-2 rounded-full bg-white/20"
                        />

                        <div className="ml-3 h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="h-full w-1/3 bg-white/10"
                          />
                        </div>
                      </div>

                      {/* Browser Content */}

                      <div className="relative flex h-36 items-center justify-center overflow-hidden">
                        {/* Content Glow */}

                        <div
                          className={`absolute h-24 w-24 rounded-full bg-gradient-to-r ${project.gradient} opacity-20 blur-2xl`}
                        />

                        <div className="relative z-10 text-center">
                          {/* Project Icon */}

                          <motion.div
                            whileHover={{
                              scale: 1.15,
                              rotate: 5,
                            }}
                            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                          >
                            <Icon
                              size={27}
                              strokeWidth={1.8}
                              className="text-white"
                            />
                          </motion.div>

                          <p className="mt-3 text-sm font-semibold text-white">
                            {project.type}
                          </p>
                        </div>

                        {/* Moving Light */}

                        <motion.div
                          animate={{
                            x: ["-120%", "120%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-y-0 w-20 skew-x-[-20deg] bg-white/[0.04] blur-md"
                        />
                      </div>
                    </motion.div>

                    {/* Project Number */}

                    <motion.span
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="absolute right-5 top-5 z-20 text-xs font-bold tracking-[0.25em] text-white/30 transition-colors duration-300 group-hover:text-white/60"
                    >
                      {project.number}
                    </motion.span>

                    {/* Live Indicator */}

                    {project.link && (
                      <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-300 backdrop-blur-md">
                        <motion.span
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                        />

                        Live Website
                      </div>
                    )}
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="p-7">
                    {/* Category */}

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                      {project.category}
                    </p>

                    {/* Title */}

                    <h3 className="mt-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 text-sm leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {project.description}
                    </p>

                    {/* =================================================
                        TAGS
                    ================================================= */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
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
                            delay: index * 0.1 + tagIndex * 0.05,
                          }}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* =================================================
                        LINKS
                    ================================================= */}

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      {/* Live Website */}

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/live inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
                        >
                          <span>Visit Live Site</span>

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
                            <ExternalLink size={16} />
                          </motion.span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
                          <span>Project Preview</span>
                        </span>
                      )}

                      {/* Discuss */}

                      <Link
                        href="/contact"
                        className="group/contact inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-white"
                      >
                        Discuss Project

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/contact:-translate-y-1 group-hover/contact:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* =================================================
                      BOTTOM LINE
                  ================================================= */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileHover={{
                        width: "100%",
                      }}
                      className={`h-full bg-gradient-to-r ${project.gradient}`}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =======================================================
            BOTTOM CTA
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
          <p className="text-sm text-gray-500 sm:text-base">
            Have a project you want to bring to life?
          </p>

          <Link
            href="/get-started"
            className="group mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <span>Start Your Project</span>

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
              <ExternalLink size={16} />
            </motion.span>
          </Link>

          {/* Decorative Line */}

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