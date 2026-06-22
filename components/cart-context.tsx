"use client";

import * as React from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  /** Total number of items (sum of quantities) */
  count: number;
  /** Subtotal in MAD */
  subtotalMAD: number;
  /** Subtotal in EUR */
  subtotalEUR: number;
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = React.createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const addItem = React.useCallback((product: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id
            ? { ...l, quantity: l.quantity + 1 }
            : l
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = React.useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== productId));
  }, []);

  const updateQuantity = React.useCallback(
    (productId: string, quantity: number) => {
      setLines((prev) =>
        quantity <= 0
          ? prev.filter((l) => l.product.id !== productId)
          : prev.map((l) =>
              l.product.id === productId ? { ...l, quantity } : l
            )
      );
    },
    []
  );

  const openCart = React.useCallback(() => setIsOpen(true), []);
  const closeCart = React.useCallback(() => setIsOpen(false), []);

  const { count, subtotalMAD, subtotalEUR } = React.useMemo(() => {
    return lines.reduce(
      (acc, l) => ({
        count: acc.count + l.quantity,
        subtotalMAD: acc.subtotalMAD + l.product.priceMAD * l.quantity,
        subtotalEUR: acc.subtotalEUR + l.product.priceEUR * l.quantity,
      }),
      { count: 0, subtotalMAD: 0, subtotalEUR: 0 }
    );
  }, [lines]);

  const value: CartContextValue = {
    lines,
    count,
    subtotalMAD,
    subtotalEUR,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
