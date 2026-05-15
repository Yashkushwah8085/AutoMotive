"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Plus,
  CircleHelp,
  ChevronRight,
  Phone,
  Mail,
  Clock3,
  LifeBuoy,
  ArrowLeft,
} from "lucide-react";
import Drive from "@/components/Drive";

const productData = {
  "ac-filter": {
    title: "A/C FILTER",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/dfp993-298x300.jpg",
    hero:
      "data:image/jpeg;base64,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",
    description:
      "High-quality A/C filter designed for clean airflow, better cabin comfort, and dependable performance.",
    subtitle: "Clean air. Better comfort. Reliable protection.",
    features: [
      "Helps improve cabin air quality",
      "Designed for consistent airflow",
      "Built for long-lasting use",
      "OEM-style fitment and finish",
    ],
    variants: [
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFP900.jpeg",
        code: "AC-F-001",
        fitment: "A/C FILTER",
      },
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFP919.jpg",
        code: "AC-F-002",
        fitment: "A/C FILTER",
      },
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFP939-1.avif",
        code: "AC-F-003",
        fitment: "A/C FILTER",
      },
    ],
    gallery: [
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFP927.jpg",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFP965-1024x1024.webp",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFP973.jpg",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFP939.avif",
    ],
  },
  "air-filter": {
    title: "AIR FILTER",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA462-1.jpeg",
    hero:
      "data:image/jpeg;base64,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",
    description:
      "Durable air filter built for cleaner intake, efficient engine breathing, and long-lasting use.",
    subtitle: "Cleaner intake. Better efficiency. Strong protection.",
    features: [
      "Improves engine airflow",
      "Supports cleaner combustion",
      "Built for dependable filtration",
      "Works well in daily driving conditions",
    ],
    variants: [
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA031.webp",
        code: "AF-001",
        fitment: "AIR FILTER",
      },
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA328.webp",
        code: "AF-002",
        fitment: "AIR FILTER",
      },
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA170.jpg",
        code: "AF-003",
        fitment: "AIR FILTER",
      },
    ],
    gallery: [
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA619.jpeg",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA144-1024x1024.webp",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA171.jpg",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA075.jpg",
    ],
  },
  "oil-filter": {
    title: "OIL FILTER",
    image:
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO003.jpeg",
    hero:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reliable oil filter designed to help protect engine components and maintain smooth operation.",
    subtitle: "Engine protection. Clean oil flow. Long service life.",
    features: [
      "Helps trap harmful contaminants",
      "Supports engine health",
      "Built for reliable performance",
      "Made for regular maintenance cycles",
    ],
    variants: [
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO171.jpeg",
        code: "OF-001",
        fitment: "OIL FILTER",
      },
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO508.jpeg",
        code: "OF-002",
        fitment: "OIL FILTER",
      },
      {
        image:
          "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO367.jpeg",
        code: "OF-003",
        fitment: "OIL FILTER",
      },
    ],
    gallery: [
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFA000.jpeg",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO716.jpeg",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO263-1024x946.jpeg",
      "https://dusseldorfauto.de/wp-content/uploads/2025/12/DFO005-1024x1024.avif",
    ],
  },
};

