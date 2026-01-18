import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <main className="bg-[#f7f6f3] text-[#1c1c1c]">

      {/* ================= INTRO ================= */}
      <section className="pt-48 pb-40 px-6 md:px-16 lg:px-32">
        <Reveal>
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-xs text-[#777]">
              Our Process
            </p>

            <h1 className="mt-10 text-4xl md:text-5xl font-light leading-tight">
              A calm, considered approach<br />
              to kitchen design.
            </h1>

            <p className="mt-8 text-[#555] leading-relaxed max-w-2xl">
              Each stage is designed to be clear, structured,
              and thoughtfully paced.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= STEP 01 ================= */}
      <section className="pb-32 px-6 md:px-16 lg:px-32">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <span className="text-sm text-[#777]">01</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-light">
                Consultation
              </h2>
              <p className="mt-6 text-[#555] leading-relaxed max-w-md">
                We begin by understanding your space, lifestyle,
                and expectations — ensuring the kitchen fits
                your daily routines.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[320px]">
              <Image
                src="/images/process/step-6.jpg"
                alt="Kitchen consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= STEP 02 ================= */}
      <section className="pb-32 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative h-[320px] order-2 md:order-1">
              <Image
                src="/images/process/step-8.jpg"
                alt="Kitchen design planning"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <span className="text-sm text-[#777]">02</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-light">
                Design & Planning
              </h2>
              <p className="mt-6 text-[#555] leading-relaxed max-w-md">
                Layouts, materials, and finishes are selected
                with care — balancing aesthetics, function,
                and longevity.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= STEP 03 ================= */}
      <section className="pb-32 px-6 md:px-16 lg:px-32">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <span className="text-sm text-[#777]">03</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-light">
                Craft & Manufacture
              </h2>
              <p className="mt-6 text-[#555] leading-relaxed max-w-md">
                Precision manufacturing ensures every component
                is produced to exacting standards.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[320px]">
              <Image
                src="/images/process/step-9.jpg"
                alt="Kitchen craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= STEP 04 ================= */}
      <section className="pb-40 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative h-[320px] order-2 md:order-1">
              <Image
                src="/images/process/step-5.jpg"
                alt="Kitchen installation"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <span className="text-sm text-[#777]">04</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-light">
                Installation & Finish
              </h2>
              <p className="mt-6 text-[#555] leading-relaxed max-w-md">
                Installation is carried out with care — ensuring
                clean finishes and long-term reliability.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 md:px-16 lg:px-32 text-center">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            Ready to begin?
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
