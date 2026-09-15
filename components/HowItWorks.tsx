const steps = [
  {
    n: "01",
    title: "Download",
    body: "Grab the Creator Duo as printable PDFs — Kid Edition and Adult Edition of the same theme, ready the same night.",
    accent: "bg-coral",
  },
  {
    n: "02",
    title: "Print",
    body: "Home printer or the shop down the street. Letter-size pages, bold linework, no special paper required.",
    accent: "bg-sunshine",
  },
  {
    n: "03",
    title: "Color together",
    body: "Same scene. Two ages. One table. Talk about the cape, the jet, the sky — while you each work at your own pace.",
    accent: "bg-teal",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">How it works</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            From checkout to crayons in three moves
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-[1.6rem] border border-ink/8 bg-cloud p-6 shadow-[var(--shadow-card)]"
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${step.accent} font-display text-sm font-bold text-ink ${step.accent === "bg-coral" || step.accent === "bg-teal" ? "text-white" : ""}`}
              >
                {step.n}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
