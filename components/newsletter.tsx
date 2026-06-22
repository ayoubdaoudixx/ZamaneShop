"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionReveal } from "@/components/section-reveal";

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // UI only — no backend. Pretend success.
    setSubmitted(true);
    setEmail("");
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="texture-paper relative bg-parchment py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Newsletter */}
          <SectionReveal>
            <div className="rounded-2xl bg-cream p-8 shadow-warm sm:p-12">
              <span className="text-xs uppercase tracking-[0.35em] text-terracotta">
                The Workshop Letter
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-espresso sm:text-4xl">
                Join us by the cutting table
              </h2>
              <p className="mt-4 text-base leading-relaxed text-walnut/75">
                New pieces, restocks, and quiet notes from the medina — sent
                rarely, never spammy. Ten percent off your first order.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="md" className="shrink-0">
                  Subscribe
                </Button>
              </form>

              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 text-sm text-cognac"
                  >
                    <Check className="h-4 w-4" />
                    Welcome to the workshop — check your inbox.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>

          {/* Contact details */}
          <SectionReveal delay={0.1}>
            <div className="lg:pl-8">
              <span className="text-xs uppercase tracking-[0.35em] text-terracotta">
                Visit / Contact
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-espresso sm:text-4xl">
                Come find us
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-walnut/75">
                Our studio door is open to visitors by appointment. We&apos;d
                love to show you the leather and the work in person.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cognac/10 text-cognac">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-espresso">The Workshop</p>
                    <p className="text-sm text-walnut/70">
                      Derb el Ferrane, Medina, Marrakech 40000, Morocco
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cognac/10 text-cognac">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-espresso">Email</p>
                    <a
                      href="mailto:hello@zamaneworkshop.com"
                      className="text-sm text-walnut/70 transition-colors hover:text-cognac"
                    >
                      hello@zamaneworkshop.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cognac/10 text-cognac">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-espresso">Phone</p>
                    <a
                      href="tel:+212500000000"
                      className="text-sm text-walnut/70 transition-colors hover:text-cognac"
                    >
                      +212 5 00 00 00 00
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
