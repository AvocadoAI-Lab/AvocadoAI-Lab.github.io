import type { ReactNode } from "react";
import type { Locale, SiteContent } from "@/types/content";
import { DocumentLanguage } from "@/components/document-language";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({ locale, content, currentPath, children }: { locale: Locale; content: SiteContent; currentPath: string; children: ReactNode }) {
  return (
    <>
      <DocumentLanguage locale={locale} />
      <div lang={locale}>
        <a className="skip-link" href="#main-content">{locale === "zh-Hant" ? "跳至主要內容" : "Skip to content"}</a>
        <SiteHeader content={content} currentPath={currentPath} locale={locale} />
        <main id="main-content">{children}</main>
        <SiteFooter content={content} locale={locale} />
      </div>
    </>
  );
}
