export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function asset(filename: string): string {
  return `${basePath}/quantumverse/images/${filename}`;
}

export const siteUrl = "https://ieee-sb-bits-hyd.github.io/quantum-feynatics";
