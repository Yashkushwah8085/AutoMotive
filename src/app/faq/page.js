"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, CircleHelp } from "lucide-react";
import Drive from "@/components/Drive";

const faqGroups = [
  {
    title: "General FAQs",
    items: [
      {
        q: "Do your parts meet OEM standards?",
        a: "Yes. Our parts are designed and tested to meet or exceed OEM standards for quality, fitment, and durability.",
      },
      {
        q: "Which car brands do you supply parts for?",
        a: "We supply parts for a wide range of European, Japanese, Korean, and American vehicles.",
      },
      {
        q: "Can I order bulk quantities for distribution?",
        a: "Yes. We support bulk and wholesale orders for workshops, distributors, and retail partners.",
      },
      {
        q: "Do you provide warranty on your products?",
        a: "Warranty coverage depends on the product category. Please contact us for category-specific details.",
      },
      {
        q: "Do you offer technical support?",
        a: "Yes. Our team helps with fitment guidance, product selection, and basic technical queries.",
      },
      {
        q: "How can I find the right part for my vehicle?",
        a: "You can contact us with your vehicle details, VIN, or part number, and we will help you match the correct item.",
      },
      {
        q: "Do you provide global shipping?",
        a: "Yes. We offer shipping support to domestic and international customers.",
      },
    ],
  },
  {
    title: "Return, Exchange & Warranty",
    items: [
      {
        q: "What is your return policy for incorrect or faulty parts?",
        a: "If the item is incorrect or faulty, contact us as soon as possible with order details and photos so we can assist.",
      },
      {
        q: "How quickly will I receive a replacement?",
        a: "Replacement timing depends on stock availability and shipping location. We always aim to process it quickly.",
      },
      {
        q: "Can I return a part after installation?",
        a: "Installed parts are usually not eligible unless there is a verified manufacturing issue. Please check before installation.",
      },
    ],
  },
  {
    title: "Availability & Support",
    items: [
      {
        q: "Do you ship internationally?",
        a: "Yes. We support international shipping for many of our products.",
      },
      {
        q: "How can I get support for product selection?",
        a: "Send us your vehicle details or part number, and our team will help you choose the correct product.",
      },
      {
        q: "Can workshops or distributors get special pricing?",
        a: "Yes. We offer wholesale and partner pricing options for eligible business customers.",
      },
    ],
  },
];

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
          <span className="text-[13px] font-medium leading-5 text-foreground/90 sm:text-[14px]">
            {question}
          </span>

          {isOpen ? (
            <ChevronDown className="h-5 w-5 shrink-0 text-foreground/70" />
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

export default function FaqPage() {
  const [openMap, setOpenMap] = useState({
    "General FAQs": 0,
    "Return, Exchange & Warranty": 0,
    "Availability & Support": 0,
  });

  const toggleItem = (groupTitle, index) => {
    setOpenMap((prev) => ({
      ...prev,
      [groupTitle]: prev[groupTitle] === index ? -1 : index,
    }));
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero */}
      <section className="relative flex h-[420px] items-center justify-center overflow-hidden text-center">
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
  <div className="max-w-3xl text-left">
    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
      Support Center
    </p>

    <h1 className="text-[25px] font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-[38px] ">
      Frequently Asked <br/> Questions
    </h1>

    <div className="mt-5 h-1 w-24 bg-primary" />

    <p className="mt-6 max-w-2xl text-[14px] leading-7 text-white/70 sm:text-[16px]">
      Find quick answers about product quality, delivery,
      warranty, and support.
    </p>
  </div>
</div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px] space-y-10">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-5 text-[20px] font-black uppercase tracking-[-0.02em] text-foreground sm:text-[26px]">
                {group.title}
              </h2>

              <div className="space-y-3">
                {group.items.map((item, index) => (
                  <AccordionItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    isOpen={openMap[group.title] === index}
                    onClick={() => toggleItem(group.title, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Drive/>
    </main>
  );
}



 