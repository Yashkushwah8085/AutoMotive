"use client";

import React from "react";
import {
  Phone,
  Mail,
  Clock3,
  LifeBuoy,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Drive from "@/components/Drive";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      {/* Contact Hero */}
    <section className="relative flex h-[420px] items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
      alt="Contact Background"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/75" />

  {/* Orange Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_45%)]" />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12">
    <div className="max-w-3xl mt-6 text-left">
      
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        Get In Touch
      </p>

      <h1 className="text-3xl font-black uppercase leading-none tracking-[-0.04em] text-white">
        Contact Us
      </h1>

      <div className="mt-5 h-1 w-24 bg-primary" />

      <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[17px]">
        Need help finding the right auto parts for your vehicle? 
        Our expert support team is here to assist you with product 
        inquiries, fitment guidance, bulk orders, and technical support.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="bg-primary px-7 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-primary-hover">
          Contact Support
        </button>

        <button className="border border-white/15 bg-white/5 px-7 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-white/10">
          Request Quote
        </button>
      </div>

    </div>
  </div>
</section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Info */}
            <div className="border border-foreground/10 bg-card p-8 shadow-xl">
              <h2 className="mb-6 text-[34px] font-black leading-tight text-foreground">
                Get in touch
              </h2>

              <p className="max-w-[420px] text-[15px] leading-8 text-muted">
                The Alumalite Big Step Side Bars install in minutes, providing
                great looks, convenience and safety for your vehicle.
              </p>

              <div className="mt-12">
                <h3 className="max-w-[420px] text-[20px] font-black leading-[1.2] text-foreground">
                  DÜSSELDORF , 78 Vijay Nagar,Indore
                </h3>
              </div>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <Phone size={24} strokeWidth={2.2} />
                  </div>
                  <p className="text-[16px] text-muted">+27 34 66 2455-198</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <Phone size={24} strokeWidth={2.2} />
                  </div>
                  <p className="text-[16px] text-muted">+27 34 66 2455-198</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <Clock3 size={24} strokeWidth={2.2} />
                  </div>
                  <p className="text-[16px] text-muted">
                    Monday – Saturaday 9:00 to 8:00
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <LifeBuoy size={24} strokeWidth={2.2} />
                  </div>
                  <p className="text-[16px] text-muted">
                    DÜSSELDORF@chromium.com
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <Mail size={24} strokeWidth={2.2} />
                  </div>
                  <p className="text-[16px] text-muted">
                    DÜSSELDORF@chromium.com
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                {[
                  FaFacebookF,
                  FaTwitter,
                  FaGooglePlusG,
                  FaYoutube,
                  FaPinterestP,
                ].map((Icon, index) => (
                  <button
                    key={index}
                    className="flex h-12 w-12 items-center justify-center bg-foreground/5 text-foreground transition hover:bg-primary hover:text-white"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[2rem] border border-foreground/10 bg-card p-10 shadow-xl">
              <form className="grid gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-4 text-foreground outline-none placeholder:text-muted focus:border-primary"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-4 text-foreground outline-none placeholder:text-muted focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-4 text-foreground outline-none placeholder:text-muted focus:border-primary"
                />

                <textarea
                  placeholder="Your Message"
                  className="min-h-[150px] w-full rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-4 text-foreground outline-none placeholder:text-muted focus:border-primary"
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary-hover"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Drive />
    </main>
  );
}