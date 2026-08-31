import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlatformDetail } from "@/components/detail-pages";
import { PageShell } from "@/components/page-shell";
import { getSiteContent, isLocale } from "@/content/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getSiteContent(locale).platformPage;
  return pageMetadata({ locale, title: page.title, description: page.summary, path: "/platform" });
}

export default async function PlatformPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  return <PageShell content={content} currentPath="/platform" locale={locale}><PlatformDetail content={content} locale={locale} /></PageShell>;
}
