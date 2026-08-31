import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/detail-pages";
import { PageShell } from "@/components/page-shell";
import { getSiteContent, getSolution, getSolutionSlugs, isLocale } from "@/content/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const solution = getSolution(locale, slug);
  if (!solution) return {};
  return pageMetadata({ locale, title: solution.title, description: solution.pageSummary, path: `/solutions/${solution.slug}` });
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const solution = getSolution(locale, slug);
  if (!solution) notFound();
  const content = getSiteContent(locale);
  const path = `/solutions/${solution.slug}`;
  return <PageShell content={content} currentPath={path} locale={locale}><SolutionDetail locale={locale} solution={solution} /></PageShell>;
}
