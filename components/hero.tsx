"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/01-wallet-cedar.png"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Warm gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(62,42,32,0.55)_100%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-ochre"
        >
          Marrakech · Est. in the Medina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="text-balance font-serif text-4xl leading-[1.08] text-cream drop-shadow-sm sm:text-6xl lg:text-7xl"
        >
          Handcrafted in Morocco.
          <span className="block italic text-ochre">Carried Everywhere.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
          className="mx-auto mt-7 max-w-xl text-balance text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          Premium full-grain leather, cut and hand-stitched by artisans who have
          known the craft for generations. Made slowly, to be carried for a
          lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.75 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            variant="terracotta"
            onClick={() =>
              document
                .getElementById("collection")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop the Collection
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cream/40 text-cream hover:bg-cream/10 hover:border-cream"
            onClick={() =>
              document
                .getElementById("story")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our Story
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#story"
        aria-label="Scroll to story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
