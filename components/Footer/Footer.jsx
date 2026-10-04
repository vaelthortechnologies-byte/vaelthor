"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "ERP & Business Solutions",
  "UI/UX Design",
  "Digital Marketing",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030611] text-white">

      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="pointer-events-none absolute left-[-10%] top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-purple-500/[0.05] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-block text-2xl font-extrabold tracking-wider sm:text-3xl"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VAELTHOR
                </span>
              </motion.div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Building modern digital experiences, powerful applications and
              technology solutions designed to help businesses grow.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">

              <SocialLink
                href="#"
                icon={<FaInstagram size={17} />}
                label="Instagram"
              />

              <SocialLink
                href="#"
                icon={<FaLinkedinIn size={17} />}
                label="LinkedIn"
              />

              <SocialLink
                href="#"
                icon={<FaFacebookF size={16} />}
                label="Facebook"
              />

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-500 transition hover:text-cyan-300"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>

            <div className="mt-6 space-y-3">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-sm text-gray-500 transition hover:text-gray-300"
                >
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <a
                href="mailto:vaelthortechnologies@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Mail size={16} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-gray-400 transition group-hover:text-cyan-300">
                    vaelthortechnologies@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+91"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Phone size={16} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-gray-400 transition group-hover:text-cyan-300">
                    Contact us
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <MapPin size={16} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    India
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* CTA Strip */}
        <div className="border-y border-white/[0.07] py-8">

          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="text-lg font-semibold text-white">
                Ready to build something great?
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Let&apos;s discuss your next digital project.
              </p>
            </div>

            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10"
              >
                Start Project
                <ArrowUpRight size={16} />
              </motion.button>
            </Link>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-7 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Vaelthor Technologies. All rights
            reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="/privacy"
              className="transition hover:text-gray-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-gray-400"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
    >
      {icon}
    </a>
  );
}   