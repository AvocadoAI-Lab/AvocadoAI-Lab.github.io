import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechnologyDetail } from "@/components/detail-pages";
import { PageShell } from "@/components/page-shell";
import { getSiteContent, isLocale } from "@/content/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getSiteContent(locale).technologyPage;
  return pageMetadata({ locale, title: page.title, description: page.summary, path: "/technology" });
}

export default async function TechnologyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  return <PageShell content={content} currentPath="/technology" locale={locale}><TechnologyDetail content={content} locale={locale} /></PageShell>;
}
