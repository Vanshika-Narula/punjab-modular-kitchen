"use client";

import {
  MessageSquare,
  LayoutGrid,
  Ruler,
  Factory,
  Wrench,
  Home,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  { step: "01", title: "Initial Consultation", icon: MessageSquare },
  { step: "02", title: "Concept & Planning", icon: LayoutGrid },
  { step: "03", title: "Technical Survey", icon: Ruler },
  { step: "04", title: "Precision Manufacturing", icon: Factory },
  { step: "05", title: "On-Site Execution", icon: Wrench },
  { step: "06", title: "Ready to Live", icon: Home },
];

export default function CustomerJourney() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-32 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide text-black">
            Customer Journey
          </h2>

          {/* Steps */}
          <div className="mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16 text-center">

            {steps.map(({ step, title, icon: Icon }) => (
              <div key={step} className="flex flex-col items-center">

                {/* Step number */}
                <span className="text-sm tracking-widest text-[#d32f2f]">
                  {step}
                </span>

                {/* Icon */}
                <div className="mt-6 flex items-center justify-center">
                  <Icon
                    className="h-10 w-10 text-[#d32f2f]"
                    strokeWidth={1.25}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-sm font-medium text-black tracking-wide text-center">
                  {title}
                </h3>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <a
              href="/contact"
              className="inline-block rounded-full bg-[#d32f2f] px-10 py-4 text-sm tracking-wide text-white hover:bg-[#b71c1c] transition"
            >
              Book a Free Site Visit
            </a>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
