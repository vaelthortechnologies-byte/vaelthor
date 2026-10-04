"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BarChart3,
  Users,
  TrendingUp,
  Code2,
} from "lucide-react";

export default function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotate: 6 }}
     animate={{
  opacity: 1,
  x: 0,
  rotate: 0,
  y: [0, -6, 0],
}}
      transition={{
        duration: 0.8,
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
     className="
relative
w-full
max-w-[280px]
sm:max-w-[380px]
md:max-w-[450px]
lg:max-w-[560px]
xl:max-w-[580px]
mx-auto
"
    >
      {/* Glow */}
     <div className="absolute -inset-3 sm:-inset-5 lg:-inset-8 bg-cyan-500/20 blur-[50px] lg:blur-[70px] rounded-full -z-10" />

      {/* Browser */}
      <div
        className="
          relative
          rounded-2xl
          sm:rounded-[30px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          overflow-hidden
          shadow-[0_20px_80px_rgba(0,255,255,0.15)]
        "
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-white/10">

          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              px-2
              sm:px-4
              py-1.5
              sm:py-2
              rounded-full
              bg-white/5
              text-gray-300
              text-[10px]
              sm:text-sm
            "
          >
            <Globe size={14} />
            <span className="truncate">www.vaelthor.com</span>
          </div>

        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">

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

            <div className="p-2 sm:p-3 rounded-xl bg-cyan-500/10">
              <BarChart3 className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
            </div>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            <Card
              icon={<Users size={18} />}
              title="Clients"
              value="120+"
            />

            <Card
              icon={<TrendingUp size={18} />}
              title="Growth"
              value="+245%"
            />

            <Card
              icon={<Code2 size={18} />}
              title="Projects"
              value="80+"
            />

            <Card
              icon={<Globe size={18} />}
              title="Websites"
              value="50+"
            />

          </div>

          {/* Chart */}
          <div
            className="
              h-32
              sm:h-40
              md:h-48
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-cyan-500/10
              to-purple-500/10
              p-4
              sm:p-5
            "
          >
            <div className="flex items-end h-full gap-2 sm:gap-3">

              {[35, 60, 45, 80, 70, 95, 75].map((h, i) => (

                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                  }}
                  className="
                    flex-1
                    rounded-full
                    bg-gradient-to-t
                    from-cyan-500
                    to-purple-500
                  "
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
      whileHover={{ scale: 1.05 }}
      className="
        rounded-xl
        sm:rounded-2xl
        bg-white/5
        border
        border-white/10
        p-3
        sm:p-4
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