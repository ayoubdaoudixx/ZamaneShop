import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerNav = [
  {
    title: "Shop",
    links: [
      { label: "The Collection", href: "#collection" },
      { label: "Wallets", href: "#collection" },
      { label: "Card Holders", href: "#collection" },
      { label: "Gift Cards", href: "#contact" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "Our Craft", href: "#story" },
      { label: "Why Zamane", href: "#features" },
      { label: "Sustainability", href: "#features" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Leather Care", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Warranty", href: "#" },
    ],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-walnut text-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-cream/20">
                <Image
                  src="/assets/zamane.jpg"
                  alt="Zamane Workshop"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-2xl text-cream">Zamane</span>
                <span className="text-[0.62rem] uppercase tracking-[0.32em] text-cream/50">
                  Leather Workshop
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
              Handcrafted full-grain leather goods, made slowly in the Marrakech
              medina. Carried everywhere.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-cognac hover:text-cream"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="font-serif text-lg text-cream">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-cream/55 transition-colors hover:text-ochre"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} Zamane Workshop. All rights reserved.
          </p>
          <p className="text-xs text-cream/45">
            Made by hand in Marrakech, Morocco.
          </p>
        </div>
      </div>
    </footer>
  );
}
