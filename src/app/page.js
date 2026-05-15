
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";

import PromiseSection from "@/components/Promise";
import Drive from "@/components/Drive";
 
 

export default function Home() {
  return (
    <main>

      <Hero />
      <FeaturedProducts />
      <PromiseSection />
      <Features />
      <Drive />

    </main>
  );
}