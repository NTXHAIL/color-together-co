type LogoProps = {
  className?: string;
  markClassName?: string;
  inverted?: boolean;
};

export function Logo({
  className = "",
  markClassName = "h-9 w-9",
  inverted = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className={markClassName}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="12" fill="#FF5A5F" />
        <path d="M11 28l4-16h5l-4 16h-5z" fill="#FFC83D" />
        <path d="M20 28l4-16h5l-4 16h-5z" fill="#FFFFFF" />
        <circle cx="30.5" cy="11.5" r="3" fill="#00B3B3" />
      </svg>
      <span
        className={`font-display text-[1.15rem] font-semibold leading-none tracking-tight sm:text-xl ${inverted ? "text-paper" : "text-ink"}`}
      >
        Color Together Co.
      </span>
    </span>
  );
}
