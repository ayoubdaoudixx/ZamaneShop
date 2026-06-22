"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Story() {
  return (
    <section
      id="story"
      className="texture-paper relative bg-parchment py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-warm-lg"
          >
            <Image
              src="/images/03-hands-stitching.png"
              alt="Artisan hand-stitching a leather wallet in the Zamane workshop"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </motion.div>

          {/* Floating detail image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 hidden aspect-square w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-warm-lg sm:block lg:w-52"
          >
            <Image
              src="/images/05-macro-edge.png"
              alt="Macro detail of burnished leather edge and saddle stitching"
              fill
              sizes="200px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Text */}
        <div className="lg:pl-6">
          <SectionReveal>
            <span className="text-xs uppercase tracking-[0.35em] text-terracotta">
              Our Craft
            </span>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-espresso sm:text-5xl">
              A workshop warmed by
              <span className="italic text-cognac"> golden-hour light</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-walnut/80">
              <p>
                In a sunlit riad on the edge of the Marrakech medina, our
                artisans work the way their grandfathers did — by hand, by eye,
                and without hurry. Every wallet begins as a single hide of
                vegetable-tanned full-grain leather, chosen for its character.
              </p>
              <p>
                We cut, bevel, and saddle-stitch each piece with waxed linen
                thread, a technique that outlasts machine seams by decades. No
                two pieces are identical, and that is precisely the point: the
                grain, the patina, the faint mark of the maker&apos;s hand.
              </p>
              <p>
                This is slow fashion in the truest sense — fewer things, made
                better, meant to be carried for a lifetime and to grow more
                beautiful with every year.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-cognac/15 pt-8">
              {[
                { value: "100%", label: "Full-grain leather" },
                { value: "Hand", label: "Saddle-stitched" },
                { value: "1 of 1", label: "Naturally unique" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-2xl text-cognac sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-taupe">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
