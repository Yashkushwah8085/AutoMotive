"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { val: "15+", label: "Years Experience" },
  { val: "25K+", label: "Happy Customers" },
  { val: "50K+", label: "Products" },
  { val: "120+", label: "Countries Served" },
];

export default function AboutSection() {
  return (
    <section className="bg-background py-20 transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Building Image */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-2xl">
             <img 
               src="https://dusseldorfauto.de/wp-content/uploads/2017/12/car-2176954_1920.jpg" 
               alt="Dusseldorf Auto HQ" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Right: Content & Stats */}
          <div>
             <h2 className="text-3xl font-black text-foreground mb-6">
               About <span className="text-primary">Düsseldorf Auto</span>
             </h2>
             <p className="text-muted text-sm leading-relaxed mb-8">
               With over 15 years of experience in the automotive industry, 
               we supply premium quality auto parts for European vehicles. 
               Our commitment to quality, reliability, and customer 
               satisfaction drives everything we do.
             </p>
             
             <div className="flex items-center gap-4 mb-12">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-foreground/10">
                   <img src="https://dusseldorfauto.de/wp-content/uploads/2026/01/unnamed-4.png" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-sm font-black text-foreground uppercase leading-none">Michael Schneider</p>
                   <p className="text-[10px] font-bold text-primary uppercase mt-1">Founder & CEO</p>
                </div>
             </div>

             {/* Stats Grid */}
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="bg-card p-6 rounded-2xl border border-foreground/5 text-center shadow-sm">
                     <div className="text-2xl font-black text-foreground mb-1">{s.val}</div>
                     <div className="text-[9px] font-bold text-muted uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

