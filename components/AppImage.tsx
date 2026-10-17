import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/paths";

/**
 * next/image with `unoptimized` does not prefix `src` with `basePath` in the
 * static HTML export. Prefix public assets ourselves so GitHub Pages works.
 */
export function AppImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBasePath(src) : src;
  return <Image src={resolved} {...props} />;
}
