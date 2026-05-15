"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Drive() {
  return (
    <section className="relative h-[380px] overflow-hidden bg-background text-foreground sm:h-[430px] transition-colors duration-300">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://dusseldorfauto.de/wp-content/uploads/2013/01/dhiva-krishna-490776-unsplash-scaled.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-[7px] font-bold uppercase tracking-[0.22em] text-white/70 sm:text-[8px]">
              Join the Revolution
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-[18px] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[28px] md:text-[36px] lg:text-[44px]">
            Drive With <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
            >
              Confidence
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mx-auto mt-3 max-w-lg text-[9px] leading-4 text-white/70 sm:text-[10px] lg:text-[11px]">
            Experience the pinnacle of automotive engineering.
            <br />
            Your journey to peak performance starts here.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-10 items-center gap-2 bg-primary px-6 text-[10px] font-bold text-white transition hover:scale-105 hover:bg-primary-hover rounded-lg"
            >
              GET STARTED NOW
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/product"
              className="inline-flex h-10 items-center gap-2 border border-white/20 bg-white/5 px-6 text-[10px] font-bold text-white backdrop-blur-md transition hover:bg-white/10 rounded-lg"
            >
              VIEW CATALOG
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}