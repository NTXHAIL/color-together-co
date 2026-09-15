import Image from "next/image";
import { bundle } from "@/lib/products";
import { ButtonLink } from "./ButtonLink";

export function BundleCard() {
  if (!bundle) return null;

  return (
    <section className="bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid overflow-hidden rounded-[2rem] bg-ink text-paper shadow-[var(--shadow-lift)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sunshine">{bundle.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">{bundle.name}</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">{bundle.blurb}</p>
            <div className="mt-8">
              {/* TODO: replace with Shopify bundle URL */}
              <ButtonLink href={bundle.href} variant="sunshine">
                Shop the bundle
              </ButtonLink>
            </div>
          </div>
          <div className="grid grid-rows-2">
            {bundle.kidImage ? (
              <Image
                src={bundle.kidImage}
                alt="Frenchie Family Night Kid Edition cover"
                width={1280}
                height={720}
                className="h-full w-full object-cover"
              />
            ) : null}
            {bundle.adultImage ? (
              <Image
                src={bundle.adultImage}
                alt="Jets and Joyrides Kid Edition cover"
                width={1280}
                height={720}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
