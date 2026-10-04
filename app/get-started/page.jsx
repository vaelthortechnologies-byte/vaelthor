"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe2,
  Smartphone,
  Code2,
  Building2,
  Palette,
  Megaphone,
  Send,
  Sparkles,
  Mail,
  Phone,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const services = [
  {
    title: "Web Development",
    icon: Globe2,
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
  },
  {
    title: "Custom Software",
    icon: Code2,
  },
  {
    title: "ERP & Business Solutions",
    icon: Building2,
  },
  {
    title: "UI/UX Design",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
  },
];

const budgets = [
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not Sure Yet",
];

export default function GetStartedPage() {
  const [selectedService, setSelectedService] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) return;

    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    if (!budget) {
      alert("Please select your estimated budget.");
      return;
    }

    const formData = new FormData(event.currentTarget);

    const enquiry = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: selectedService,
      budget: budget,
      message: formData.get("message"),
    };

    try {
      setSubmitting(true);

      const { error } = await supabase
        .from("project_enquiries")
        .insert([enquiry]);

      if (error) {
        console.error("Supabase enquiry error:", error);

        alert(
          error.message ||
            "Something went wrong while submitting your enquiry."
        );

        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Unexpected enquiry error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleNewRequest() {
    setSubmitted(false);
    setSelectedService("");
    setBudget("");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="px-6 pb-16 pt-36 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              Start Your Project
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                meaningful together.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Tell us about your idea, business, or digital challenge. Our
              team will understand your requirements and help you plan the
              right solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="h-fit lg:sticky lg:top-28"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Why Start With Us
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                From idea to execution.
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                Whether you need a website, application, business software, or
                a complete digital strategy, we can help turn your requirement
                into a practical digital solution.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand your requirements",
                  "Suggest the right technology",
                  "Plan the project scope",
                  "Build and refine the solution",
                  "Launch and support your product",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                      <Check size={14} />
                    </div>

                    {item}
                  </div>
                ))}
              </div>

              {/* CONTACT BOX */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-sm text-white/40">
                  Prefer to talk directly?
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Mail size={17} className="text-cyan-300" />
                    <span>Contact us through email</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Phone size={17} className="text-cyan-300" />
                    <span>Discuss your project with our team</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                >
                  Visit Contact Page
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300"
                >
                  <Check size={36} />
                </motion.div>

                <h2 className="mt-7 text-3xl font-bold">
                  Request received.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/50">
                  Thank you for sharing your project details. Your enquiry has
                  been successfully submitted to our team.
                </p>

                <button
                  type="button"
                  onClick={handleNewRequest}
                  className="mt-8 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Project Details
                  </p>

                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Tell us what you&apos;re building.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    The more details you provide, the better we can understand
                    your project.
                  </p>
                </div>

                {/* NAME + COMPANY */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.03]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Company / Business
                    </label>

                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.03]"
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.03]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.03]"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div className="mt-7">
                  <label className="mb-3 block text-sm font-medium text-white/70">
                    What do you need?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      const active = selectedService === service.title;

                      return (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => setSelectedService(service.title)}
                          className={`flex items-center gap-3 rounded-xl border p-4 text-left text-sm transition ${
                            active
                              ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                              : "border-white/10 bg-black/10 text-white/60 hover:border-white/20 hover:bg-white/[0.03]"
                          }`}
                        >
                          <Icon
                            size={18}
                            className={
                              active ? "text-cyan-300" : "text-white/40"
                            }
                          />

                          {service.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* BUDGET */}
                <div className="mt-7">
                  <label className="mb-3 block text-sm font-medium text-white/70">
                    Estimated Budget
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {budgets.map((item) => {
                      const active = budget === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setBudget(item)}
                          className={`rounded-xl border px-4 py-3.5 text-left text-sm transition ${
                            active
                              ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                              : "border-white/10 bg-black/10 text-white/60 hover:border-white/20 hover:bg-white/[0.03]"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-7">
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Tell us about your project
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your idea, requirements, timeline, features, or anything else we should know..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.03]"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-black shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Project Request
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-white/30">
                  By submitting this form, you&apos;re sharing your project
                  requirements with our team.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}