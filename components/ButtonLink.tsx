import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "coral" | "teal" | "ink" | "ghost" | "sunshine";

const variants: Record<Variant, string> = {
  coral:
    "bg-coral text-white shadow-[0_8px_0_0_#e9444a] hover:translate-y-0.5 hover:shadow-[0_6px_0_0_#e9444a] active:translate-y-1 active:shadow-[0_2px_0_0_#e9444a]",
  teal: "bg-teal text-white shadow-[0_8px_0_0_#009494] hover:translate-y-0.5 hover:shadow-[0_6px_0_0_#009494] active:translate-y-1 active:shadow-[0_2px_0_0_#009494]",
  ink: "bg-ink text-white shadow-[0_8px_0_0_#000000] hover:translate-y-0.5 hover:shadow-[0_6px_0_0_#000000] active:translate-y-1 active:shadow-[0_2px_0_0_#000000]",
  sunshine:
    "bg-sunshine text-ink shadow-[0_8px_0_0_#f0b31a] hover:translate-y-0.5 hover:shadow-[0_6px_0_0_#f0b31a] active:translate-y-1 active:shadow-[0_2px_0_0_#f0b31a]",
  ghost:
    "bg-paper text-ink ring-2 ring-ink/15 shadow-[0_8px_0_0_#ecece8] hover:ring-ink/30 hover:translate-y-0.5 hover:shadow-[0_6px_0_0_#ecece8] active:translate-y-1 active:shadow-[0_2px_0_0_#ecece8]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "coral",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-center text-base font-semibold tracking-tight transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
