import type { MetadataRoute } from "next";
import { siteUrl } from "./data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/` }, { url: `${siteUrl}/quantumverse/v4/` }];
}
