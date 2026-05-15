"use client";

import React, { useState } from "react";
import { Search, Phone, ChevronUp } from "lucide-react";
import Drive from "@/components/Drive";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Body & Exterior");
  const [brand, setBrand] = useState("Toyota");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ query, category, brand });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBXNIe1cGPIfZ0l78Y_7KNfXAsrU3BhtP9w&s')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* Top small bar */}
      <div className="absolute left-0 top-0 z-20 h-2 w-full bg-secondary">
        <div className="absolute right-0 top-0 h-2 w-36 bg-primary" />
      </div>

      {/* Search bar */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-28 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="grid gap-3 rounded-2xl border border-foreground/10 bg-card/80 p-4 shadow-2xl backdrop-blur-xl md:grid-cols-[1.2fr_1fr_1fr_0.9fr]"
        >
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search DD / OE / HENGST Number"
              className="h-11 w-full rounded-xl border border-foreground/10 bg-foreground/5 pl-10 pr-3 text-[14px] text-foreground outline-none placeholder:text-foreground/40 focus:border-primary/50"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-11 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-3 text-[14px] text-foreground outline-none focus:border-primary/50"
          >
            <option className="bg-card text-foreground">Body & Exterior</option>
            <option className="bg-card text-foreground">Engine Parts</option>
            <option className="bg-card text-foreground">Suspension</option>
            <option className="bg-card text-foreground">Electrical</option>
          </select>

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="h-11 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-3 text-[14px] text-foreground outline-none focus:border-primary/50"
          >
            <option className="bg-card text-foreground">Toyota</option>
            <option className="bg-card text-foreground">Honda</option>
            <option className="bg-card text-foreground">BMW</option>
            <option className="bg-card text-foreground">Audi</option>
          </select>

          <button
            type="submit"
            className="h-11 rounded-xl bg-primary text-[14px] font-semibold text-white transition hover:bg-primary-hover shadow-lg"
          >
            Search
          </button>
        </form>
      </div>

      {/* Spacer for scroll */}
      <section className="relative z-10 min-h-[100vh]" />

      <Drive />
    </main>
  );
}