"use client";

import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { SectionReveal } from "@/components/section-reveal";

export function ProductGrid() {
  return (
    <section id="collection" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionReveal>
            <span className="text-xs uppercase tracking-[0.35em] text-terracotta">
              The Collection
            </span>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-espresso sm:text-5xl">
              Small leather goods,
              <span className="italic text-cognac"> made to last</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mt-5 text-balance text-base leading-relaxed text-walnut/70">
              A tightly edited range — each piece cut from full-grain leather and
              hand-stitched in our Marrakech workshop. Priced in dirham and euro.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
