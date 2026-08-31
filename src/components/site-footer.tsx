import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { localizedHref } from "@/lib/links";
import { Container } from "@/components/ui";
import { Logo } from "@/components/logo";

export function SiteFooter({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <footer className="border-t border-white/10 bg-graphite py-12 text-warm-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <Logo inverse locale={locale} />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">{content.footer.tagline}</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:justify-self-end">
            {content.footer.links.map((item) => <Link className="text-white/65 hover:text-avocado" href={localizedHref(locale, item.href)} key={item.label}>{item.label}</Link>)}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Avocado.ai</p>
          <p className="max-w-2xl">{content.footer.note}</p>
        </div>
      </Container>
    </footer>
  );
}
