"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import Drive from "@/components/Drive";

const HERO_IMAGE =
  "https://dusseldorfauto.de/wp-content/uploads/2017/12/car-engine-motor-clean-customized-159293-scaled.jpeg";

const WHY_IMAGE =
  "https://dusseldorfauto.de/wp-content/uploads/2017/12/vehicle-chrome-technology-automobile-65623.jpeg";

const serviceData = {
  "steering-suspension": {
    title: "Steering & Suspension",
    subtitle: "Precision Handling. Confident Control. Long-Lasting Durability.",
    description:
      "Steering and suspension components play a critical role in vehicle safety and comfort. We offer high-quality parts engineered for stability, handling accuracy, and long-term reliability.",
    features: [
      "Enhanced stability & reduced vibration",
      "OEM-grade material strength",
      "Safe and accurate steering response",
      "Fitment guaranteed by make/model/year",
      "Heavy-duty options for demanding conditions",
    ],
    products: ["Control Arm", "Ball Joint", "Tie Rod End"],
  },
  "brake-system": {
    title: "Brake System",
    subtitle: "Reliable Stopping Power. Safety You Can Trust.",
    description:
      "Brake components are designed for dependable stopping performance, smooth operation, and long service life in everyday driving conditions.",
    features: [
      "Consistent braking response",
      "Heat-resistant materials",
      "Long pad and rotor life",
      "Fitment for major vehicle platforms",
      "Built for city and highway use",
    ],
    products: ["Brake Pad", "Brake Disc", "Brake Shoe"],
  },
  "engine-cooling": {
    title: "Engine Cooling",
    subtitle: "Temperature Control. Engine Protection. Better Performance.",
    description:
      "Cooling parts help maintain stable engine temperature and protect your vehicle from overheating under heavy use.",
    features: [
      "Improved heat dissipation",
      "Durable radiator components",
      "Reliable coolant flow",
      "Made for daily and heavy-duty driving",
      "Strong resistance to wear",
    ],
    products: ["Radiator", "Thermostat", "Water Pump"],
  },
  "electrical-and-electronics": {
    title: "Electrical & Electronics",
    subtitle: "Accurate Signals. Stable Power. Dependable Function.",
    description:
      "Electrical and electronic parts are built for reliability, precise signal transfer, and long-lasting performance.",
    features: [
      "Stable electrical output",
      "Strong connector quality",
      "Accurate sensor response",
      "Compatible with modern vehicles",
      "Built for consistent operation",
    ],
    products: ["Sensor", "Relay", "Switch"],
  },
  "engine-parts": {
    title: "Engine Parts",
    subtitle: "Durable Core Components for Stronger Performance.",
    description:
      "Engine parts are designed to support reliable combustion, smooth operation, and better long-term efficiency.",
    features: [
      "High durability materials",
      "Engine-safe fitment",
      "Performance-focused design",
      "Long service intervals",
      "Built for heat and stress",
    ],
    products: ["Piston", "Gasket", "Timing Kit"],
  },
  "body-and-exterior": {
    title: "Body & Exterior",
    subtitle: "Clean Fit. Strong Finish. Better Protection.",
    description:
      "Exterior parts are made to protect the vehicle, improve appearance, and maintain proper fit and finish.",
    features: [
      "Exact body fitment",
      "Strong surface finish",
      "Weather-resistant build",
      "Designed for OEM-style look",
      "Long-lasting exterior quality",
    ],
    products: ["Bumper", "Grille", "Fender"],
  },
  "air-suspension": {
    title: "Air Suspension",
    subtitle: "Adaptive Comfort. Better Ride Quality. Smooth Control.",
    description:
      "Air suspension parts help improve ride comfort, height control, and driving stability across road conditions.",
    features: [
      "Smooth ride response",
      "Improved load handling",
      "Reliable air pressure support",
      "Comfort-focused performance",
      "Built for premium vehicles",
    ],
    products: ["Air Spring", "Compressor", "Valve Block"],
  },
  "belt-drive": {
    title: "Belt Drive",
    subtitle: "Efficient Power Transfer. Reliable Engine Support.",
    description:
      "Belt drive components help transfer power efficiently to keep engine accessories operating properly.",
    features: [
      "Strong tension handling",
      "Low noise operation",
      "Durable belt materials",
      "Stable performance over time",
      "Fitment for multiple engines",
    ],
    products: ["Serpentine Belt", "Tensioner", "Pulley"],
  },
  "clutch-system": {
    title: "Clutch System",
    subtitle: "Smooth Engagement. Better Drive Control. Long Life.",
    description:
      "Clutch parts are built for smooth shifting, strong grip, and dependable operation in manual vehicles.",
    features: [
      "Smooth power transfer",
      "Strong friction materials",
      "Easy engagement and release",
      "Reliable under load",
      "Long service durability",
    ],
    products: ["Clutch Plate", "Pressure Plate", "Release Bearing"],
  },
  filters: {
    title: "Filters",
    subtitle: "Cleaner Air. Better Protection. Efficient Operation.",
    description:
      "Filters help protect engines and cabin systems by trapping dust, debris, and harmful particles.",
    features: [
      "High filtration efficiency",
      "Better air quality",
      "Protection for engine components",
      "Long service intervals",
      "Made for precise fitment",
    ],
    products: ["A/C Filter", "Air Filter", "Oil Filter"],
  },
  "fuel-system": {
    title: "Fuel System",
    subtitle: "Clean Fuel Flow. Stable Delivery. Reliable Performance.",
    description:
      "Fuel system parts are designed to support efficient fuel delivery and consistent engine response.",
    features: [
      "Stable fuel delivery",
      "Leak-resistant design",
      "High-pressure compatibility",
      "Built for modern engines",
      "Supports efficient combustion",
    ],
    products: ["Fuel Pump", "Injector", "Fuel Filter"],
  },
  hvac: {
    title: "HVAC",
    subtitle: "Comfort Control. Stable Cabin Temperature. Smooth Airflow.",
    description:
      "HVAC components are made to maintain comfort, airflow quality, and dependable cabin temperature control.",
    features: [
      "Consistent cooling and heating",
      "Efficient airflow design",
      "Reliable fan performance",
      "Comfort-focused operation",
      "Durable climate control parts",
    ],
    products: ["Blower Motor", "Evaporator", "Cabin Filter"],
  },
  "ignition-system": {
    title: "Ignition System",
    subtitle: "Quick Start. Strong Spark. Reliable Ignition.",
    description:
      "Ignition parts are engineered for accurate spark delivery, smoother starting, and dependable engine response.",
    features: [
      "Fast engine start",
      "Strong spark output",
      "Stable ignition timing",
      "Built for daily use",
      "Long-lasting performance",
    ],
    products: ["Spark Plug", "Ignition Coil", "Plug Wire"],
  },
  "interior-parts": {
    title: "Interior Parts",
    subtitle: "Comfort Inside. Better Feel. Reliable Fit.",
    description:
      "Interior parts help improve cabin function, comfort, and appearance with dependable quality and fit.",
    features: [
      "Comfort-first design",
      "Good fit and finish",
      "Durable daily-use materials",
      "Easy integration",
      "Modern cabin look",
    ],
    products: ["Dashboard Parts", "Trim Panel", "Console Component"],
  },
  lighting: {
    title: "Lighting",
    subtitle: "Clear Vision. Better Safety. Modern Style.",
    description:
      "Lighting parts are built for visibility, safety, and strong performance in all driving conditions.",
    features: [
      "Bright and clear output",
      "Road-safe visibility",
      "Long-lasting bulbs and housings",
      "Weather-resistant build",
      "OEM-style fitment",
    ],
    products: ["Headlamp", "Tail Lamp", "Fog Lamp"],
  },
  "mounting-and-rubber-parts": {
    title: "Mounting And Rubber Parts",
    subtitle: "Vibration Control. Better Support. Longer Component Life.",
    description:
      "Mounting and rubber parts reduce vibration, support system stability, and improve comfort.",
    features: [
      "Reduced vibration transfer",
      "Strong rubber compound",
      "Support for critical components",
      "Long-term elasticity",
      "Reliable under stress",
    ],
    products: ["Engine Mount", "Rubber Bush", "Bracket Mount"],
  },
  "shock-absorber-components": {
    title: "Shock Absorber Components",
    subtitle: "Better Dampening. Improved Stability. Smooth Driving.",
    description:
      "Shock absorber components help improve ride quality, road control, and vehicle balance on rough surfaces.",
    features: [
      "Stable dampening response",
      "Better wheel contact",
      "Comfort-oriented ride",
      "Durable construction",
      "Built for rough road use",
    ],
    products: ["Shock Absorber", "Dust Cover", "Mounting Kit"],
  },
};

