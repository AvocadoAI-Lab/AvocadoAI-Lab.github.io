import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { localizedHref } from "@/lib/links";
import { basePath } from "@/lib/site";
import { ArrowIcon, Icon } from "@/components/icons";
import { Container, CtaLink, Eyebrow, SectionHeader, Tag } from "@/components/ui";

function HeroVisual({ content }: { content: SiteContent["hero"] }) {
  return (
    <div aria-hidden="true" className="hero-signal relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-graphite p-6 text-warm-white sm:p-8">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-avocado/20" />
      <div className="absolute -right-4 -top-8 h-44 w-44 rounded-full border border-avocado/12" />

      <p className="relative font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/65">{content.visualInputLabel}</p>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {content.visualInputs.map((input) => (
          <span className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-1.5 font-mono text-xs font-bold text-white/75" key={input}>{input}</span>
        ))}
      </div>

      <div className="relative my-8 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
        <div className="hidden h-px bg-gradient-to-r from-transparent to-avocado/70 sm:block" />
        <div className="mx-auto w-48 rounded-[1.7rem] border border-avocado/35 bg-forest p-5 text-center shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
          <Image
            alt=""
            className="mx-auto h-20 w-20 select-none object-contain"
            draggable={false}
            height={256}
            src={`${basePath}/brand/sensel-neural-brain-avocado-core-v2.png`}
            unoptimized
            width={256}
          />
          <p className="mt-3 text-xl font-black tracking-[-0.04em]">{content.visualCoreLabel}</p>
          <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/60">{content.visualCoreCaption}</p>
        </div>
        <div className="hidden h-px bg-gradient-to-r from-avocado/70 to-transparent sm:block" />
      </div>

      <div className="relative grid grid-cols-3 gap-2">
        {content.visualOutputs.map((output, index) => (
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] px-2 py-3 text-center" key={output}>
            <p className="font-mono text-[0.7rem] font-bold text-avocado">0{index + 1}</p>
            <p className="mt-1 text-xs font-bold text-white/80 sm:text-sm">{output}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomePage({ locale, content }: { locale: Locale; content: SiteContent }) {
  const platformGroups = [
    content.platform.steps.slice(0, 2),
    content.platform.steps.slice(2, 4),
    content.platform.steps.slice(4, 6),
  ];

  return (
    <>
      <section className="portal-hero border-b border-black/8 py-8 sm:py-12 lg:py-16">
        <Container>
          <div className="hero-panel grid gap-10 rounded-[2.5rem] border border-black/8 bg-white p-6 shadow-[0_28px_80px_rgba(16,23,20,0.07)] sm:p-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:p-12">
            <div className="py-2 lg:py-6">
              <Eyebrow>{content.hero.eyebrow}</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.055em] text-graphite sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-evidence sm:text-lg">{content.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink cta={content.hero.primaryCta} locale={locale} />
                <CtaLink cta={content.hero.secondaryCta} locale={locale} variant="secondary" />
              </div>
            </div>
            <HeroVisual content={content.hero} />
          </div>

          <div aria-label={content.proof.label} className="mt-8 rounded-2xl border border-black/8 bg-white/70 px-5 py-5">
            <p className="text-center font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-forest">{content.proof.label}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-7 gap-y-2.5">
              {content.proof.items.map((item) => <span className="text-sm font-semibold text-graphite" key={item}>{item}</span>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24" id="products">
        <Container>
          <SectionHeader description={content.productFamily.description} eyebrow={content.productFamily.eyebrow} title={content.productFamily.title} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.productFamily.items.map((item, index) => (
              <article className={`group rounded-[1.6rem] border p-7 transition duration-200 hover:-translate-y-1 ${index === 0 ? "border-forest bg-forest text-warm-white shadow-[0_18px_50px_rgba(24,75,60,0.16)]" : "border-black/10 bg-[#f1f4ee] text-graphite hover:border-forest/30"}`} key={item.id}>
                <p className={`font-mono text-xs font-bold ${index === 0 ? "text-avocado" : "text-forest"}`}>0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-white/70" : "text-evidence"}`}>{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <Tag inverse={index === 0} key={tag}>{tag}</Tag>)}
                </div>
                <Link className={`mt-8 inline-flex items-center gap-2 text-sm font-bold ${index === 0 ? "text-avocado" : "text-forest"}`} href={localizedHref(locale, item.href)}>{item.linkLabel}<ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-[#f1f4ee] py-20 sm:py-24" id="solutions">
        <Container>
          <SectionHeader description={content.solutionsSection.description} eyebrow={content.solutionsSection.eyebrow} title={content.solutionsSection.title} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.solutions.map((solution, index) => (
              <article className="group rounded-[1.6rem] border border-black/9 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-forest/30" key={solution.slug}>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-forest">{solution.kicker}</p>
                  <span className="font-mono text-xs font-bold text-evidence">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em]">{solution.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence sm:text-base">{solution.homeSummary}</p>
                <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-forest" href={localizedHref(locale, `/solutions/${solution.slug}`)}>{locale === "zh-Hant" ? "查看解決方案" : "Explore solution"}<ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-graphite p-7 text-warm-white sm:p-10 lg:p-12">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader description={content.platform.description} eyebrow={content.platform.eyebrow} inverse title={content.platform.title} />
              <CtaLink cta={content.platform.cta} locale={locale} variant="inverse" />
            </div>
            <ol className="mt-10 grid gap-3 lg:grid-cols-3">
              {platformGroups.map((steps, index) => (
                <li className="rounded-2xl border border-white/10 bg-white/[0.04] p-6" key={steps[0]?.number ?? index}>
                  <p className="font-mono text-xs font-bold text-avocado">0{index + 1}</p>
                  <div className="mt-5 space-y-5">
                    {steps.map((step) => (
                      <div key={step.number}>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/60">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white py-20 sm:py-24" id="case-studies">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader description={content.caseStudies.description} eyebrow={content.caseStudies.eyebrow} title={content.caseStudies.title} />
            <CtaLink cta={content.caseStudies.cta} locale={locale} variant="secondary" />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.caseStudies.items.map((item, index) => (
              <article className="group rounded-[1.6rem] border border-black/10 bg-[#f6f7f2] p-7" key={item.title}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-forest">{item.sector}</p>
                  <span className="font-mono text-xs font-bold text-evidence">0{index + 1}</span>
                </div>
                <div className="mt-5"><Tag>{item.status}</Tag></div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence">{item.summary}</p>
                <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-forest" href={localizedHref(locale, `/case-studies#${item.id}`)}>{locale === "zh-Hant" ? "查看案例" : "View case"}<ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-black/9 bg-white p-7 sm:p-9">
              <SectionHeader description={content.trust.description} eyebrow={content.trust.eyebrow} title={content.trust.title} />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {content.trust.items.map((item) => (
                  <article className="border-t border-black/10 pt-5" key={item.title}>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-forest text-avocado"><Icon className="h-5 w-5" name={item.icon} /></div>
                    <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-evidence">{item.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8"><CtaLink cta={content.trust.cta} locale={locale} variant="secondary" /></div>
            </div>

            <div className="rounded-[2rem] bg-[#e7eee2] p-7 sm:p-9">
              <Eyebrow>{content.resources.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{content.resources.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-evidence sm:text-base">{content.resources.description}</p>
              <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
                {content.resources.items.slice(0, 3).map((item) => (
                  <article className="py-5" key={item.title}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-forest">{item.type}</p>
                        <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                      </div>
                      {item.status ? <Tag>{item.status}</Tag> : null}
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink cta={content.resources.cta} locale={locale} variant="secondary" />
                <CtaLink cta={content.technology.cta} locale={locale} variant="text" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-4 sm:pb-24">
        <Container>
          <div className="rounded-[2.5rem] bg-forest p-8 text-warm-white sm:p-12 lg:p-14">
            <Eyebrow inverse>{content.finalCta.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{content.finalCta.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{content.finalCta.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink cta={content.finalCta.primaryCta} locale={locale} />
              <CtaLink cta={content.finalCta.secondaryCta} locale={locale} variant="inverse" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
