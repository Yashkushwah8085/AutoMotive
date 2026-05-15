"use client";

import React from "react";
import { ShieldCheck, Truck, Globe, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "OEM Quality",
    desc: "All parts meet or exceed OEM standards for maximum performance.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick and reliable shipping to keep your business moving.",
  },
  {
    icon: Globe,
    title: "Global Support",
    desc: "Serving customers across the world with dedicated support.",
  },
  {
    icon: BadgePercent,
    title: "Best Prices",
    desc: "Competitive pricing without compromising on quality.",
  },
];

export default function Features() {
  return (
    <section className="overflow-hidden bg-background py-20 text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          {/* Header */}
          <div className="max-w-md">
            <h2 className="mb-4 text-3xl font-black uppercase leading-tight text-foreground">
              Why Choose <br />
              <span className="text-primary">Düsseldorf Auto?</span>
            </h2>
            <p className="mb-8 text-sm text-muted">
              We deliver high-quality auto parts with unmatched service, trusted by professionals worldwide.
            </p>
            <button className="rounded-lg bg-primary px-6 py-3 text-xs font-bold text-white transition-all hover:bg-primary-hover">
              Learn More About Us →
            </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 flex-1 gap-x-12 gap-y-12 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col gap-4"
              >
                {/* Decorative line */}
                {i < 2 && (
                  <div className="absolute right-[-40px] top-1/2 hidden h-12 w-px -translate-y-1/2 bg-foreground/5 xl:block" />
                )}

                <div className="flex h-12 w-12 items-center justify-center text-primary">
                  <f.icon size={32} strokeWidth={1.5} />
                </div>

                <div>
                  <h4 className="mb-1 text-base font-bold text-foreground">
                    {f.title}
                  </h4>
                  <p className="max-w-[200px] text-[12px] leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}