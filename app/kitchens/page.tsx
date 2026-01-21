import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Kitchens() {
  return (
    <main className="bg-[#f7f6f3] text-[#1c1c1c]">

      {/* ================= KITCHENS HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 md:px-16 lg:px-32 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/steel/steel-5.jpg"
            alt="Stainless steel kitchen design"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Text */}
        <Reveal>
          <div className="relative z-10 max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#f5f4f0]">
              Stainless Steel Kitchens<br />
              Engineered for Everyday Living
            </h1>

            <p
              className="mt-6 text-sm md:text-base font-medium tracking-wide
              text-white/90 max-w-xl mx-auto
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            >
              Hygienic. Durable. Timeless — kitchens built to perform
              beautifully for decades.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= WHY STAINLESS STEEL ================= */}
      <section className="pt-40 pb-32 px-6 md:px-16 lg:px-32">
        <Reveal>
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Why Stainless Steel Kitchens?
            </h2>

            <p className="text-[#555] leading-relaxed max-w-2xl">
              Stainless steel kitchens are designed for performance and longevity.
              Non-porous surfaces ensure superior hygiene, while corrosion-resistant
              construction withstands daily use, heat, and moisture — without
              warping, swelling, or deterioration.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= STAINLESS STEEL SHOWCASE ================= */}
      <section className="pt-32 pb-32 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-light mb-14">
            Stainless Steel Kitchen Designs
          </h2>

          <div className="grid md:grid-cols-2 gap-14">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/images/steel/steel-1.jpg"
                alt="Premium stainless steel kitchen"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/images/steel/steel-2.jpg"
                alt="Modern stainless steel kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= MODULAR ENGINEERING (REPOSITIONED) ================= */}
      <section className="pt-40 pb-32 px-6 md:px-16 lg:px-32">
        <Reveal>
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Modular Engineering. Seamless Execution.
            </h2>

            <p className="text-[#555] leading-relaxed max-w-2xl">
              Every stainless steel kitchen is engineered using modular principles —
              ensuring precision fabrication, faster installation, and effortless
              maintenance. The result is a clean, structured system that integrates
              storage, workflow, and durability without visual clutter.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= QUIET CTA ================= */}
      <section className="py-32 px-6 md:px-16 lg:px-32 text-center bg-[#f2f1ee]">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            A better kitchen begins with better material.
          </h3>

          <a
            href="/contact"
            className="inline-block border border-black/80 px-8 py-3
            text-sm tracking-wide
            hover:bg-black hover:text-white transition-all duration-300"
          >
            Book a Consultation
          </a>
        </Reveal>
      </section>

    </main>
  );
}
