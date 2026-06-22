/**
 * Central theme configuration for Zamane Workshop.
 * These tokens mirror the CSS variables declared in app/globals.css (@theme).
 * Keep this file and globals.css in sync — this is the single source of truth
 * for the brand palette and typography referenced from TS/JS.
 */

export const palette = {
  /** Cognac leather — primary brand color */
  primary: "#8B5E3C",
  /** Espresso — deep accent */
  espresso: "#3E2A20",
  /** Terracotta — warm accent */
  terracotta: "#C26B4A",
  /** Ochre — highlight */
  ochre: "#D9A441",
  /** Parchment — page background */
  parchment: "#F4ECE2",
  /** Cream — surface / cards */
  cream: "#FBF6EF",
  /** Dark walnut — body text */
  text: "#2A1F18",
  /** Taupe — muted text */
  muted: "#A8927D",
} as const;

export const fonts = {
  /** Elegant serif for headings (editorial, heritage) */
  serif: "var(--font-serif)",
  /** Clean sans-serif for body copy */
  sans: "var(--font-sans)",
} as const;

export type Palette = typeof palette;
