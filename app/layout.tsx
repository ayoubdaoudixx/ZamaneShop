import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://zamaneworkshop.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zamane Workshop — Handcrafted Moroccan Leather Goods",
    template: "%s · Zamane Workshop",
  },
  description:
    "Premium full-grain leather wallets and small goods, hand-stitched in Marrakech. Slow-made, ethically crafted, built to age beautifully.",
  keywords: [
    "Moroccan leather",
    "handcrafted wallet",
    "full-grain leather",
    "hand-stitched wallet",
    "Marrakech leather goods",
    "Zamane Workshop",
  ],
  authors: [{ name: "Zamane Workshop" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Zamane Workshop",
    title: "Zamane Workshop — Handcrafted Moroccan Leather Goods",
    description:
      "Premium full-grain leather wallets, hand-stitched in Marrakech. Carried everywhere.",
    images: [
      {
        url: "/images/generated/01-bifold-cognac.png",
        width: 1200,
        height: 1600,
        alt: "Cognac full-grain leather bifold wallet by Zamane Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zamane Workshop — Handcrafted Moroccan Leather Goods",
    description:
      "Premium full-grain leather wallets, hand-stitched in Marrakech.",
    images: ["/images/generated/01-bifold-cognac.png"],
  },
  icons: {
    icon: "/assets/zamane.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4ECE2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
