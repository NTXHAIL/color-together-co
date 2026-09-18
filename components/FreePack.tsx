import Image from "next/image";
import { LeadForm } from "./LeadForm";

export function FreePack() {
  return (
    <section id="free-pack" className="bg-sunshine">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:py-20">
        <div className="overflow-hidden rounded-[1.8rem] bg-paper shadow-[var(--shadow-lift)]">
          <Image
            src="/images/frenchie-kid-edition.jpg"
            alt="Frenchie Family Night Kid Edition sample cover"
            width={1280}
            height={720}
            className="h-auto w-full"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink">Free Color Night pack</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Try Frenchie Family Night before you buy the Duo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            A short sample from the Kid Edition and Adult Edition — enough to test the
            printers, the markers, and the mood at the table.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
