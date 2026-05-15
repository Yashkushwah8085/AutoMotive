"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t py-20 transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-[#07111f] text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Socials */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-8 flex items-center gap-3">
              <div className="flex flex-col">
                <span
                  className={`text-xl font-black leading-none tracking-tighter ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  DÜSSELDORF
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
                  Auto Parts
                </span>
              </div>
            </Link>

            <p
              className={`mb-8 max-w-sm text-sm leading-relaxed ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              Your trusted partner for premium auto parts. Quality you can
              trust, service you can rely on.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                      isDark
                        ? "border-white/10 bg-white/5 text-white/70 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b] hover:text-black"
                        : "border-slate-200 bg-white text-slate-600 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b] hover:text-black"
                    }`}
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links 1: Quick Links */}
          <div>
            <h4
              className={`mb-8 text-sm font-bold uppercase tracking-widest ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className={`text-sm transition-colors ${
                        isDark
                          ? "text-white/55 hover:text-[#f59e0b]"
                          : "text-slate-600 hover:text-[#f59e0b]"
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links 2: Categories */}
          <div>
            <h4
              className={`mb-8 text-sm font-bold uppercase tracking-widest ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Categories
            </h4>
            <ul className="space-y-4">
              {[
                "Brake System",
                "Suspension",
                "Engine Parts",
                "Cooling System",
                "Electronics",
                "Body & Exterior",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className={`text-sm transition-colors ${
                      isDark
                        ? "text-white/55 hover:text-[#f59e0b]"
                        : "text-slate-600 hover:text-[#f59e0b]"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 3: Contact Us */}
          <div>
            <h4
              className={`mb-8 text-sm font-bold uppercase tracking-widest ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Contact Us
            </h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#f59e0b]"
                />
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Düsseldorf, Germany
                  <br />
                  Königsallee 123, 40212
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={18} className="shrink-0 text-[#f59e0b]" />
                <p
                  className={`text-sm ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  +49 211 1234567
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={18} className="shrink-0 text-[#f59e0b]" />
                <p
                  className={`text-sm ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  info@dusseldorfauto.de
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Clock size={18} className="shrink-0 text-[#f59e0b]" />
                <p
                  className={`text-sm ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className={`border-t pt-8 text-center text-[11px] font-bold uppercase tracking-widest ${
            isDark
              ? "border-white/10 text-white/45"
              : "border-slate-200 text-slate-500"
          }`}
        >
          © 2025 Düsseldorf Auto Parts. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}