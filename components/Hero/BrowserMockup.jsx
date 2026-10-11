"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  BarChart3,
  Users,
  TrendingUp,
  Code2,
} from "lucide-react";

export default function BrowserMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
      className="
        relative
        isolate
        w-full
        max-w-[280px]
        sm:max-w-[380px]
        md:max-w-[450px]
        lg:max-w-[560px]
        xl:max-w-[580px]
        mx-auto
      "
    >
      {/* Soft Glow - reduced blur for mobile performance */}
      <div
        aria-hidden="true"
        className="
          absolute
          -inset-2
          sm:-inset-4
          rounded-[28px]
          bg-cyan-500/10
          blur-xl
          sm:blur-2xl
          -z-10
          pointer-events-none
        "
      />

      {/* Browser Window */}
      <div
        className="
          relative
          rounded-2xl
          sm:rounded-[30px]
          border
          border-white/10
          bg-[#0B1220]
          overflow-hidden
          shadow-[0_16px_45px_rgba(0,255,255,0.09)]
          [backface-visibility:hidden]
          [transform:translateZ(0)]
        "
      >
        {/* Top Bar */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-2
            px-3
            sm:px-6
            py-3
            sm:py-4
            border-b
            border-white/10
            bg-white/[0.02]
          "
        >
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
          </div>

          <div
            className="
              flex
              min-w-0
              max-w-[205px]
              sm:max-w-none
              items-center
              gap-1.5
              sm:gap-2
              px-2
              sm:px-4
              py-1.5
              sm:py-2
              rounded-full
              border
              border-white/5
              bg-white/[0.04]
              text-gray-300
              text-[9px]
              sm:text-sm
            "
          >
            <Globe
              size={13}
              className="shrink-0 text-cyan-400"
            />
            <span className="truncate">
              www.vaelthortechnology.com
            </span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-3 sm:p-6 space-y-4 sm:space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Dashboard
              </p>

              <h2 className="text-white text-lg sm:text-2xl font-bold">
                Analytics
              </h2>
            </div>

            <div
              className="
                p-2
                sm:p-3
                rounded-xl
                border
                border-cyan-400/10
                bg-cyan-500/10
              "
            >
              <BarChart3 className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <Card
              icon={<Users size={18} />}
              title="Clients"
              value="10+"
            />

            <Card
              icon={<TrendingUp size={18} />}
              title="Growth"
              value="+100%"
            />

            <Card
              icon={<Code2 size={18} />}
              title="Projects"
              value="10+"
            />

            <Card
              icon={<Globe size={18} />}
              title="Websites"
              value="10+"
            />
          </div>

          {/* Analytics Chart - static bars prevent repeated animation */}
          <div
            className="
              h-32
              sm:h-40
              md:h-48
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-cyan-500/[0.07]
              to-purple-500/[0.07]
              p-3
              sm:p-5
              overflow-hidden
            "
          >
            <div className="flex items-end h-full gap-2 sm:gap-3">
              {[35, 60, 45, 80, 70, 95, 75].map((height, index) => (
                <div
                  key={index}
                  className="
                    flex-1
                    min-w-0
                    rounded-t-md
                    sm:rounded-t-lg
                    bg-gradient-to-t
                    from-cyan-500
                    to-purple-500
                    opacity-90
                  "
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Card({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.18 }}
      className="
        min-w-0
        rounded-xl
        sm:rounded-2xl
        bg-white/[0.04]
        border
        border-white/10
        p-3
        sm:p-4
        transition-colors
        duration-200
        hover:border-cyan-400/20
      "
    >
      <div className="text-cyan-400 mb-2 sm:mb-3">
        {icon}
      </div>

      <p className="text-gray-400 text-xs sm:text-sm">
        {title}
      </p>

      <h3 className="text-white text-lg sm:text-2xl font-bold mt-1">
        {value}
      </h3>
    </motion.div>
  );
}
