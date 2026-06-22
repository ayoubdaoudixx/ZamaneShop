"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const {
    lines,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotalMAD,
    subtotalEUR,
    count,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            aria-hidden="true"
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-parchment shadow-warm-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <header className="flex items-center justify-between border-b border-cognac/15 px-6 py-5">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="h-5 w-5 text-cognac" aria-hidden="true" />
                <h2 className="font-serif text-xl text-espresso">
                  Your Bag{count > 0 ? ` (${count})` : ""}
                </h2>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-full p-2 text-taupe transition-colors hover:bg-cognac/10 hover:text-espresso"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag className="h-12 w-12 text-taupe/50" aria-hidden="true" />
                <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
                <p className="max-w-xs text-sm text-taupe">
                  Pieces you add will rest here, waiting to be carried everywhere.
                </p>
                <Button variant="outline" onClick={closeCart} className="mt-2">
                  Continue browsing
                </Button>
              </div>
            ) : (
              <>
                <ul className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
                  {lines.map((line) => (
                    <li key={line.product.id} className="flex gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-cream shadow-warm-sm">
                        <Image
                          src={line.product.image}
                          alt={line.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-lg leading-tight text-espresso">
                            {line.product.name}
                          </h3>
                          <button
                            onClick={() => removeItem(line.product.id)}
                            aria-label={`Remove ${line.product.name}`}
                            className="rounded-full p-1.5 text-taupe transition-colors hover:bg-terracotta/10 hover:text-terracotta"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-taupe">{line.product.material}</p>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 rounded-full border border-cognac/20 bg-cream px-1.5 py-1">
                            <button
                              onClick={() =>
                                updateQuantity(line.product.id, line.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="rounded-full p-1 text-espresso transition-colors hover:bg-cognac/10"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm tabular-nums text-espresso">
                              {line.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(line.product.id, line.quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="rounded-full p-1 text-espresso transition-colors hover:bg-cognac/10"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-cognac">
                            {line.product.priceMAD * line.quantity} MAD
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <footer className="border-t border-cognac/15 px-6 py-6">
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-sm text-taupe">Subtotal</span>
                    <span className="font-serif text-2xl text-espresso">
                      {subtotalMAD} MAD
                    </span>
                  </div>
                  <p className="mb-4 text-right text-xs text-taupe">
                    ≈ €{subtotalEUR} · taxes & shipping at checkout
                  </p>
                  <Button size="lg" className="w-full">
                    Checkout
                  </Button>
                  <p className="mt-3 text-center text-xs text-taupe">
                    Free shipping worldwide on orders over 1000 MAD
                  </p>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
