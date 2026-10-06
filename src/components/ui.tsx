import Link from "next/link";
import type { ReactNode } from "react";
import type { Cta, Locale } from "@/types/content";
import { localizedHref } from "@/lib/links";
import { ArrowIcon } from "@/components/icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-[var(--page-gutter)] ${className}`}>{children}</div>;
}

export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <p className={`font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] ${inverse ? "text-avocado" : "text-forest"}`}>{children}</p>;
}

export function SectionHeader({ eyebrow, title, description, inverse = false, className = "" }: { eyebrow: string; title: string; description?: string; inverse?: boolean; className?: string }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl ${inverse ? "text-warm-white" : "text-graphite"}`}>{title}</h2>
      {description ? <p className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg ${inverse ? "text-white/65" : "text-evidence"}`}>{description}</p> : null}
    </div>
  );
}

const variants = {
  primary: "bg-avocado text-graphite hover:bg-[#b2dc5e] border-avocado shadow-[0_8px_22px_rgba(155,203,60,0.2)]",
  secondary: "bg-transparent text-current hover:bg-black/5 border-black/15",
  inverse: "bg-transparent text-warm-white hover:bg-white/10 border-white/25",
  text: "border-transparent bg-transparent px-0 text-forest hover:text-graphite",
};

export function CtaLink({ locale, cta, variant = "primary", className = "" }: { locale: Locale; cta: Cta; variant?: keyof typeof variants; className?: string }) {
  const href = localizedHref(locale, cta.href);
  const styles = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const children = <>{cta.label}<ArrowIcon /></>;

  return isExternal ? <a className={styles} href={href}>{children}</a> : <Link className={styles} href={href}>{children}</Link>;
}

export function Tag({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${inverse ? "border-white/15 bg-white/5 text-white/70" : "border-black/10 bg-white/70 text-evidence"}`}>{children}</span>;
}

export function PageHero({ eyebrow, title, summary, actions }: { eyebrow: string; title: string; summary: string; actions?: ReactNode }) {
  return (
    <section className="page-hero border-b border-black/8 py-14 sm:py-20">
      <Container>
        <div className="max-w-4xl rounded-[2rem] border border-black/8 bg-white/75 p-7 shadow-[0_22px_60px_rgba(16,23,20,0.05)] sm:p-10 lg:p-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-graphite sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-evidence sm:text-lg">{summary}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export function CheckList({ items, inverse = false }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className={`flex gap-3 text-sm leading-6 sm:text-base ${inverse ? "text-white/75" : "text-evidence"}`} key={item}>
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-avocado" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