const defaultData = serviceData["steering-suspension"];

const productImagesBySection = {
  "steering-suspension": [
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  ],
  "brake-system": [
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  ],
  "engine-cooling": [
    "https://images.unsplash.com/photo-1515923166617-749b9e61de31?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
  ],
  "electrical-and-electronics": [
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515923166617-749b9e61de31?q=80&w=1200&auto=format&fit=crop",
  ],
  "engine-parts": [
    "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  ],
  "body-and-exterior": [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  ],
  "air-suspension": [
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  ],
  "belt-drive": [
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  ],
  "clutch-system": [
    "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  ],
  filters: [
    "https://images.unsplash.com/photo-1515923166617-749b9e61de31?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
  ],
  "fuel-system": [
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
  ],
  hvac: [
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515923166617-749b9e61de31?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  ],
  "ignition-system": [
    "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  ],
  "interior-parts": [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
  ],
  lighting: [
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  ],
  "mounting-and-rubber-parts": [
    "https://images.unsplash.com/photo-1515923166617-749b9e61de31?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  ],
  "shock-absorber-components": [
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  ],
  default: [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524206127-48bbd363f3d5?q=80&w=1200&auto=format&fit=crop",
  ],
};

const faqsBase = [
  "What does this category include?",
  "Are these parts tested for durability?",
  "Do you provide fitment support?",
  "What material quality do you use?",
  "How often should parts be replaced?",
];

function ServiceContent() {
  const [openIndex, setOpenIndex] = useState(0);
  const searchParams = useSearchParams();

  const section = searchParams.get("section") || "steering-suspension";
  const data = serviceData[section] || defaultData;

  const sectionProductImages =
    productImagesBySection[section] || productImagesBySection.default;

  const renderedProducts = (data.products || []).map((name, index) => ({
    name,
    image: sectionProductImages[index % sectionProductImages.length],
  }));

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.10),transparent_35%)]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-[32px] font-black leading-[1.02] tracking-[-0.04em] sm:text-[42px] lg:text-[54px] text-foreground">
              {data.title}
            </h1>

            <h2 className="mt-5 max-w-xl text-[18px] font-bold leading-[1.25] text-foreground/90 sm:text-[22px]">
              {data.subtitle}
            </h2>

            <p className="mt-6 max-w-2xl text-[13px] leading-7 text-muted sm:text-[14px]">
              {data.description}
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3 text-[14px] font-bold text-white transition hover:bg-primary-hover shadow-lg"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <img
              src={HERO_IMAGE}
              alt={data.title}
              className="h-[320px] w-full rounded-[24px] object-cover shadow-2xl sm:h-[400px] lg:h-[420px]"
            />
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-2 bg-primary rounded-full" />
            <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-[36px] text-foreground">
              Products We Offer
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {renderedProducts.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40"
              >
                <div className="bg-white p-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-[18px] font-black uppercase text-foreground">
                    {item.name}
                  </h3>
                  <button className="mt-4 inline-flex items-center gap-2 bg-primary px-5 py-2 text-[12px] font-bold text-white transition hover:bg-primary-hover rounded-lg">
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img
              src={WHY_IMAGE}
              alt={data.title}
              className="h-[330px] w-full rounded-[24px] object-cover shadow-2xl sm:h-[420px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[28px] font-black leading-[1.02] tracking-[-0.04em] sm:text-[40px] text-foreground">
              Why Choose Our Components
            </h2>

            <ul className="mt-8 space-y-5">
              {data.features.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span className="text-[14px] leading-7 text-muted font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 text-[14px] font-bold text-white transition hover:bg-primary-hover rounded-xl shadow-lg"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center mb-16">
            <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-[42px] text-foreground uppercase">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 mx-auto h-1.5 w-24 bg-primary rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqsBase.map((q, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 shadow-md ${
                    isOpen ? "border-primary/40 bg-card" : "border-foreground/10 bg-card/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="flex w-full items-center text-left"
                  >
                    <div className="flex h-16 w-16 items-center justify-center bg-primary text-white sm:w-20">
                      <ShieldCheck className="h-6 w-6" />
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-4 px-6 py-5">
                      <span className="text-[14px] font-bold text-foreground sm:text-[16px]">
                        {q}
                      </span>
                      {isOpen ? (
                        <ChevronDown className="h-5 w-5 shrink-0 text-primary" />
                      ) : (
                        <ChevronRight className="h-5 w-5 shrink-0 text-foreground/40" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pl-20 pr-8 text-[14px] leading-7 text-muted animate-in fade-in slide-in-from-top-2 duration-300">
                      {data.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Drive />
    </main>
  );
}

export default function ServicePage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background text-foreground text-xl">Loading...</div>}>
      <ServiceContent />
    </Suspense>
  );
}
