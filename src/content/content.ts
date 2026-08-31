import rawContent from "./site-content.json";
import type { Locale, SiteContent, Solution } from "@/types/content";
import { locales } from "@/types/content";

const content = rawContent as Record<Locale, SiteContent>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getSolution(locale: Locale, slug: string): Solution | undefined {
  return content[locale].solutions.find((solution) => solution.slug === slug);
}

export function getSolutionSlugs(): Solution["slug"][] {
  return content.en.solutions.map((solution) => solution.slug);
}
