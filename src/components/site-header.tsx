import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { alternateLocale, localizedHref } from "@/lib/links";
import { customerPortalUrl } from "@/lib/site";
import { Logo } from "@/components/logo";
import { MenuIcon } from "@/components/icons";
import { CtaLink, Container } from "@/components/ui";

export function SiteHeader({ locale, content, currentPath = "" }: { locale: Locale; content: SiteContent; currentPath?: string }) {
  const alternate = alternateLocale(locale);
  const alternatePath = `/${alternate}${currentPath}`;
  const loginHref = customerPortalUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-warm-white/92 backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-4">
        <Logo locale={locale} />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {content.navigation.items.map((item) => (
            <Link className="text-sm font-semibold text-evidence transition hover:text-graphite" href={localizedHref(locale, item.href)} key={item.label}>{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link aria-label={`${content.navigation.localeLabel}: ${alternate}`} className="rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-evidence hover:bg-black/5 hover:text-graphite" href={alternatePath}>{alternate === "en" ? "EN" : "繁中"}</Link>
          <Link className="rounded-full px-4 py-2.5 text-sm font-bold text-forest hover:bg-black/5" href={loginHref}>{content.navigation.customerLogin.label}</Link>
          <CtaLink cta={content.navigation.primaryCta} locale={locale} />
        </div>

        <details className="relative lg:hidden">
          <summary aria-label={content.navigation.menuLabel} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-black/10 bg-white">
            <MenuIcon />
          </summary>
          <div className="absolute right-0 top-14 w-[min(88vw,22rem)] rounded-3xl border border-black/10 bg-warm-white p-5 shadow-2xl">
            <nav aria-label="Mobile" className="flex flex-col">
              {content.navigation.items.map((item) => (
                <Link className="border-b border-black/8 py-3 text-base font-semibold text-graphite" href={localizedHref(locale, item.href)} key={item.label}>{item.label}</Link>
              ))}
              <Link className="border-b border-black/8 py-3 text-base font-semibold text-graphite" href={alternatePath}>{alternate === "en" ? "English" : "繁體中文"}</Link>
              <Link className="py-3 text-base font-semibold text-forest" href={loginHref}>{content.navigation.customerLogin.label}</Link>
              <CtaLink className="mt-3 w-full" cta={content.navigation.primaryCta} locale={locale} />
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
