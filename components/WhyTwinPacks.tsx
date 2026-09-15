import Image from "next/image";

const benefits = [
  {
    title: "Conversation built in",
    body: "You are coloring the same Frenchie, the same jet, the same sunset. The table has something to talk about besides “how was school.”",
    color: "bg-coral text-white",
  },
  {
    title: "The right amount of challenge",
    body: "Kid pages stay bold and friendly. Adult pages add detail without going spa-quiet or puzzle-cruel.",
    color: "bg-sunshine text-ink",
  },
  {
    title: "A ritual, not a babysitter",
    body: "Twenty minutes, markers out, phones face-down. Color Night is the plan — not a consolation prize.",
    color: "bg-teal text-white",
  },
];

export function WhyTwinPacks() {
  return (
    <section id="why" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sunshine-deep">Why twin packs</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for a parent and a kid who actually want to sit down together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Most coloring books pick a side. Ours don&apos;t. A Creator Duo is one theme,
            written twice — so the grown-up isn&apos;t stuck on a toddler page, and the kid
            isn&apos;t abandoned to the other end of the couch.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((item) => (
              <li key={item.title} className={`rounded-2xl px-5 py-4 ${item.color}`}>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed opacity-95">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[1.8rem] bg-cloud shadow-[var(--shadow-lift)] ring-4 ring-sunshine/40">
            <Image
              src="/images/frenchie-walk-squad.jpg"
              alt="Walk Squad Frenchie concept: a smiling French bulldog on a heart-print leash next to colorful sneakers"
              width={1280}
              height={720}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-ink-soft">
            Same crew. Same night. Different pages.
          </p>
        </div>
      </div>
    </section>
  );
}
