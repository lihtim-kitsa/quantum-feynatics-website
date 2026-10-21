import type { Metadata } from "next";
import MainSite from "../components/MainSite";
import { siteUrl } from "../data/site";

// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  title: "Events — Quantum Feynatics",
  description: "Explore Quantumverse Vol. 4.0, 23–25 October 2026: talks and hands-on QML and Qiskit sessions with experts from IBM.",
  alternates: { canonical: `${siteUrl}/events/` },
  openGraph: {
    title: "Events — Quantum Feynatics",
    description: "Quantumverse Vol. 4.0, 23–25 October 2026: talks and hands-on QML and Qiskit sessions with experts from IBM.",
    url: `${siteUrl}/events/`,
  },
};

export default function Events() {
  return <MainSite />;
}
