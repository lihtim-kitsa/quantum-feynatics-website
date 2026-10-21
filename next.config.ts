import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // The preserved Vite pages are JSX; only TypeScript files are Next.js routes.
  pageExtensions: ["tsx", "ts"],
  turbopack: { root: fileURLToPath(new URL(".", import.meta.url)) },
  output: process.env.NEXT_STATIC_EXPORT === "true" ? "export" : undefined,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
};

export default nextConfig;
