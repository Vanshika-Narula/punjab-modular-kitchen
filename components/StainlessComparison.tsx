"use client";

import Reveal from "@/components/Reveal";

export default function StainlessComparison() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-32 bg-[#f7f6f3]">
      <Reveal>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Why Choose Stainless Steel Furniture?
          </h2>

          {/* Comparison Table */}
          <div className="grid grid-cols-3 text-sm md:text-base">

            {/* Header */}
            <div></div>
            <div className="text-center font-medium pb-6">Wood</div>
            <div className="text-center font-medium pb-6">Stainless Steel</div>

            {/* Durability */}
            <div className="py-6 font-medium border-t border-black/10">
              Durability
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              Prone to swelling and cracking over time
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              Corrosion-resistant, built for decades
            </div>

            {/* Hygiene */}
            <div className="py-6 font-medium border-t border-black/10">
              Hygiene
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              Absorbs stains, can house bacteria & pests
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              Non-porous, hygienic & easy to clean
            </div>

            {/* Water Resistance */}
            <div className="py-6 font-medium border-t border-black/10">
              Water Resistance
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              Can become spongy, flaky & smelly
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              100% waterproof
            </div>

            {/* Warranty */}
            <div className="py-6 font-medium border-t border-black/10">
              Warranty
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              Under 10 years*
            </div>
            <div className="py-6 border-t border-black/10 text-center text-[#555]">
              Up to 25 years*
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
