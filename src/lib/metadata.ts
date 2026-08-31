import type { Metadata } from "next";
import type { Locale } from "@/types/content";
import { siteUrl } from "@/lib/site";

export function pageMetadata({ locale, title, description, path = "" }: { locale: Locale; title: string; description: string; path?: string }): Metadata {
  const canonical = `${siteUrl}/${locale}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        "zh-Hant": `${siteUrl}/zh-Hant${path}`,
        en: `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Avocado.ai",
      title,
      description,
      url: canonical,
      locale: locale === "zh-Hant" ? "zh_TW" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
