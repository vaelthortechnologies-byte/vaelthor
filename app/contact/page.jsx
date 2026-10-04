"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  User,
  CalendarDays,
  Globe2,
  ArrowRight,
  Code2,
  Smartphone,
  Megaphone,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const companyInfo = [
    {
      icon: User,
      title: "Founder & Owner",
      value: "Salman Ansari",
      sub: "Founder of Vaelthor Technologies",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 70559 02068",
      sub: "Let's discuss your next project",
      href: "tel:+917055902068",
    },
    {
      icon: CalendarDays,
      title: "Established",
      value: "15 February 2026",
      sub: "Building digital solutions for modern businesses",
    },
    {
      icon: Globe2,
      title: "Our Expertise",
      value: "Web • Apps • Marketing",
      sub: "Complete digital solutions under one roof",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />

      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px]" />

        <div className="absolute top-[30%] right-[-200px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px]" />

        <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px]" />
      </div>

      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              text-cyan-400
              text-sm
              uppercase
              tracking-[4px]
              mb-7
            "
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Contact Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            Let's Build Something
            <span
              className="
                block
                mt-2
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-blue-400
                via-cyan-300
                to-purple-400
              "
            >
              Futuristic Together.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
              mt-7
              text-gray-400
              text-lg
              md:text-xl
              max-w-3xl
              mx-auto
              leading-8
            "
          >
            Have an idea, business, or project in mind? Connect with
            Vaelthor Technologies and turn your vision into a powerful
            digital experience.
          </motion.p>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="relative px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                    group
                    relative
                    h-full
                    p-7
                    rounded-3xl
                    bg-white/[0.04]
                    border
                    border-white/10
                    backdrop-blur-xl
                    hover:border-cyan-400/30
                    transition-colors
                    duration-500
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-500/10
                      via-transparent
                      to-purple-500/10
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-cyan-400/10
                        border
                        border-cyan-400/20
                        flex
                        items-center
                        justify-center
                        mb-6
                      "
                    >
                      <Icon
                        size={26}
                        className="text-cyan-400"
                      />
                    </div>

                    <p className="text-gray-500 text-sm mb-2">
                      {item.title}
                    </p>

                    <h3 className="text-lg font-semibold text-white">
                      {item.value}
                    </h3>

                    <p className="text-gray-500 text-sm mt-3 leading-6">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              );

              if (item.href) {
                return (
                  <a href={item.href} key={index}>
                    {content}
                  </a>
                );
              }

              return <div key={index}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="relative px-6 pb-32">
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-[0.85fr_1.15fr]
            gap-10
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              rounded-[32px]
              border
              border-white/10
              bg-gradient-to-br
              from-blue-500/10
              via-white/[0.03]
              to-purple-500/10
              p-8
              md:p-10
              overflow-hidden
            "
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
                Vaelthor Technologies
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
                Your Idea.
                <br />
                Our Technology.
                <br />
                <span className="text-gray-500">
                  One Powerful Result.
                </span>
              </h2>

              <p className="text-gray-400 mt-7 leading-8">
                We work with businesses, startups, institutions and
                entrepreneurs to create modern digital solutions designed
                for growth.
              </p>

              {/* SERVICES */}
              <div className="mt-10 space-y-4">
                <ServiceItem
                  icon={Code2}
                  title="Web Development"
                  text="Fast, modern and scalable websites."
                />

                <ServiceItem
                  icon={Smartphone}
                  title="App Development"
                  text="Powerful mobile applications for your business."
                />

                <ServiceItem
                  icon={Megaphone}
                  title="Digital Marketing"
                  text="Grow your reach, leads and online presence."
                />
              </div>

              {/* DIRECT CALL */}
              <div
                className="
                  mt-10
                  pt-8
                  border-t
                  border-white/10
                "
              >
                <p className="text-gray-500 text-sm">
                  Prefer to talk directly?
                </p>

                <a
                  href="tel:+917055902068"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    mt-4
                    text-xl
                    font-semibold
                    text-white
                    hover:text-cyan-400
                    transition
                  "
                >
                  <Phone size={21} />
                  +91 70559 02068
                </a>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              md:p-10
            "
          >
            <div className="mb-9">
              <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
                Start A Project
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Tell us about your idea.
              </h2>

              <p className="text-gray-400 mt-4">
                Fill out the form and we'll connect with you to discuss
                your requirements.
              </p>
            </div>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Your Name"
                  placeholder="Enter your name"
                />

                <InputField
                  label="Phone Number"
                  placeholder="+91 XXXXX XXXXX"
                  type="tel"
                />
              </div>

              <InputField
                label="Email Address"
                placeholder="you@example.com"
                type="email"
              />

              <div>
                <label className="block text-sm text-gray-300 mb-3">
                  I'm interested in
                </label>

                <select
                  className="
                    w-full
                    bg-[#080c1c]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-gray-300
                    outline-none
                    focus:border-cyan-400/60
                    transition
                  "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-3">
                  Project Details
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="
                    w-full
                    resize-none
                    bg-white/[0.03]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-cyan-400/60
                    focus:bg-cyan-400/[0.02]
                    transition
                  "
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-400
                  to-purple-500
                  text-white
                  font-semibold
                  text-lg
                  shadow-lg
                  shadow-cyan-500/10
                "
              >
                Send Message

                <Send
                  size={19}
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </motion.button>

              <p className="text-center text-xs text-gray-600">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            max-w-7xl
            mx-auto
            relative
            overflow-hidden
            rounded-[35px]
            border
            border-cyan-400/20
            bg-gradient-to-r
            from-blue-500/10
            via-cyan-500/10
            to-purple-500/10
            px-8
            py-14
            md:px-14
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[4px]">
              Ready To Start?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Let's turn your idea into reality.
            </h2>
          </div>

          <a
            href="tel:+917055902068"
            className="
              group
              shrink-0
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-white
              text-[#050816]
              font-bold
              hover:scale-105
              transition
              duration-300
            "
          >
            Let's Talk

            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </a>
        </motion.div>
      </section>
    </main>
  );
}


/* INPUT COMPONENT */

function InputField({
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="block text-sm text-gray-300 mb-3">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          bg-white/[0.03]
          border
          border-white/10
          rounded-xl
          px-5
          py-4
          text-white
          placeholder:text-gray-600
          outline-none
          focus:border-cyan-400/60
          focus:bg-cyan-400/[0.02]
          transition
        "
      />
    </div>
  );
}


/* SERVICE ITEM */

function ServiceItem({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div
      className="
        flex
        gap-4
        p-4
        rounded-2xl
        hover:bg-white/[0.04]
        transition
      "
    >
      <div
        className="
          shrink-0
          w-11
          h-11
          rounded-xl
          bg-cyan-400/10
          flex
          items-center
          justify-center
        "
      >
        <Icon
          size={21}
          className="text-cyan-400"
        />
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {text}
        </p>
      </div>
    </div>
  );
}