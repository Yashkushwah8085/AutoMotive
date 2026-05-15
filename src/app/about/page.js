"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Shield, Target, Globe2, Zap } from "lucide-react";
import ValuesPage from "@/components/Values";
import Drive from "@/components/Drive";
import { useTheme } from "@/components/ThemeProvider";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const accordionItems = [
  {
    title: "OEM-Grade Engineering",
    content:
      "Designed to meet or exceed OEM specifications, delivering precise fitment and dependable performance.",
  },
  {
    title: "Global Compatibility",
    content:
      "We design solutions for European, Japanese, and American vehicle platforms.",
  },
  {
    title: "Precision Manufacturing",
    content:
      "Our production process focuses on accuracy, consistency, and durable output.",
  },
  {
    title: "Real-World Testing",
    content:
      "Every component is evaluated for daily use, reliability, and long-term performance.",
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 transition-colors duration-300">
      <section className="relative overflow-hidden bg-background pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_35%)]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-14 lg:flex-row"
          >
            <div className="flex-1">
              <motion.div
                variants={itemVariants}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary"
              >
                <Shield size={14} /> Our Heritage
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="mb-5 text-[40px] font-black uppercase leading-[0.95] tracking-tighter text-foreground sm:text-[54px] lg:text-[68px]"
              >
                Engineering <br />
                <span className="text-primary">Excellence</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mb-7 max-w-xl text-[13px] leading-6 text-muted sm:text-[14px]"
              >
                Düsseldorf Auto is not just a parts manufacturer. We are a
                legacy of precision engineering, built from decades of
                experience in the global automotive landscape.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 sm:gap-8"
              >
                <div>
                  <div className="mb-1 text-[26px] font-bold text-foreground sm:text-[30px]">
                    20+
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted">
                    Years Experience
                  </div>
                </div>

                <div>
                  <div className="mb-1 text-[26px] font-bold text-foreground sm:text-[30px]">
                    50+
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted">
                    Countries Served
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="flex-1">
              <div className="relative mx-auto aspect-square max-w-[420px] overflow-hidden rounded-[3rem] border border-foreground/10 bg-card p-2 shadow-xl backdrop-blur-md">
                <div className="absolute inset-0 -z-10 rounded-[3rem] bg-primary/5 blur-[100px]" />
                <img
                  src="https://dusseldorfauto.de/wp-content/uploads/2017/12/car-2176954_1920.jpg"
                  alt="Heritage"
                  className="h-full w-full rounded-[2.5rem] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`py-12 transition-colors duration-300 sm:py-14 lg:py-16 ${
          isDark ? "bg-[#020817] text-white" : "bg-white text-slate-900"
        }`}
      >
        <div className="mx-auto grid max-w-[1440px] items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-[520px_1fr] lg:px-8">
          <motion.div
            variants={itemVariants}
            className="flex h-full items-stretch justify-center lg:justify-start"
          >
            <div
              className={`h-full w-full overflow-hidden rounded-3xl shadow-2xl ${
                isDark ? "border border-white/10" : "border border-slate-200"
              }`}
            >
              <img
                src="https://dusseldorfauto.de/wp-content/uploads/2013/01/mattia-righetti-226968-unsplash-scaled.jpg"
                alt="Luxury Car"
                className="h-full min-h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-[680px] self-stretch">
            <h2
              className={`max-w-[520px] text-[28px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[36px] lg:text-[42px] ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Designed for Performance, Built for Longevity.
            </h2>

            <div className="mt-5 h-1 w-24 bg-[#f59e0b]" />

            <p
              className={`mt-5 text-[13px] leading-6 sm:text-[14px] ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              We specialize in manufacturing aftermarket automotive parts
              engineered for a wide range of European and Japanese cars,
              including components critical to vehicle safety, comfort, and
              performance.
            </p>

            <p
              className={`mt-6 text-[13px] leading-6 sm:text-[14px] ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              Every product undergoes:
            </p>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-[#f59e0b]" />
                <span
                  className={`text-[13px] sm:text-[14px] ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Rigorous material selection
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-[#f59e0b]" />
                <span
                  className={`text-[13px] sm:text-[14px] ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Precision machining and controlled manufacturing
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-[#f59e0b]" />
                <span
                  className={`text-[13px] sm:text-[14px] ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Multi-stage quality inspections
                </span>
              </li>
            </ul>

            <p
              className={`mt-6 text-[13px] leading-6 sm:text-[14px] ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              The result is a product range that delivers optimal fitment,
              durability, and real-world performance, even under demanding
              driving conditions.
            </p>

            <h2
              className={`mt-10 text-[28px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[36px] lg:text-[42px] ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Global Reach, Local Understanding
            </h2>

            <div className="mt-5 h-1 w-24 bg-[#f59e0b]" />

            <p
              className={`mt-5 text-[13px] leading-6 sm:text-[14px] ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              While our standards are global, our approach is customer-centric.
              Düsseldorf Auto understands the diverse operating conditions,
              regulatory requirements, and market expectations across regions.
            </p>

            <p
              className={`mt-5 text-[13px] leading-6 sm:text-[14px] ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              Our expanding global footprint reflects our ability to combine:
            </p>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-[#f59e0b]" />
                <span
                  className={`text-[13px] sm:text-[14px] ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Advanced manufacturing capabilities
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-[#f59e0b]" />
                <span
                  className={`text-[13px] sm:text-[14px] ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Scalable production
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-[#f59e0b]" />
                <span
                  className={`text-[13px] sm:text-[14px] ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Reliable supply chain management
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="bg-background py-14 transition-colors duration-300 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1440px] items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_430px] lg:px-8">
          <motion.div
            variants={itemVariants}
            className="max-w-[680px] text-foreground"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              Quality
            </div>

            <h2 className="text-[28px] font-extrabold leading-tight text-foreground sm:text-[34px]">
              Quality Without Compromise
            </h2>

            <p className="mt-4 text-[13px] leading-6 text-muted sm:text-[14px]">
              Quality is embedded into every stage of our process — from design
              and sourcing to production and packaging. Our manufacturing
              facilities operate under strict quality management systems,
              ensuring every Düsseldorf Auto component upholds the reputation
              of the vehicles it supports.
            </p>

            <p className="mt-4 text-[13px] leading-6 text-muted sm:text-[14px]">
              We don’t just manufacture parts — we safeguard performance,
              reliability, and trust.
            </p>

            <h3 className="mt-6 text-[22px] font-bold text-foreground sm:text-[24px]">
              Our Promise
            </h3>

            <p className="mt-3 text-[13px] leading-6 text-muted sm:text-[14px]">
              When you choose Düsseldorf Auto, you choose:
            </p>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-primary" />
                <span className="text-[13px] text-muted sm:text-[14px]">
                  A brand backed by years of automotive expertise
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-primary" />
                <span className="text-[13px] text-muted sm:text-[14px]">
                  Products engineered for precision and endurance
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] rounded-full bg-primary" />
                <span className="text-[13px] text-muted sm:text-[14px]">
                  A partner committed to long-term value, not short-term gains
                </span>
              </li>
            </ul>

            <p className="mt-4 text-[13px] leading-6 text-muted sm:text-[14px]">
              As vehicles evolve, so do we — continually investing in
              technology, innovation, and people to remain at the forefront of
              the aftermarket automotive industry. Düsseldorf Auto —
              Precision in Motion. Confidence in Every Part.
            </p>

            <h3 className="mt-8 text-[22px] font-bold text-foreground sm:text-[24px]">
              Our Mission
            </h3>

            <div className="mt-3 flex items-start gap-3">
              <Target className="mt-1 text-primary" size={18} />
              <p className="text-[13px] leading-6 text-muted sm:text-[14px]">
                Deliver OEM-Grade Aftermarket Excellence
                <br />
                To manufacture high-quality automotive components that match
                OEM standards, ensuring reliable performance, precise fitment,
                and long-term value.
              </p>
            </div>

            <h3 className="mt-8 text-[22px] font-bold text-foreground sm:text-[24px]">
              Our Vision
            </h3>

            <div className="mt-3 flex items-start gap-3">
              <Globe2 className="mt-1 text-sky-500" size={18} />
              <p className="text-[13px] leading-6 text-muted sm:text-[14px]">
                Become a Globally Trusted Automotive Brand
                <br />
                To be recognized worldwide for engineering excellence,
                consistent quality, and dependable aftermarket solutions for
                modern vehicles.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="h-full self-stretch">
            <div className="h-full overflow-hidden rounded-3xl border border-foreground/10 bg-card shadow-2xl">
              <img
                src="https://dusseldorfauto.de/wp-content/uploads/2013/01/dhiva-krishna-490776-unsplash-scaled.jpg"
                alt="Quality car"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="bg-background py-20 transition-colors duration-300 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="space-y-4">
                {accordionItems.map((item, idx) => {
                  const isOpen = activeIndex === idx;

                  return (
                    <div
                      key={idx}
                      className={`overflow-hidden rounded-2xl border bg-card shadow-lg backdrop-blur-md transition-all duration-300 ${
                        isOpen ? "border-primary/50" : "border-foreground/10"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((prev) => (prev === idx ? null : idx))
                        }
                        className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                              isOpen
                                ? "bg-primary text-white"
                                : "bg-foreground/5 text-foreground/40"
                            }`}
                          >
                            <Zap size={18} />
                          </div>
                          <span className="text-[14px] font-bold text-foreground sm:text-[16px]">
                            {item.title}
                          </span>
                        </div>
                        {isOpen ? (
                          <Minus size={18} className="text-foreground" />
                        ) : (
                          <Plus size={18} className="text-foreground" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                              <p className="pl-14 text-[13px] leading-6 text-muted sm:text-[14px]">
                                {item.content}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center lg:w-1/2">
              <div className="relative aspect-square w-full max-w-[520px]">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-[120px]" />
                <img
                  src="https://dusseldorfauto.de/wp-content/uploads/2026/01/unnamed-4.png"
                  alt="Engine"
                  className="relative z-10 h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesPage />
      <Drive />
    </main>
  );
}