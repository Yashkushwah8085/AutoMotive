"use client";

import React from "react";
import {
  ChevronLeft,
  Phone,
  MessageSquare,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
          alt="Hero Car"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.7)_28%,rgba(0,0,0,0.4)_58%,rgba(0,0,0,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(245,158,11,0.1),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-[1440px] items-center px-4 sm:px-6 lg:px-12">
        <div className="max-w-[720px] pb-14 pt-6">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-primary sm:text-[13px]">
            PREMIUM AUTO PARTS
          </p>

          <h1 className="max-w-[560px] text-[34px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[60px]">
            Precision Parts.
            <br />
            Global <span className="text-primary">Reliability.</span>
          </h1>

          <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-white/80 sm:text-[16px]">
            High-quality auto parts for European vehicles.
            <br />
            Engineered for performance. Built to last.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button className="btn-primary py-4 px-8 rounded-xl shadow-lg">
              Request a Quote
              <ArrowRight size={16} />
            </button>

            <button className="btn-outline border-white/20 text-white hover:bg-white/10 py-4 px-8 rounded-xl backdrop-blur-md">
              Browse Products
            </button>
          </div>
        </div>

        {/* Floating Contact Cards */}
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
          {[
            { icon: Phone, label: "Call Us", val: "+49 211 1234567" },
            { icon: MessageSquare, label: "WhatsApp", val: "Chat with us" },
            { icon: Mail, label: "Email Us", val: "info@dusseldorfauto.de" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex w-[250px] items-center gap-4 rounded-[18px] border border-white/10 bg-white/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon size={20} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                  {item.label}
                </p>

                <p className="text-[13px] font-semibold text-white">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>

      {/* Left Arrow */}
      <button className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white/10">
        <ChevronLeft size={20} />
      </button>
    </section>
  );
}