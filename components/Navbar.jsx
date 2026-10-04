"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.nav
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
fixed
top-0
left-0
w-full
z-50
bg-[#050816]/60
backdrop-blur-xl
border-b
border-white/10
"
    >
      <div
        className="
max-w-7xl
mx-auto
flex
items-center
justify-between
px-5
sm:px-6
lg:px-8
py-4
"
      >
        {/* LOGO */}

        <Link href="/">
          <motion.h1
            whileHover={{
              scale: 1.08,
            }}
            className="
text-2xl
sm:text-3xl
font-bold
tracking-wider
cursor-pointer
text-transparent
bg-clip-text
bg-gradient-to-r
from-blue-400
via-cyan-300
to-purple-400
hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]
"
          >
            VAELTHOR
          </motion.h1>
        </Link>

        {/* Desktop Menu */}

        <div
          className="
hidden
lg:flex
items-center
gap-10
"
        >
          {menu.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              name={item.name}
            />
          ))}
        </div>

        {/* Desktop Button */}

        <div className="hidden lg:block">
          <Link href="/get-started">
            <motion.button
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
relative
px-8
py-3
rounded-full
font-semibold
text-white
bg-gradient-to-r
from-blue-500
via-cyan-400
to-purple-500
shadow-lg
shadow-blue-500/30
overflow-hidden
"
            >
              <span className="relative z-10">
                Get Started
              </span>

              <motion.div
                initial={{
                  x: "-100%",
                }}
                whileHover={{
                  x: "100%",
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
absolute
inset-0
bg-gradient-to-r
from-transparent
via-white/40
to-transparent
"
              />
            </motion.button>
          </Link>
        </div>

        {/* Hamburger */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
lg:hidden
relative
w-10
h-10
flex
items-center
justify-center
"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            className="
absolute
w-7
h-[2px]
bg-white
rounded-full
"
          />

          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            className="
absolute
w-7
h-[2px]
bg-white
rounded-full
"
          />

          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            className="
absolute
w-7
h-[2px]
bg-white
rounded-full
"
          />
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
lg:hidden
overflow-hidden
border-t
border-white/10
bg-[#050816]/95
backdrop-blur-xl
"
          >
            <div
              className="
flex
flex-col
items-center
gap-7
py-8
"
            >
              {menu.map((item) => (
                <MobileLink
                  key={item.name}
                  href={item.href}
                  name={item.name}
                  close={() => setIsOpen(false)}
                />
              ))}

              <Link
                href="/get-started"
                onClick={() => setIsOpen(false)}
              >
                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
px-8
py-3
rounded-full
text-white
font-semibold
bg-gradient-to-r
from-blue-500
via-cyan-400
to-purple-500
shadow-lg
shadow-blue-500/30
"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, name }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{
          y: -2,
          scale: 1.08,
        }}
        className="
group
relative
text-gray-300
cursor-pointer
"
      >
        <span
          className="
group-hover:text-transparent
group-hover:bg-clip-text
group-hover:bg-gradient-to-r
group-hover:from-blue-400
group-hover:via-cyan-300
group-hover:to-purple-400
transition-all
duration-300
"
        >
          {name}
        </span>

        <div
          className="
absolute
left-0
-bottom-2
h-[2px]
w-0
group-hover:w-full
transition-all
duration-300
bg-gradient-to-r
from-blue-400
via-cyan-300
to-purple-400
"
        />
      </motion.div>
    </Link>
  );
}

function MobileLink({
  href,
  name,
  close,
}) {
  return (
    <Link
      href={href}
      onClick={close}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
text-xl
font-medium
text-gray-300
hover:text-cyan-300
transition
"
      >
        {name}
      </motion.div>
    </Link>
  );
}