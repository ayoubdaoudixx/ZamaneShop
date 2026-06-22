import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { ProductGrid } from "@/components/product-grid";
import { Features } from "@/components/features";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { products } from "@/lib/products";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Zamane Workshop",
  description:
    "Handcrafted Moroccan full-grain leather wallets and small leather goods, hand-stitched in Marrakech.",
  image: "/images/generated/01-bifold-cognac.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Derb el Ferrane, Medina",
    addressLocality: "Marrakech",
    postalCode: "40000",
    addressCountry: "MA",
  },
  makesOffer: products.map((p) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Product", name: p.name, description: p.description },
    price: p.priceEUR,
    priceCurrency: "EUR",
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <CartDrawer />
      <main>
        <Hero />
        <Story />
        <ProductGrid />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
