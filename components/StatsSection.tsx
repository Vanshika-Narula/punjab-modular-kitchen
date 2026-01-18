"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Happy Homes" },
  { value: 50000, suffix: "+", label: "Sq Ft Delivered Seamlessly" },
  { value: 600, suffix: "+", label: "Unique Designs" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const duration = 2600; // total animation time (ms)
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-40 bg-black text-white">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">

          <div className="grid md:grid-cols-4 gap-16 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-light mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm tracking-wide text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}
