"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const kitchens = [
  "kitchen-1.jpg",
  "kitchen-2.jpg",
  "kitchen-3.jpg",
  "kitchen-4.jpg",
  "kitchen-5.jpg",
];

export function KitchenCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActive(index);
  };

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: index * containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32">
      <Reveal>
        {/* Title */}
        <div className="px-6 md:px-16 lg:px-32 mb-10">
          <h2 className="text-3xl md:text-4xl font-light">
            Kitchens for Every Home
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth
          w-full h-[75vh]"
        >
          {kitchens.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-full flex-shrink-0 snap-center"
            >
              <Image
                src={`/images/kitchens/${img}`}
                alt="Luxury kitchen"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {kitchens.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 w-2 rounded-full transition-all
                ${
                  active === i
                    ? "bg-black"
                    : "bg-black/30 hover:bg-black/50"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
