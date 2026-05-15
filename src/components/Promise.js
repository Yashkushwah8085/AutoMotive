"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Headset,
  PackageCheck,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function DarkCard({ title, text, image, badge }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative h-[265px] overflow-hidden border border-foreground/10 bg-card shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_42%,rgba(0,0,0,0.25)_100%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        <div>
          <h3 className="max-w-[280px] text-[17px] font-extrabold leading-tight text-white sm:text-[22px]">
            {title}
          </h3>

          <p className="mt-3 max-w-[250px] text-[11px] leading-5 text-white/80 sm:text-[13px]">
            {text}
          </p>
        </div>

        <Link
        href="/about" 
        className="inline-flex w-fit items-center gap-2 bg-primary px-4 py-2 text-[11px] font-medium text-white transition hover:bg-primary-hover">
          Read More
          <ChevronRight size={12} />
        </Link>
      </div>

      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
        {badge}
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, text, illustration, icon: Icon }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative h-[265px] overflow-hidden border border-foreground/10 bg-card shadow-lg"
    >
      <div className="flex h-full items-center justify-between gap-4 p-4 sm:p-5">
        <div className="max-w-[55%]">
          <h3 className="text-[17px] font-extrabold leading-tight text-foreground sm:text-[22px]">
            {title}
          </h3>

          <p className="mt-3 text-[11px] leading-5 text-muted sm:text-[13px]">
            {text}
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex w-fit items-center gap-2 bg-primary px-4 py-2 text-[11px] font-medium text-white transition hover:bg-primary-hover">
            Read More
            <ChevronRight size={12} />
          </Link>
        </div>

        <div className="relative flex h-full flex-1 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_60%)]" />

          {illustration ? (
            <img
              src={illustration}
              alt={title}
              className="relative z-10 h-full w-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <div className="rounded-full bg-primary/10 p-6 text-primary">
                <Icon size={72} strokeWidth={1.8} />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PromiseSection() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full bg-background py-10 sm:py-14 lg:py-16 transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-[28px] font-extrabold uppercase leading-tight tracking-[-0.02em] text-foreground sm:text-[36px]"
        >
          Our Promise
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2">
          <DarkCard
            badge="engineering"
            title="Quality You Can Depend On"
            text="Every part passes strict quality checks to match or exceed OEM standards — ensuring long-term performance and safety."
            image="https://dusseldorfauto.de/wp-content/uploads/2026/01/DDBD010.avif"
          />

          <FeatureCard
            title="Global Product Range"
            text="We supply components for leading European, American, Korean, and Japanese vehicles from standard to high-end models."
            icon={PackageCheck}
          />

          <DarkCard
            badge="delivery"
            title="Fast & Reliable Delivery"
            text="With a strong global supply network, we ensure timely delivery to customers worldwide."
            image="https://dusseldorfauto.de/wp-content/uploads/2013/01/dhiva-krishna-490776-unsplash-scaled.jpg"
          />

          <FeatureCard
            title="Expert Support"
            text="Our specialists assist you with product selection, fitment guidance, and technical queries."
            icon={Headset}
          />
        </div>
      </div>
    </motion.section>
  );
}