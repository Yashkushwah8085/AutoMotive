"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const brandLogos = [
  {
    name: "Maserati",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/maserati-logo-png-transparent.png",
  },
  {
    name: "Bentley",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/bentley-logo-png-transparent.png",
  },
  {
    name: "Renault",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/toppng.com-renault-logo-with-text-png-954x965-1.png",
  },
  {
    name: "Nissan",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/toppng.com-nissan-logo-vector-512x512-1.png",
  },
  {
    name: "Chevrolet",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/toppng.com-chevrolet-logo-gold-bowtie-emblem-560x166-1.png",
  },
  {
    name: "Volkswagen",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/toppng.com-volkswagen-logo-vector-free-download-400x400-1.png",
  },
  {
    name: "Skoda",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/toppng.com-skoda-eps-vector-logo-free-download-400x400-1.png",
  },
  {
    name: "Cadillac",
    src: "https://dusseldorfauto.de/wp-content/uploads/2026/01/toppng.com-cadillac-logo-with-silver-crest-design-1737x1262-1.png",
  },
];

const products = [
  {
    name: "Brembo Brake Disc",
    cat: "Brake System",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2026/01/DDBD010.avif",
  },
  {
    name: "KW Suspension Kit",
    cat: "Suspension",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2026/01/DDASH011-1536x1536.jpg",
  },
  {
    name: "Bosch Alternator",
    cat: "Electronics",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2026/01/DDWSM002-300x300.jpg",
  },
  {
    name: "Nissens Radiator",
    cat: "Cooling System",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2026/01/DDOC003-1024x1024.webp",
  },
  {
    name: "Engine Cylinder Head",
    cat: "Engine Parts",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2026/01/DDEM014-1024x1024.jpg",
  },
  {
    name: "LED Headlight",
    cat: "Body & Exterior",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2026/01/DDWPAUF003-976x1024.jpg",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function FeaturedProducts() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      {/* BRAND LOGOS */}
      <section className="py-20 border-b border-foreground/5">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-2 text-3xl font-black uppercase text-foreground">
              Brand Logos
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8"
          >
            {brandLogos.map((brand) => (
              <motion.div
                key={brand.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-foreground/10 bg-card p-4 transition-all hover:border-primary/40 hover:shadow-xl"
              >
                <div className="flex aspect-square w-full items-center justify-center rounded-xl border border-foreground/5 bg-white p-4 shadow-sm">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-[70px] max-w-[90px] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <h4 className="mt-4 text-center text-[12px] font-bold text-foreground">
                  {brand.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-2 text-3xl font-black uppercase text-foreground">
              Featured Products
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6"
          >
            {products.map((p) => (
              <motion.div
                key={p.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-foreground/10 bg-card p-4 transition-all hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-4 aspect-square bg-white rounded-xl p-2 flex items-center justify-center border border-foreground/5">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="mb-6">
                  <h4 className="mb-1 text-[13px] font-bold leading-tight text-foreground">
                    {p.name}
                  </h4>
                  <p className="text-[10px] font-medium uppercase text-muted">
                    {p.cat}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex-1 rounded-lg border border-foreground/10 bg-foreground/5 py-2 text-[10px] font-bold text-foreground transition-colors hover:bg-foreground/10">
                    View Details
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-primary-hover">
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}