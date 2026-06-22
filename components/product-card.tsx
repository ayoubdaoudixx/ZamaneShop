"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import * as React from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart-context";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = React.useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-warm-sm transition-shadow duration-500 hover:shadow-warm-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease }}
        >
          <Image
            src={product.image}
            alt={`${product.name} — ${product.material} leather`}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 33vw, (max-width: 1280px) 30vw, 22vw"
            className="object-cover"
          />
        </motion.div>
        <span className="absolute left-3 top-3 rounded-full bg-parchment/85 px-2.5 py-1 text-[0.6rem] uppercase tracking-wider text-espresso backdrop-blur-sm">
          {product.material}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">
          {product.tagline}
        </p>
        <h3 className="mt-1.5 font-serif text-lg leading-tight text-espresso">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-[0.8rem] leading-relaxed text-walnut/70">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-2">
          <div className="leading-none">
            <span className="font-serif text-lg text-cognac">
              {product.priceMAD} MAD
            </span>
            <span className="ml-1.5 text-xs text-taupe">€{product.priceEUR}</span>
          </div>

          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[0.8rem] font-medium text-cream shadow-warm-sm transition-all duration-300 active:scale-95 ${
              added ? "bg-cognac" : "bg-terracotta hover:bg-cognac"
            }`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
