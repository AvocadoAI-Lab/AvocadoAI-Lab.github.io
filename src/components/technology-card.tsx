import type { Locale, TechnologyItem } from "@/types/content";
import { ArrowIcon } from "@/components/icons";
import { Tag } from "@/components/ui";

export function TechnologyCard({ item, locale }: { item: TechnologyItem; locale: Locale }) {
  const newWindowLabel = locale === "zh-Hant" ? "於新視窗開啟" : "opens in a new window";

  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-forest/30 hover:shadow-xl hover:shadow-black/5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-forest">{item.category}</p>
        <Tag>{item.status}</Tag>
      </div>
      <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-evidence sm:text-base">{item.description}</p>
      <p className="mt-6 border-l-2 border-avocado pl-4 font-mono text-xs leading-6 text-graphite/75">{item.proof}</p>
      {item.href && item.linkLabel ? (
        <a
          aria-label={`${item.linkLabel}: ${item.title} (${newWindowLabel})`}
          className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-forest group-hover:text-graphite"
          href={item.href}
          rel="noreferrer"
          target="_blank"
        >
          {item.linkLabel}<ArrowIcon />
        </a>
      ) : null}
    </article>
  );
}
