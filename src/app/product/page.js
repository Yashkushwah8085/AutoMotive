"use client";

import React from "react";
import Link from "next/link";
import Drive from "@/components/Drive";
import { Cog } from "lucide-react";

const categories = [
  "Steering & Suspension",
  "Brake System",
  "Engine Cooling",
  "Electrical & Electronics",
  "Engine Parts",
  "Body & Exterior",
  "Air Suspension",
  "Belt Drive",
  "Clutch System",
  "Filters",
  "Fuel System",
  "HVAC",
  "Ignition System",
  "Interior Parts",
  "Lighting",
  "Mounting And Rubber Parts",
  "Shock Absorber Components",
];

const products = [
  {
    title: "A/C FILTER",
    slug: "ac-filter",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/dfp993-298x300.jpg",
  },
  {
    title: "AIR FILTER",
    slug: "air-filter",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA242-300x300.jpeg",
  },
  {
    title: "OIL FILTER",
    slug: "oil-filter",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO003-300x300.jpeg",
  },
];

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex h-[420px] items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
            alt="Product hero background"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Orange Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_45%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-3xl text-left">

            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              Premium Auto Parts
            </p>

            <h1 className="text-[34px] font-black uppercase leading-none tracking-[-0.04em] text-white">
              All Products
            </h1>

            <div className="mt-5 h-1 w-24 bg-primary" />

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[17px]">
              Explore our complete range of high-quality automotive parts
              engineered for durability, performance, and perfect fitment
              across multiple vehicle brands and models.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-primary px-7 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-primary-hover">
                Browse Products
              </button>

              <button className="border border-white/15 bg-white/5 px-7 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-white/10">
                Request Catalog
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <div className="space-y-2">
            {categories.map((item) => (
              <Link
                key={item}
                href={`/service?section=${slugify(item)}`}
                className="flex w-full items-center gap-2 bg-primary px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-primary-hover"
              >
                <Cog className="h-4 w-4 shrink-0" />
                <span>{item}</span>
              </Link>
            ))}
          </div>

          {/* Product Grid */}
         <div className="grid gap-4 md:grid-cols-1 xl:grid-cols-2">
  {products.map((product) => (
    <div
      key={product.title}
      className="flex flex-col overflow-hidden border border-foreground/10 bg-card shadow-lg transition hover:-translate-y-1 hover:border-primary/40 sm:flex-row"
    >
      {/* Image */}
      <div className="flex h-[170px] items-center justify-center bg-white p-4 sm:h-auto sm:w-[220px] sm:shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-[16px] mt-35 font-black uppercase leading-tight text-foreground">
            {product.title}
          </h3>

          <p className="mt-2 text-[12px] leading-6 text-muted">
            Premium automotive part with reliable fitment and long-lasting performance.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/product-details/${product.slug}`}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-primary transition hover:text-primary-hover"
          >
            Read More »
          </Link>

           
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <Drive />
    </main>
  );
}


//  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
//             {products.map((product) => (
//               <div
//                 key={product.title}
//                 className="overflow-hidden border border-white/10 bg-[#0b1726] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-[#f59e0b]/40"
//               >
//                 <div className="bg-white p-3">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="h-[130px] w-full object-contain transition duration-500 hover:scale-105 sm:h-[140px]"
//                   />
//                 </div>

//                 <div className="p-2.5 pb-1.5">
//                   <h3 className="text-[14px] font-black uppercase text-white">
//                     {product.title}
//                   </h3>

//                   <Link
//                     href={`/product-details/${product.slug}`}
//                     className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-[#f59e0b] transition hover:text-[#ffb02e]"
//                   >
//                     Read More »
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>