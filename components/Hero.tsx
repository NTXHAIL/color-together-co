import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden dot-field">
      <div
        className="h-2 w-full bg-[linear-gradient(90deg,#FF5A5F_0%,#FFC83D_50%,#00B3B3_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-teal ring-2 ring-teal/30">
            Creator Duo twin packs
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-5 font-display text-2xl font-semibold text-coral sm:text-3xl">
            {site.promise}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Kid Edition and Adult Edition of the same theme, printed for the same
            night. Parent and kid color the same scene — nobody has to fake the
            difficulty, and nobody gets left out.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* TODO: replace with Shopify storefront URL */}
            <ButtonLink href="/#shop" variant="coral">
              Shop the Duo
            </ButtonLink>
            <ButtonLink href="/#free-pack" variant="ghost">
              Get the free Color Night pack
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm font-medium text-ink-soft">
            Instant printable PDFs · Family table, two skill levels
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative min-h-[22rem] sm:min-h-[26rem]">
            <div className="animate-float absolute left-0 top-2 w-[72%] overflow-hidden rounded-[1.6rem] bg-paper shadow-[var(--shadow-lift)] ring-4 ring-sunshine">
              <Image
                src="/images/frenchie-kid-edition.jpg"
                alt="Frenchie Family Night Kid Edition cover: a cartoon French bulldog in a crown and cape sitting on a couch"
                width={1280}
                height={720}
                priority
                className="h-auto w-full"
              />
              <p className="bg-sunshine px-3 py-1.5 text-center text-xs font-bold uppercase tracking-wide text-ink">
                Kid Edition
              </p>
            </div>
            <div className="animate-float-alt absolute bottom-0 right-0 w-[72%] overflow-hidden rounded-[1.6rem] bg-paper shadow-[var(--shadow-lift)] ring-4 ring-teal">
              <Image
                src="/images/frenchie-adult-edition.jpg"
                alt="Frenchie Family Night Adult Edition cover: a detailed French bulldog in a cape on a living-room sofa"
                width={1280}
                height={720}
                priority
                className="h-auto w-full"
              />
              <p className="bg-teal px-3 py-1.5 text-center text-xs font-bold uppercase tracking-wide text-white">
                Adult Edition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
