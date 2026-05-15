"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Search", href: "/search" },
  { label: "Products", href: "/product" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-2 py-2 sm:px-4 sm:py-3">
      <div
        className={`mx-auto max-w-[1440px] rounded-2xl border border-foreground/10 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "bg-navbar shadow-lg" : "bg-navbar/80"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="https://dusseldorfauto.de/wp-content/uploads/2025/12/Backup_of_Dusseldorf-logo-tm09.png"
              alt="Düsseldorf Auto Parts"
              className={`h-12 w-auto object-contain sm:h-14 ${theme === 'dark' ? '' : 'invert'}`}
            />

            <div className="hidden flex-col leading-none sm:flex">
              <span className="text-[18px] font-black tracking-tighter text-foreground lg:text-[20px]">
                DÜSSELDORF
              </span>

              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Auto Parts
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative pb-1 text-[14px] font-medium transition-colors ${
                    active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Search + CTA + Theme Toggle */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Search parts..."
                className="h-11 w-48 rounded-full border border-foreground/10 bg-foreground/5 px-4 pr-10 text-[13px] text-foreground outline-none transition-all placeholder:text-foreground/40 focus:w-60 focus:border-primary/50"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
            </div>

            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-[13px] font-bold text-white transition-all hover:bg-primary-hover hover:shadow-[0_0_18px_rgba(245,158,11,0.35)] active:scale-95"
            >
              <Phone size={14} />
              Get Support
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-[500px] pt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 border-t border-foreground/10 pt-4">
            <nav className="grid gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                      active
                        ? "bg-foreground/10 text-primary"
                        : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Search parts..."
                className="h-11 w-full rounded-full border border-foreground/10 bg-foreground/5 px-4 pr-10 text-[13px] text-foreground outline-none placeholder:text-foreground/40"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
            </div>

            <Link
              href="/contact"
              className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-[13px] font-bold text-white transition-all hover:bg-primary-hover"
            >
              <Phone size={14} />
              Get Support
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}