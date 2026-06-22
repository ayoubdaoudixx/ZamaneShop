"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/* ------------------------------------------------------------------ *
 * Product config — the single source of truth for this section.
 * Wired to the real transparent PNGs in /public/images/products/.
 * `angle` is the resting position on the outer ring once exploded, in
 * degrees (0° = right, sweeping clockwise). Evenly spaced (72° apart),
 * offset so the top of the ring stays clear of the eyebrow label.
 * ------------------------------------------------------------------ */
type RingProduct = {
  image: string;
  label: string;
  angle: number;
};

const PRODUCTS: RingProduct[] = [
  { image: "/images/products/belgha.png", label: "Babouche", angle: -126 },
  { image: "/images/products/sandales.png", label: "Sandals", angle: -54 },
  { image: "/images/products/bracelet.png", label: "Bracelet", angle: 18 },
  { image: "/images/products/Port-Cles.png", label: "Key Holder", angle: 90 },
  {
    image: "/images/products/customized-design.png",
    label: "Custom Design",
    angle: 162,
  },
];

/* Easing that mirrors the rest of the site (hero, story, cards). */
const EASE = [0.22, 1, 0.36, 1] as const;

/* Layout per breakpoint. The ring is elliptical (wider than tall) so
   every product stays on-screen vertically while the disc has room to
   breathe horizontally. */
type Layout = {
  radiusX: number;
  radiusY: number;
  disc: number;
  item: number;
};

const LAYOUTS: Record<"mobile" | "tablet" | "desktop", Layout> = {
  mobile: { radiusX: 118, radiusY: 232, disc: 150, item: 96 },
  tablet: { radiusX: 270, radiusY: 252, disc: 252, item: 140 },
  desktop: { radiusX: 392, radiusY: 286, disc: 304, item: 168 },
};

function useLayout(): Layout {
  const [layout, setLayout] = React.useState<Layout>(LAYOUTS.desktop);

  React.useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)");
    const tablet = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");

    const update = () => {
      if (mobile.matches) setLayout(LAYOUTS.mobile);
      else if (tablet.matches) setLayout(LAYOUTS.tablet);
      else setLayout(LAYOUTS.desktop);
    };

    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return layout;
}

