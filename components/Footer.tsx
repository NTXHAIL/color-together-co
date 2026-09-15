import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="inline-flex [&_span]:text-paper">
            <Logo />
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            Printable Creator Duo twin packs for families who want the same theme at two
            ages. {site.promise} {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Visit</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              {/* TODO: replace with Shopify storefront URL */}
              <Link href="/#shop" className="hover:text-sunshine">
                Shop
              </Link>
            </li>
            <li>
              {/* TODO: replace with Facebook Color Together Co. Club URL */}
              <Link href="/#club" className="hover:text-sunshine">
                Club
              </Link>
            </li>
            <li>
              <Link href="/#free-pack" className="hover:text-sunshine">
                Free Color Night pack
              </Link>
            </li>
            <li>
              <Link href="/frenchie" className="hover:text-sunshine">
                Frenchie Family Night
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Say hello</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`mailto:${site.contactEmail}`} className="hover:text-sunshine">
                Contact
              </a>
            </li>
            <li>
              <span>Dallas-Fort Worth, TX</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} {site.name}. Printable coloring for the same table.
        </p>
      </div>
    </footer>
  );
}
