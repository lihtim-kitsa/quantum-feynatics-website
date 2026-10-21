import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../quantumverse.css";
import { siteUrl } from "../../data/site";

// Next.js requires metadata to be exported alongside the root layout.
// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Quantumverse Vol. 4.0 - A New Era",
  description: "Quantumverse Vol. 4.0, 23–25 October 2026, by Quantum Feynatics at BITS Pilani Hyderabad Campus, in collaboration with experts from IBM for talks and hands-on sessions on quantum machine learning (QML) and Qiskit.",
  alternates: { canonical: `${siteUrl}/quantumverse/v4/` },
  openGraph: {
    type: "website",
    title: "Quantumverse Vol. 4.0 - A New Era",
    description: "Talks and hands-on sessions on QML and Qiskit with experts from IBM. 23–25 October 2026. Registration details coming soon.",
    url: `${siteUrl}/quantumverse/v4/`,
    images: [`${siteUrl}/quantumverse/images/quantum-feynatics-group-high-resolution-logo-white-transparent.png`],
  },
  twitter: { card: "summary", title: "Quantumverse Vol. 4.0" },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Quantumverse Vol. 4.0",
        url: `${siteUrl}/quantumverse/v4/`,
        description: "Talks and hands-on sessions on QML and Qiskit with experts from IBM, 23–25 October 2026.",
        publisher: {
          "@type": "Organization",
          name: "Quantum Feynatics",
          email: "ieee.sb@hyderabad.bits-pilani.ac.in",
        },
      })}</script>
      {children}
    </>
  );
}
