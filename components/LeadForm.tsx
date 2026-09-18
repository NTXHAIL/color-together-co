"use client";

import { FormEvent, useState } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect to email provider or Shopify customer capture
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-[1.4rem] bg-paper px-6 py-8 text-center ring-2 ring-teal/30"
        role="status"
      >
        <p className="font-display text-2xl font-semibold text-ink">You&apos;re on the list.</p>
        <p className="mt-2 text-ink-soft">
          We saved <span className="font-semibold text-ink">{email}</span>. The Frenchie
          Family Night sample pack will land when the mailbox is live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block sm:col-span-1">
        <span className="mb-1.5 block text-sm font-semibold">First name</span>
        <input
          required
          name="name"
          autoComplete="given-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink shadow-inner outline-none placeholder:text-ink/35 focus:border-teal"
          placeholder="Sam"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-1.5 block text-sm font-semibold">Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink shadow-inner outline-none placeholder:text-ink/35 focus:border-teal"
          placeholder="you@familymail.com"
        />
      </label>
      <button
        type="submit"
        className="sm:col-span-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white shadow-[0_8px_0_0_#000] transition hover:translate-y-0.5 hover:shadow-[0_6px_0_0_#000]"
      >
        Send me the free pack
      </button>
      <p className="sm:col-span-2 text-center text-xs text-ink-soft">
        No spam, no baby-talk newsletters. Just pages you can print tonight.
      </p>
    </form>
  );
}
