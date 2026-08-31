import type { Locale } from "@/types/content";

export function localizedHref(locale: Locale, href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
    return href;
  }

  if (href.startsWith("#")) {
    return `/${locale}${href}`;
  }

  return `/${locale}${href === "/" ? "" : href}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "zh-Hant" ? "en" : "zh-Hant";
}