function buildFaqSections(productTitle) {
  const name = productTitle.toLowerCase();

  return [
    {
      title: "Fitment & Compatibility",
      items: [
        {
          q: "What information do I need to ensure correct fitment?",
          a: `Share your vehicle make, model, year, engine type, or part number so we can match the correct ${name}.`,
        },
        {
          q: "Can I use the same part for different vehicle models?",
          a: `Some ${name} variants may fit multiple vehicle models, but exact compatibility should always be checked before ordering.`,
        },
        {
          q: "What if the product I received doesn’t fit?",
          a: `Contact us with your order details and vehicle information. We will help verify the issue and guide you to the correct ${name}.`,
        },
      ],
    },
    {
      title: "Product Quality",
      items: [
        {
          q: "Are your parts tested before shipping?",
          a: `Yes. Our ${name} products are checked for quality, fitment, and basic performance before dispatch.`,
        },
        {
          q: "What materials are used in your components?",
          a: `We use durable, application-specific materials chosen to support long service life and reliable operation for ${name}.`,
        },
        {
          q: "Do you offer heavy-duty or performance variants?",
          a: `Yes. Depending on the product line, we offer standard and upgraded options for ${name} use cases.`,
        },
      ],
    },
    {
      title: "Installation & Maintenance",
      items: [
        {
          q: "Can I install the part myself?",
          a: `Some customers install ${name} on their own, but professional installation is recommended for best results and safety.`,
        },
        {
          q: "How should I maintain the component?",
          a: `Follow the recommended service schedule, inspect regularly, and replace the ${name} when wear or clogging is visible.`,
        },
        {
          q: "How often should related parts be replaced?",
          a: `Replacement intervals depend on driving conditions and vehicle usage, but routine inspection is always recommended.`,
        },
        {
          q: "Do related systems require special handling?",
          a: `Yes, handling depends on the vehicle system. Always follow the correct service procedure to avoid damage during installation.`,
        },
      ],
    },
  ];
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`overflow-hidden border transition-all duration-300 ${
        isOpen ? "border-primary/40 bg-card" : "border-foreground/10 bg-card/40"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-stretch text-left"
      >
        <div className="flex w-12 items-center justify-center bg-primary text-white sm:w-14">
          <CircleHelp className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>

        <div className="flex flex-1 items-center justify-between gap-4 px-4 py-4 sm:px-5">
          <span className="text-[13px] font-medium leading-5 text-foreground sm:text-[14px]">
            {question}
          </span>

          {isOpen ? (
            <Plus className="h-5 w-5 shrink-0 rotate-45 text-foreground/70" />
          ) : (
            <Plus className="h-5 w-5 shrink-0 text-foreground/70" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-5 pl-14 pr-5 text-[12px] leading-6 text-muted sm:pl-16 sm:text-[13px]">
          {answer}
        </div>
      )}
    </div>
  );
}

function FaqGroup({ title, items, openKey, setOpenKey, groupIndex }) {
  return (
    <div>
      <h4 className="mb-4 text-[18px] font-black text-foreground sm:text-[22px]">
        {title}
      </h4>

      <div className="space-y-3">
        {items.map((item, itemIndex) => {
          const key = `${groupIndex}-${itemIndex}`;
          const isOpen = openKey === key;

          return (
            <AccordionItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={isOpen}
              onClick={() => setOpenKey(isOpen ? "" : key)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function ProductDetailsPage() {
  const params = useParams();
  const [openKey, setOpenKey] = useState("0-0");

  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const product = productData[slug];

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-3xl font-black">Product Not Found</h1>
          <Link
            href="/product"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const faqSections = buildFaqSections(product.title);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="relative h-[260px] overflow-hidden sm:h-[320px]">
        <img
          src={product.hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.10),transparent_45%)]" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Product Detail
            </p>
            <h1 className="text-[30px] font-black uppercase leading-none sm:text-[42px] lg:text-[54px] text-white">
              {product.title}
            </h1>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border border-foreground/10 bg-white p-6 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.title}
                className="h-[420px] w-full object-contain"
              />
            </div>

            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Premium Product
              </p>

              <h2 className="text-[38px] font-black uppercase leading-none text-foreground">
                {product.title}
              </h2>

              <div className="mt-5 h-1 w-20 bg-primary" />

              <h3 className="mt-6 text-[18px] font-bold text-foreground/90">
                {product.subtitle}
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-muted">
                {product.description}
              </p>

              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 text-primary">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                    <span className="text-[14px] leading-6 text-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-lg bg-primary px-6 py-3 text-[13px] font-bold text-white transition hover:bg-primary/90">
                  Request a Quote
                </button>

                <Link
                  href="/contact"
                  className="rounded-lg border border-foreground/15 bg-card px-6 py-3 text-[13px] font-bold text-foreground transition hover:bg-foreground/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-[24px] font-black uppercase text-foreground">Variants</h3>

            <div className="grid gap-4 md:grid-cols-3">
              {product.variants.map((variant) => (
                <div
                  key={variant.code}
                  className="overflow-hidden border border-foreground/10 bg-card rounded-2xl shadow-lg"
                >
                  <div className="bg-white p-4">
                    <img
                      src={variant.image}
                      alt={variant.code}
                      className="h-[140px] w-full object-contain"
                    />
                  </div>

                  <div className="border-t border-foreground/10 bg-card px-4 py-4">
                    <div className="text-[12px] font-bold text-primary">
                      {variant.code}
                    </div>
                    <div className="mt-1 text-[11px] text-muted">
                      {variant.fitment}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-[24px] font-black uppercase text-foreground">
              Product Images
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.gallery.map((img, index) => (
                <div key={index} className="border border-foreground/10 bg-white p-4 rounded-2xl shadow-lg">
                  <img
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className="h-[160px] w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-8 text-[24px] font-black uppercase text-foreground">
              Frequently Asked Questions
            </h3>

            <div className="space-y-10">
              {faqSections.map((section, sectionIndex) => (
                <FaqGroup
                  key={section.title}
                  title={section.title}
                  items={section.items}
                  openKey={openKey}
                  setOpenKey={setOpenKey}
                  groupIndex={sectionIndex}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Phone, text: "+49 211 1234567" },
              { icon: Mail, text: "info@dusseldorfauto.de" },
              { icon: Clock3, text: "Mon - Sat 9:00 to 8:00" },
              { icon: LifeBuoy, text: "Support Available" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-foreground/10 bg-card p-4 rounded-xl shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-primary text-white rounded-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[14px] text-foreground/80">{item.text}</div>
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