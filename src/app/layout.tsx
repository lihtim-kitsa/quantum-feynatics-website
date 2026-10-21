import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "./data/site";

// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Quantum Feynatics — Question. Build. Discover.",
  description: "Quantum Feynatics at BITS Pilani Hyderabad: exploring quantum computing through projects, workshops, and collaborative research.",
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    title: "Quantum Feynatics",
    description: "Exploring quantum computing through projects, workshops, and collaborative research at BITS Pilani Hyderabad.",
    url: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
