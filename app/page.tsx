"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { KitchenCarousel } from "@/components/KitchenCarousel";
import StatsSection from "@/components/StatsSection";
import ContactStrip from "@/components/ContactStrip";




export default function Home() {
  return (
    <main className="bg-[#f7f6f3] text-[#1c1c1c]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32 overflow-hidden">

  {/* Background */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.8, ease: "easeOut" }}
    className="absolute inset-0"
  >
    <Image
      src="/images/hero/hero.jpg"
      alt="Premium modular kitchen"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/20" />
  </motion.div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
    className="relative z-10 max-w-3xl text-center"
  >
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#f5f4f0]">
      Crafted Kitchens <br />
      for Modern Living
    </h1>

    <p className="mt-8 text-sm md:text-base font-medium tracking-wide
      text-white/90 max-w-xl mx-auto
      drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
      Premium modular and stainless steel kitchens designed for
      contemporary homes.
    </p>

    {/* CTA */}
    <div className="mt-12 flex justify-center">
      <a
        href="/contact"
        className="inline-flex items-center gap-3
          border border-white/60
          px-7 py-3
          text-sm tracking-wide
          text-white
          hover:border-white hover:bg-white hover:text-black
          transition-all duration-300"
      >
        Book a Consultation
        <span className="text-lg">→</span>
      </a>
    </div>
  </motion.div>
</section>
      {/* ================= PHILOSOPHY SECTION ================= */}
      <section className="relative py-32 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-24 items-center">

            {/* TEXT BLOCK */}
            <div className="relative pl-6">
              <span className="absolute left-0 top-0 h-full w-[2px] bg-[#1c1c1c]/20" />

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Design with Purpose.<br />
                Built for Life.
              </h2>

              <p className="mt-8 text-[#555] leading-relaxed max-w-md">
                A kitchen is not decoration. It is an engineered environment —
                where movement, materials, and craftsmanship come together for
                decades of use.
              </p>
            </div>

            {/* IMAGE BLOCK */}
            <div className="relative h-[440px] overflow-hidden">
              <Image
                src="/images/philosophy/design.jpg"
                alt="Kitchen craftsmanship"
                fill
                className="object-cover scale-105"
              />
            </div>

          </div>
        </Reveal>
      </section>

      {/* ================= SIGNATURE KITCHENS ================= */}
      <section className="py-32 px-6 md:px-16 lg:px-32">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-light mb-14">
            Our Kitchens
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {["kitchen-1.jpg", "kitchen-2.jpg", "kitchen-3.jpg"].map(
              (img, i) => (
                <div key={i} className="relative h-[320px] overflow-hidden">
                  <Image
                    src={`/images/kitchens/${img}`}
                    alt="Luxury kitchen design"
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
        </Reveal>
      </section>

      
      <StatsSection />

      <KitchenCarousel />

      <ContactStrip />


      
      

      
    </main>
  );
}
