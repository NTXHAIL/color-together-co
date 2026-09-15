import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { featuredDuos } from "@/lib/products";
import { CastleArt } from "./CastleArt";

function DuoArt({ product }: { product: Product }) {
  if (product.kidImage && product.adultImage) {
    return (
      <div className="relative h-56 overflow-hidden bg-[#FFF1E8] sm:h-60">
        <div className="absolute left-3 top-5 w-[62%] overflow-hidden rounded-2xl bg-paper shadow-lg ring-2 ring-sunshine">
          <Image
            src={product.kidImage}
            alt={`${product.name} Kid Edition cover`}
            width={640}
            height={360}
            className="h-auto w-full"
          />
        </div>
        <div className="absolute bottom-4 right-3 w-[62%] overflow-hidden rounded-2xl bg-paper shadow-lg ring-2 ring-teal">
          <Image
            src={product.adultImage}
            alt={`${product.name} Adult Edition cover`}
            width={640}
            height={360}
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  }

  if (product.kidImage) {
    return (
      <Image
        src={product.kidImage}
        alt={`${product.name} Kid Edition cover`}
        width={1280}
        height={720}
        className="h-auto w-full"
      />
    );
  }

  return <CastleArt />;
}

export function FeaturedDuos() {
  return (
    <section id="shop" className="bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">Featured Creator Duos</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Same theme. Twin editions.
            </h2>
          </div>
          <p className="max-w-md text-ink-soft">
            Every Duo is a Kid Edition plus Adult Edition of one story. Pick a night, print both, sit down together.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredDuos.map((product) => (
            <article
              key={product.slug}
              className="flex flex-col overflow-hidden rounded-[1.7rem] bg-paper shadow-[var(--shadow-card)] ring-2 ring-ink/8"
            >
              <div className="relative bg-mist">
                <DuoArt product={product} />
                {product.status === "coming-soon" ? (
                  <span className="absolute left-4 top-4 rounded-full bg-sunshine px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                    Coming soon
                  </span>
                ) : (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Kid + Adult
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">{product.eyebrow}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{product.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{product.blurb}</p>
                <Link
                  href={product.href}
                  className="mt-5 inline-flex items-center font-semibold text-teal hover:text-teal-deep"
                >
                  {product.status === "coming-soon" ? "Get notified" : "See the Duo"}
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
