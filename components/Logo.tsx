type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className = "", markClassName = "h-9 w-9" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className={markClassName}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="12" fill="#FF5A5F" />
        <path
          d="M12 26c4-9 12-9 16 0"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="16.5" cy="16" r="2.1" fill="#FFC83D" />
        <circle cx="23.5" cy="16" r="2.1" fill="#FFFFFF" />
        <path
          d="M20 10.5c.2 1.8-1.4 2.6-1.4 4.2 0 1.2 1 2 2.1 2s2.1-.8 2.1-2c0-1.6-1.6-2.4-1.4-4.2"
          fill="#FFFFFF"
        />
      </svg>
      <span className="font-display text-[1.15rem] font-semibold leading-none tracking-tight text-ink sm:text-xl">
        Color Together Co.
      </span>
    </span>
  );
}
