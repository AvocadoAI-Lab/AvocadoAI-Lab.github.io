import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteContent, isLocale } from "@/content/content";
import { HomePage } from "@/components/home-page";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getSiteContent(locale);
  return pageMetadata({ locale, title: content.meta.title, description: content.meta.description });
}

export default async function LocalizedHome({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  return <PageShell content={content} currentPath="" locale={locale}><HomePage content={content} locale={locale} /></PageShell>;
}
