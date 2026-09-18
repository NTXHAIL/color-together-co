import { ButtonLink } from "./ButtonLink";

export function ClubTeaser() {
  return (
    <section id="club" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-teal px-6 py-12 text-white sm:px-12">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sunshine/40" aria-hidden="true" />
          <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-coral/50" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunshine">Coming soon</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Color Together Co. Club
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              A Facebook subscription group for families who keep showing up to the table.
              New pages, Color Night prompts, and a place to share the finished Frenchies
              — without turning it into a highlight reel.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* TODO: replace with Facebook Color Together Co. Club URL */}
              <ButtonLink href="/#free-pack" variant="sunshine">
                Join the waitlist
              </ButtonLink>
              <p className="self-center text-sm text-white/80">Facebook Subscription Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
