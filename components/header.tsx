"use client";

import Image from "next/image";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart-context";

const navLinks = [
  { label: "The Craft", href: "#story" },
  { label: "Collection", href: "#collection" },
  { label: "Why Zamane", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/85 shadow-warm-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Zamane Workshop home">
          <span
            className={`relative h-11 w-11 overflow-hidden rounded-full ring-1 transition-all duration-500 ${
              scrolled ? "ring-cognac/30" : "ring-cream/40"
            }`}
          >
            <Image
              src="/assets/zamane.jpg"
              alt="Zamane Workshop"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl tracking-wide transition-colors duration-500 ${
                scrolled ? "text-espresso" : "text-cream"
              }`}
            >
              Zamane
            </span>
            <span
              className={`text-[0.62rem] uppercase tracking-[0.32em] transition-colors duration-500 ${
                scrolled ? "text-taupe" : "text-cream/70"
              }`}
            >
              Workshop
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm tracking-wide transition-colors duration-300 ${
                scrolled ? "text-walnut/80 hover:text-cognac" : "text-cream/90 hover:text-cream"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={openCart}
          aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
          className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
            scrolled
              ? "text-espresso hover:bg-cognac/10"
              : "text-cream hover:bg-cream/15"
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[0.65rem] font-semibold text-cream tabular-nums"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.header>
  );
}
