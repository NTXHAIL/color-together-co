"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#shop", label: "Shop Duos" },
  { href: "/#free-pack", label: "Free pack" },
  { href: "/#club", label: "Club" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="rounded-xl" aria-label="Color Together Co. home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-soft lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md hover:text-coral">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#free-pack"
            className="rounded-full px-4 py-2 text-sm font-semibold text-ink hover:text-teal"
          >
            Free pack
          </Link>
          {/* TODO: replace with Shopify storefront URL */}
          <Link
            href="/#shop"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_0_0_#e9444a] hover:translate-y-px"
          >
            Shop the Duo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-cloud lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink/8 bg-paper px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 font-semibold hover:bg-cloud"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#shop"
              className="mt-2 rounded-full bg-coral px-4 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Shop the Duo
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
