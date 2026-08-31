import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FoundersDetail } from "@/components/detail-pages";
import { PageShell } from "@/components/page-shell";
import { getSiteContent, isLocale } from "@/content/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getSiteContent(locale).foundersPage;
  return pageMetadata({ locale, title: page.title, description: page.summary, path: "/company/founders" });
}

export default async function FoundersPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  return <PageShell content={content} currentPath="/company/founders" locale={locale}><FoundersDetail content={content} locale={locale} /></PageShell>;
}
