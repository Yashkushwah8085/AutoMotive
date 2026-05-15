"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cog,
  CheckCircle2,
  Handshake,
  UserRound,
  RotateCcw,
  ShieldCheck,
  Car,
  Globe2,
  Languages,
  Coffee,
} from "lucide-react";

const values = [
  {
    icon: Cog,
    title: "Engineering Excellence",
    text: "Every product is designed with precision engineering to deliver performance and durability.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Without Compromise",
    text: "We follow strict quality controls at every stage for consistency and reliability.",
  },
  {
    icon: Handshake,
    title: "Trust & Reliability",
    text: "Our products are trusted by workshops and distributors for dependable performance.",
  },
  {
    icon: UserRound,
    title: "Customer-Centric Approach",
    text: "We develop solutions based on real-world driving conditions and customer needs.",
  },
  {
    icon: RotateCcw,
    title: "Continuous Improvement",
    text: "We constantly refine our designs, materials, and processes to stay ahead.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Accountability",
    text: "We operate with transparency, responsibility, and respect for customers.",
  },
];

const numbers = [
  {
    icon: Car,
    value: "14000+",
    label: "HAPPY CLIENTS",
  },
  {
    icon: Globe2,
    value: "10+",
    label: "YEARS OF WORK",
  },
  {
    icon: Languages,
    value: "50",
    label: "LANGUAGES",
  },
  {
    icon: Coffee,
    value: "2000+",
    label: "CUPS OF COFFEE",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Values() {
  return (
    <section className="bg-background px-4 pt-12 pb-12 text-foreground sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-[22px] font-black uppercase leading-tight tracking-tighter sm:text-[28px] lg:text-[34px] text-foreground"
        >
          OUR <span className="text-primary">VALUES</span>
        </motion.h2>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className="min-h-[145px] border border-foreground/10 bg-card p-4 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-primary">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-[14px] font-bold text-foreground sm:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[260px] text-[11px] leading-5 text-muted sm:text-[12px]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 mb-10 text-[22px] font-black uppercase leading-tight tracking-tighter sm:text-[28px] lg:text-[34px] text-foreground"
        >
          SOME <span className="text-primary">NUMBERS</span>
        </motion.h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {numbers.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className="relative min-h-[118px] overflow-hidden rounded-2xl border border-foreground/10 bg-card px-4 py-4 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                  <div className="h-20 w-20 rounded-full border-2 border-foreground/10" />
                </div>

                <div className="absolute right-3 top-2 text-primary">
                  <Icon size={20} strokeWidth={2.3} />
                </div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <div className="text-[24px] font-black leading-none text-primary sm:text-[28px]">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[9px] font-semibold tracking-[0.18em] text-muted sm:text-[10px]">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}