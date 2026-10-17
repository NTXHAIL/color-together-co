/**
 * GitHub Pages project sites live under /<repo>.
 * Custom domains should set NEXT_PUBLIC_BASE_PATH to empty and
 * NEXT_PUBLIC_SITE_URL to the canonical origin.
 */
export function getBasePath(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "/") return "";
  return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  const basePath = getBasePath();
  return basePath
    ? `https://ntxhail.github.io${basePath}`
    : "https://ntxhail.github.io/color-together-co";
}
