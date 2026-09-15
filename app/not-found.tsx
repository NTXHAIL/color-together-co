import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">That page wandered off the couch.</h1>
      <p className="mt-4 text-ink-soft">Head back to the table — the Frenchie is still on the throne.</p>
      <div className="mt-8">
        <ButtonLink href="/" variant="coral">
          Back home
        </ButtonLink>
      </div>
    </main>
  );
}
