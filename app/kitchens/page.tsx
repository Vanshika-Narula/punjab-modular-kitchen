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
            src="/images/hero/kitchen-4.jpg"
            alt="Luxury kitchen design"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Hero Text */}
        <Reveal>
          <div className="relative z-10 max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#f5f4f0]">
              Kitchens designed for real homes<br />
              and real lives.
            </h1>

            <p
              className="mt-6 text-sm md:text-base font-medium tracking-wide
              text-white/90 max-w-xl mx-auto
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            >
              Thoughtfully planned, carefully crafted, and built to last.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= MODULAR KITCHENS ================= */}
      <section className="pt-40 pb-32 px-6 md:px-16 lg:px-32">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Modular Kitchens
          </h2>

          <div className="grid md:grid-cols-2 gap-14">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/images/kitchens/kitchen-2.jpg"
                alt="Modular kitchen"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/images/kitchens/kitchen-3.jpg"
                alt="Modern modular kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= STAINLESS STEEL KITCHENS ================= */}
      <section className="pt-40 pb-32 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Stainless Steel Kitchens
          </h2>

          <div className="grid md:grid-cols-2 gap-14">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/images/hero/kitchen-5.jpg"
                alt="Stainless steel kitchen"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/images/hero/kitchen-6.jpg"
                alt="Premium steel kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= QUIET CTA ================= */}
      <section className="py-32 px-6 md:px-16 lg:px-32 text-center">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            Every kitchen begins with a conversation.
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