export function WeOfferSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const layout = useLayout();
  const prefersReduced = useReducedMotion();

  // 0 → 1 across the full height of the tall scroll container.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Headline "WE OFFER" is revealed behind the cluster as the products
  // explode outward and clear the centre.
  const headlineOpacity = useTransform(scrollYProgress, [0.22, 0.56], [0, 1]);
  const headlineScale = useTransform(scrollYProgress, [0.22, 0.85], [0.82, 1]);
  const headlineBlur = useTransform(
    scrollYProgress,
    [0.22, 0.56],
    ["10px", "0px"]
  );

  // The disc shrinks as the products explode outward.
  const discScale = useTransform(scrollYProgress, [0.15, 0.62], [1, 0.58]);

  return (
    <section
      ref={sectionRef}
      aria-label="What we offer"
      className="relative h-[200vh] w-full overflow-clip bg-gradient-to-b from-cream to-parchment"
    >
      <div className="texture-paper sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Eyebrow — a quiet anchor for the section. */}
        <motion.span
          className="absolute top-[7vh] left-1/2 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.4em] text-terracotta sm:text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          The Workshop
        </motion.span>

        {/* Headline revealing BEHIND the disc and products — dark brown. */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <motion.h2
            style={
              prefersReduced
                ? undefined
                : {
                    opacity: headlineOpacity,
                    scale: headlineScale,
                    filter: headlineBlur,
                  }
            }
            className="select-none whitespace-nowrap font-serif text-[19vw] font-bold leading-none tracking-[0.06em] text-espresso sm:text-[16vw] lg:text-[13rem]"
          >
            WE OFFER
          </motion.h2>
        </div>

        {/* The central tactile disc — shrinks as products explode. */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <motion.div style={prefersReduced ? { scale: 0.58 } : { scale: discScale }}>
            <Disc size={layout.disc} />
          </motion.div>
        </div>

        {/* The products: gathered on the disc → exploding to the ring. */}
        <div className="absolute inset-0 z-20">
          {PRODUCTS.map((product, i) => (
            <RingItem
              key={product.image}
              product={product}
              index={i}
              total={PRODUCTS.length}
              layout={layout}
              progress={scrollYProgress}
              reduced={Boolean(prefersReduced)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Central disc — deep espresso with a soft warm radial gradient, a
 * faint leather-grain texture and a tactile inner shadow. Never black.
 * ------------------------------------------------------------------ */
function Disc({ size }: { size: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative rounded-full"
    >
      {/* Soft ambient halo so the disc sits in the parchment, not on it. */}
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(62,42,32,0.16),transparent_70%)]" />

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 38% 30%, #5c4131 0%, #422c21 52%, #2c1d14 100%)",
          boxShadow:
            "inset 0 10px 34px rgba(20,12,7,0.55), inset 0 -10px 26px rgba(217,164,65,0.07), 0 28px 64px -20px rgba(62,42,32,0.55)",
        }}
      >
        {/* Faint leather grain on the surface. */}
        <div className="texture-grain absolute inset-0 rounded-full opacity-40 mix-blend-overlay" />
        {/* Warm rim light. */}
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-ochre/10" />
        {/* Gentle top highlight to read as a curved surface. */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_42%_24%,rgba(251,246,239,0.12),transparent_45%)]" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * A single product: starts gathered tightly on the disc, then explodes
 * outward to its place on the ring as scroll progresses. Movement is
 * scroll-scrubbed and staggered per index so the burst feels organic.
 * ------------------------------------------------------------------ */
function RingItem({
  product,
  index,
  total,
  layout,
  progress,
  reduced,
}: {
  product: RingProduct;
  index: number;
  total: number;
  layout: Layout;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const rad = (product.angle * Math.PI) / 180;

  // Final position on the outer (elliptical) ring after the explosion.
  const ringX = Math.cos(rad) * layout.radiusX;
  const ringY = Math.sin(rad) * layout.radiusY;

  // Initial gathered position: a tight, slightly fanned cluster on the
  // disc so the pieces overlap into a composite before bursting apart.
  const clusterR = layout.disc * 0.12;
  const clusterX = Math.cos(rad) * clusterR;
  const clusterY = Math.sin(rad) * clusterR;

  // Per-item stagger keeps the burst from firing as one block.
  const start = 0.15 + index * 0.04;
  const end = Math.min(0.62 + index * 0.04, 0.92);
  const tilt = (index % 2 === 0 ? 1 : -1) * (5 + index);

  // Hooks must run unconditionally; outputs are ignored when reduced.
  const x = useTransform(progress, [start, end], [clusterX, ringX]);
  const y = useTransform(progress, [start, end], [clusterY, ringY]);
  const scale = useTransform(progress, [0.15, 0.62], [0.52, 1]);
  const rotate = useTransform(progress, [0.15, 0.62], [tilt, 0]);
  const labelOpacity = useTransform(progress, [0.66, 0.82], [0, 1]);

  if (reduced) {
    // Final exploded, static state — products on the ring, labels shown.
    return (
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="flex flex-col items-center"
          style={{ transform: `translate(${ringX}px, ${ringY}px)` }}
        >
          <ProductImage product={product} size={layout.item} />
          <span className="mt-3 whitespace-nowrap font-serif text-xs italic tracking-wide text-taupe sm:text-sm">
            {product.label}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div
        style={{ x, y, scale, rotate, zIndex: total - index }}
        className="flex flex-col items-center"
      >
        {/* Gentle idle float. */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.5 + index * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ProductImage product={product} size={layout.item} />
        </motion.div>

        {/* Label fades in once the piece has reached the ring. */}
        <motion.span
          style={{ opacity: labelOpacity }}
          className="mt-3 whitespace-nowrap font-serif text-xs italic tracking-wide text-taupe sm:text-sm"
        >
          {product.label}
        </motion.span>
      </motion.div>
    </div>
  );
}

function ProductImage({
  product,
  size,
}: {
  product: RingProduct;
  size: number;
}) {
  return (
    <Image
      src={product.image}
      alt={product.label}
      width={size}
      height={size}
      draggable={false}
      sizes={`${size}px`}
      className="h-auto w-auto select-none object-contain drop-shadow-[0_14px_30px_rgba(62,42,32,0.34)]"
      style={{ width: size, height: size }}
    />
  );
}
