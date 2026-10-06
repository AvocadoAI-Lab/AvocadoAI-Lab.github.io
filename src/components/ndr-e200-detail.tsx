import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { localizedHref } from "@/lib/links";
import { basePath } from "@/lib/site";
import { ArrowIcon } from "@/components/icons";
import { Container, CtaLink, Eyebrow, PageHero, SectionHeader, Tag } from "@/components/ui";

type Props = { locale: Locale; content: SiteContent };

export function NdrE200Downloads({ content }: { content: SiteContent }) {
  const page = content.ndrE200Page;

  return (
    <section className="border-y border-black/8 bg-[#edf2e9] py-20 sm:py-24" id="datasheets">
      <Container>
        <SectionHeader description={page.downloadsSummary} eyebrow="PRODUCT DATASHEETS" title={page.downloadsTitle} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {page.downloads.map((item) => (
            <article className="flex flex-col rounded-[1.6rem] border border-black/10 bg-white p-7" key={item.id}>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-forest">PDF</span>
                <Tag>{item.language}</Tag>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-evidence">{item.detail}</p>
              <a
                aria-label={`${page.downloadLabel}: ${item.title} (${item.language})`}
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-7 text-sm font-bold text-forest hover:text-graphite"
                download
                href={`${basePath}${item.href}`}
              >
                {page.downloadLabel}<ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function NdrE200Detail({ content, locale }: Props) {
  const page = content.ndrE200Page;
  const flow = [page.flow.source, page.flow.intake, page.flow.edge, page.flow.operations];

  return (
    <>
      <PageHero
        actions={(
          <>
            <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-avocado bg-avocado px-5 py-2.5 text-sm font-bold text-graphite" download href={`${basePath}${page.downloads[0].href}`}>{page.heroDownloadLabel}<ArrowIcon /></a>
            <CtaLink cta={page.cta} locale={locale} variant="secondary" />
          </>
        )}
        eyebrow={page.eyebrow}
        summary={page.summary}
        title={page.title}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <Tag>{page.model}</Tag>
            {page.heroPoints.map((point) => <Tag key={point}>{point}</Tag>)}
          </div>
          <div className="mt-8 rounded-[2rem] bg-graphite p-7 text-warm-white sm:p-10">
            <Eyebrow inverse>PASSIVE VISIBILITY</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{page.flowTitle}</h2>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map((step, index) => (
                <li className="rounded-2xl border border-white/12 bg-white/[0.05] p-5" key={step}>
                  <span className="font-mono text-xs font-bold text-avocado">0{index + 1}</span>
                  <p className="mt-4 text-base font-semibold">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-7 text-white/65">{page.flow.note}</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="EDGE E200" title={page.capabilitiesTitle} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {page.capabilities.map((item, index) => (
              <article className="rounded-[1.6rem] border border-black/10 bg-[#f6f7f2] p-7" key={item.title}>
                <span className="font-mono text-xs font-bold text-forest">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="MONITOR / SNAPSHOT" title={page.modesTitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {page.modes.map((mode) => (
              <article className="rounded-[1.6rem] border border-black/10 bg-white p-7 sm:p-8" key={mode.title}>
                <h3 className="text-xl font-semibold">{mode.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence">{mode.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-[#f1f4ee] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="OPERATIONS & OPTIONS" title={page.extensionsTitle} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {page.extensions.map((item) => (
              <article className="rounded-[1.6rem] border border-black/10 bg-white p-7" key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl border-l-2 border-forest/40 pl-5 text-sm leading-7 text-evidence">{page.scopeNote}</p>
        </Container>
      </section>

      <NdrE200Downloads content={content} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 rounded-[2rem] bg-forest p-8 text-warm-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Eyebrow inverse>START WITH YOUR ENVIRONMENT</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{page.cta.label}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <CtaLink cta={page.cta} locale={locale} />
              <Link className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold text-warm-white" href={localizedHref(locale, "/solutions/fab-intelligence")}>{locale === "zh-Hant" ? "查看半導體解決方案" : "Explore semiconductor solution"}<ArrowIcon /></Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
