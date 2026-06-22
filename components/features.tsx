"use client";

import { Layers, Hand, Sprout, MapPin } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const features = [
  {
    icon: Layers,
    title: "Full-Grain Leather",
    body: "Only the top layer of the hide — the strongest, most characterful cut, left unsanded so the grain shows.",
  },
  {
    icon: Hand,
    title: "Hand-Stitched",
    body: "Saddle-stitched with waxed linen thread. If one stitch ever breaks, the seam holds. It simply doesn't unravel.",
  },
  {
    icon: Sprout,
    title: "Ages Beautifully",
    body: "Vegetable-tanned leather drinks in light and touch, deepening into a patina that's wholly your own.",
  },
  {
    icon: MapPin,
    title: "Ethically Made in Morocco",
    body: "Crafted in our Marrakech workshop by fairly-paid artisans, in small, unhurried batches.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="texture-grain relative overflow-hidden bg-espresso py-24 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionReveal>
            <span className="text-xs uppercase tracking-[0.35em] text-ochre">
              Why Zamane
            </span>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-cream sm:text-5xl">
              The difference is in the details
            </h2>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <SectionReveal key={feature.title} delay={(i % 4) * 0.08}>
              <div className="flex flex-col items-start">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cream/10 text-ochre ring-1 ring-cream/15">
                  <feature.icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="font-serif text-xl text-cream">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {feature.body}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
