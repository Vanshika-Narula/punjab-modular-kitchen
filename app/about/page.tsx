import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <main className="bg-[#f7f6f3] text-[#1c1c1c]">

      {/* ================= INTRO ================= */}
      <section className="pt-48 pb-32 px-6 md:px-16 lg:px-32 max-w-4xl mx-auto">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-xs text-[#777]">
            About Us
          </p>

          <h1 className="mt-10 text-4xl md:text-5xl font-light leading-tight">
            Designed with intention.<br />
            Built with care.
          </h1>

          <p className="mt-10 text-[#555] leading-relaxed">
            Punjab Modular Kitchen was created to design kitchens that
            work effortlessly and last for years.
          </p>
        </Reveal>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-32 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">

            <div>
              <h2 className="text-3xl font-light mb-6">
                Our Story
              </h2>

              <p className="text-[#555] leading-relaxed mb-6">
                We believe kitchens are not just functional spaces,
                but environments where everyday life unfolds.
              </p>

              <p className="text-[#555] leading-relaxed">
                Our work is guided by clarity, restraint, and an
                unwavering focus on quality — from planning to
                installation.
              </p>
            </div>

            {/* Subtle Image */}
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/process/step-8.jpg"
                alt="Kitchen craftsmanship"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </Reveal>
      </section>



      {/* ================= CLOSING ================= */}
      <section className="py-40 px-6 md:px-16 lg:px-32 text-center bg-[#f2f1ee]">
        <Reveal>
          <h4 className="text-3xl md:text-4xl font-light max-w-3xl mx-auto">
            Good design should feel calm, purposeful,
            and quietly confident.
          </h4>
        </Reveal>
      </section>

    </main>
  );
}
