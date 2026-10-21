"use client";

import dynamic from "next/dynamic";
import { basePath } from "../data/site";
import "../../index.css";
import "../../editorial.css";
import "boxicons/css/boxicons.min.css";

const ClubApp = dynamic(() => import("../../App.jsx"), { ssr: false });

export default function MainSite() {
  return <ClubApp basename={basePath} />;
}
