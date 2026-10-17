import type { NextConfig } from "next";
import { getBasePath } from "./lib/paths";

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  agentRules: false,
  // Set NEXT_PUBLIC_BASE_PATH=/color-together-co for GitHub Pages.
  // Leave it unset (or empty) for a custom domain at the site root.
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
