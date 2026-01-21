import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <main className="bg-[#f7f6f3] text-[#1c1c1c]">

      {/* ================= INTRO ================= */}
      <section className="pt-48 pb-32 px-6 md:px-16 lg:px-32 max-w-4xl mx-auto">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-xs text-[#777]">
            About Punjab Modular Kitchen
          </p>

          <h1 className="mt-10 text-4xl md:text-5xl font-light leading-tight">
            Crafted in Stainless Steel.<br />
            Designed for Everyday Living.
          </h1>

          <p className="mt-10 text-[#555] leading-relaxed">
            Punjab Modular Kitchen was founded with a clear intent —
            to create high-performance stainless steel kitchens that
            combine durability, hygiene, and thoughtful design.
          </p>
        </Reveal>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-32 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-light mb-6">
                Our Approach
              </h2>

              <p className="text-[#555] leading-relaxed mb-6">
                We believe kitchens are not decorative installations,
                but engineered environments — spaces that must perform
                reliably every day, year after year.
              </p>

              <p className="text-[#555] leading-relaxed mb-6">
                Stainless steel allows us to design kitchens that are
                structurally stable, hygienic, and resistant to heat,
                moisture, and wear — without compromising on visual calm.
              </p>

              <p className="text-[#555] leading-relaxed">
                From layout planning to fabrication and installation,
                our process is guided by precision, restraint, and
                an uncompromising focus on quality.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/steel/steel-5.jpg"
                alt="Stainless steel kitchen craftsmanship"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </Reveal>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-32 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-16 text-[#555]">

            <div>
              <h3 className="text-xl font-light mb-4">
                Material Integrity
              </h3>
              <p className="leading-relaxed">
                We work primarily with stainless steel because it offers
                long-term structural stability, hygiene, and performance
                unmatched by conventional materials.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">
                Thoughtful Engineering
              </h3>
              <p className="leading-relaxed">
                Every kitchen is planned as a system — balancing storage,
                workflow, and proportions to create spaces that feel
                intuitive and uncluttered.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">
                Quiet Confidence
              </h3>
              <p className="leading-relaxed">
                Our designs avoid excess. Clean lines, honest materials,
                and careful detailing allow the kitchen to age gracefully
                over time.
              </p>
            </div>

          </div>
        </Reveal>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-40 px-6 md:px-16 lg:px-32 text-center bg-[#f2f1ee]">
        <Reveal>
          <h4 className="text-3xl md:text-4xl font-light max-w-3xl mx-auto">
            Good kitchens are not defined by trends,
            but by material honesty and thoughtful design.
          </h4>
        </Reveal>
      </section>

    </main>
  );
}
