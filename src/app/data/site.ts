export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function asset(filename: string): string {
  return `${basePath}/quantumverse/images/${filename}`;
}

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
    "https://ieee-sb-bits-hyd.github.io/quantum-feynatics")
).replace(/\/$/, "");
