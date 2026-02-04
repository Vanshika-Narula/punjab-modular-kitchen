"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function SteelQuote() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-32 bg-[#f2f1ee]">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

          {/* Image */}
          <div className="relative h-[420px] overflow-hidden">
            <Image
              src="/images/steel/architecture-1.jpg"
              alt="Steel architecture"
              fill
              className="object-cover"
            />
          </div>

          {/* Quote */}
          <div className="max-w-md">
            <p className="font-light text-2xl md:text-3xl leading-relaxed text-[#1c1c1c] italic">
              “Steel kitchens are the backbone of modern homes, defining hygiene, strength, and longevity.”
            </p>

            <p className="mt-8 text-lg font-medium tracking-wide text-[#555]">
              — Punjab Modular Kitchen
            </p>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
