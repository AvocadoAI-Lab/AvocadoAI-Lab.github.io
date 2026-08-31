import type { MetadataRoute } from "next";
import { getSolutionSlugs } from "@/content/content";
import { siteUrl } from "@/lib/site";
import { locales } from "@/types/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/platform", "/company/founders", "/trust", "/resources", "/contact"];
  const solutionPaths = getSolutionSlugs().map((slug) => `/solutions/${slug}`);
  const now = new Date();

  return locales.flatMap((locale) => [...staticPaths, ...solutionPaths].map((path) => ({
    url: `${siteUrl}/${locale}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/solutions") ? 0.8 : 0.6,
  })));
}
