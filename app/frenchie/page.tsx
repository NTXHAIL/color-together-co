import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { frenchie } from "@/lib/products";

export const metadata: Metadata = {
  title: "Frenchie Family Night Creator Duo",
  description: frenchie.blurb,
};

export default function FrenchiePage() {
  return (
    <main id="main" className="bg-[#FFF6EE]">
      <div className="h-2 w-full bg-[linear-gradient(90deg,#FF5A5F_0%,#FFC83D_50%,#00B3B3_100%)]" aria-hidden="true" />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">{frenchie.eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          {frenchie.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">{frenchie.blurb}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {/* TODO: replace with Shopify product URL */}
          <ButtonLink href="/#shop" variant="coral">
            Shop the Duo
          </ButtonLink>
          <ButtonLink href="/#free-pack" variant="ghost">
            Get the free sample pack
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-[1.6rem] bg-paper shadow-[var(--shadow-card)]">
            <Image
              src="/images/frenchie-kid-edition.jpg"
              alt="Frenchie Family Night Kid Edition Couch Throne cover"
              width={1280}
              height={720}
              priority
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-sm font-semibold">Kid Edition — Couch Throne</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[1.6rem] bg-paper shadow-[var(--shadow-card)]">
            <Image
              src="/images/frenchie-adult-edition.jpg"
              alt="Frenchie Family Night Adult Edition Couch Throne cover"
              width={1280}
              height={720}
              priority
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-sm font-semibold">Adult Edition — Couch Throne</figcaption>
          </figure>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.6rem] bg-paper p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-3xl font-semibold">What&apos;s in the Duo</h2>
            <ul className="mt-5 space-y-3 text-ink-soft">
              <li>Kid Edition pages with big shapes, friendly linework, and room to go wild with color.</li>
              <li>Adult Edition pages of the same scenes — more texture, still playful, never spa-muted.</li>
              <li>Printable PDFs sized for a home printer. Color tonight.</li>
            </ul>
          </div>
          <figure className="overflow-hidden rounded-[1.6rem] bg-paper shadow-[var(--shadow-card)]">
            <Image
              src="/images/frenchie-walk-squad.jpg"
              alt="Walk Squad lifestyle concept for Frenchie Family Night"
              width={1280}
              height={720}
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-sm text-ink-soft">Walk Squad — same Frenchie, extra energy</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
