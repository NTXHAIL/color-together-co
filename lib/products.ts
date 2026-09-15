export type ProductStatus = "available" | "coming-soon";

export type Product = {
  slug: string;
  name: string;
  kind: "duo" | "bundle";
  eyebrow: string;
  blurb: string;
  status: ProductStatus;
  kidImage?: string;
  adultImage?: string;
  lifestyleImage?: string;
  accent: "coral" | "teal" | "sunshine";
  href: string;
};

export const products: Product[] = [
  {
    slug: "frenchie-family-night",
    name: "Frenchie Family Night",
    kind: "duo",
    eyebrow: "Hero Creator Duo",
    blurb:
      "A crowned couch Frenchie rules Color Night. Bold Kid Edition, richer Adult Edition — same throne, two ways in.",
    status: "available",
    kidImage: "/images/frenchie-kid-edition.jpg",
    adultImage: "/images/frenchie-adult-edition.jpg",
    lifestyleImage: "/images/frenchie-walk-squad.jpg",
    accent: "coral",
    href: "/frenchie",
  },
  {
    slug: "jets-joyrides",
    name: "Jets & Joyrides",
    kind: "duo",
    eyebrow: "Creator Duo",
    blurb:
      "High-fives on the runway. Kid Edition is ready to print tonight — Adult Edition shares the same sky.",
    status: "available",
    kidImage: "/images/jets-kid-edition.jpg",
    accent: "teal",
    // TODO: replace with Shopify product URL
    href: "/#shop",
  },
  {
    slug: "castle-at-sunset",
    name: "Castle at Sunset",
    kind: "duo",
    eyebrow: "Creator Duo",
    blurb:
      "Turrets, glow, and a sky you both get to color. A twilight theme built for the same table.",
    status: "coming-soon",
    accent: "sunshine",
    href: "/#free-pack",
  },
  {
    slug: "pets-speed-bundle",
    name: "Pets + Speed Bundle",
    kind: "bundle",
    eyebrow: "Two Color Nights",
    blurb:
      "Frenchie Family Night plus Jets & Joyrides. Pets on the couch, planes on the runway — one cart, two nights in.",
    status: "available",
    kidImage: "/images/frenchie-kid-edition.jpg",
    adultImage: "/images/jets-kid-edition.jpg",
    accent: "coral",
    // TODO: replace with Shopify bundle URL
    href: "/#shop",
  },
];

export const featuredDuos = products.filter((p) => p.kind === "duo");
export const bundle = products.find((p) => p.slug === "pets-speed-bundle");
export const frenchie = products.find((p) => p.slug === "frenchie-family-night")!;
