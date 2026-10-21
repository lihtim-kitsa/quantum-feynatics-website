import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./quantumverse.css";
import { siteUrl } from "./data/site";

// Next.js requires metadata to be exported alongside the root layout.
// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Quantumverse Vol. 4.0 - A New Era",
  description: "Quantumverse Vol. 4.0 by Quantum Feynatics at BITS Pilani Hyderabad Campus, in collaboration with experts from IBM for talks and hands-on sessions on quantum machine learning (QML) and Qiskit.",
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    title: "Quantumverse Vol. 4.0 - A New Era",
    description: "Talks and hands-on sessions on QML and Qiskit with experts from IBM. Dates and registration to be announced.",
    url: siteUrl,
    images: [`${siteUrl}/quantumverse/images/quantum-feynatics-group-high-resolution-logo-white-transparent.png`],
  },
  twitter: { card: "summary", title: "Quantumverse Vol. 4.0" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Quantumverse Vol. 4.0",
          url: siteUrl,
          description: "Quantumverse Vol. 4.0: talks and hands-on sessions on QML and Qiskit in collaboration with experts from IBM. Dates and registration to be announced.",
          publisher: {
            "@type": "Organization",
            name: "Quantum Feynatics",
            email: "ieee.sb@hyderabad.bits-pilani.ac.in",
          },
        })}</script>
        {children}
      </body>
    </html>
  );
}
