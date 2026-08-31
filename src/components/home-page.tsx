import Image from "next/image";
import Link from "next/link";
import type { Founder, Locale, SiteContent } from "@/types/content";
import { localizedHref } from "@/lib/links";
import { basePath } from "@/lib/site";
import { ArrowIcon, Icon } from "@/components/icons";
import { Container, CtaLink, Eyebrow, SectionHeader, Tag } from "@/components/ui";

function HeroVisual({ content }: { content: SiteContent["hero"] }) {
  const inputs = ["EDR", "NDR", "WAF", "OT", "CTI"];
  return (
    <div aria-hidden="true" className="surface-grid relative min-h-[31rem] overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] p-5 shadow-2xl shadow-black/25 sm:p-7">
      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/45">{content.visualInputLabel}</p>
      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {inputs.map((input) => <div className="rounded-xl border border-white/10 bg-black/20 px-2 py-2 text-center font-mono text-xs font-bold text-white/65" key={input}>{input}</div>)}
      </div>

      <div className="mx-auto my-7 h-12 w-px bg-gradient-to-b from-avocado/20 to-avocado" />

      <div className="relative mx-auto max-w-sm rounded-[2rem] border border-avocado/35 bg-forest/80 p-7 text-center shadow-[0_0_60px_rgba(155,203,60,0.12)]">
        <Image
          alt=""
          className="mx-auto h-28 w-28 select-none object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
          draggable={false}
          height={384}
          src={`${basePath}/brand/sensel-neural-brain-avocado-core-v2.png`}
          unoptimized
          width={384}
        />
        <p className="mt-4 text-2xl font-black tracking-[-0.04em] text-warm-white">{content.visualCoreLabel}</p>
        <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/45">{content.visualCoreCaption}</p>
        <div className="signal-line mt-5 h-px bg-white/8" />
        <div className="mt-5 grid grid-cols-3 gap-2 text-[0.65rem] font-bold text-white/65">
          <span>Context</span><span>Reason</span><span>Validate</span>
        </div>
      </div>

      <div className="mx-auto my-7 h-12 w-px bg-gradient-to-b from-avocado to-avocado/20" />

      <div className="grid grid-cols-3 gap-2">
        {content.visualOutputs.map((output, index) => (
          <div className="rounded-2xl border border-white/12 bg-white/[0.055] p-3 text-center" key={output}>
            <p className="font-mono text-[0.6rem] font-bold text-avocado">0{index + 1}</p>
            <p className="mt-1 text-xs font-bold text-white/75 sm:text-sm">{output}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FounderCard({ founder, side }: { founder: Founder; side: "left" | "right" }) {
  const initials = founder.id === "rain-chung" ? "RC" : "EM";
  return (
    <article className={`rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-sm sm:p-8 ${side === "right" ? "md:text-right" : ""}`}>
      <div className={`flex items-center gap-4 ${side === "right" ? "md:flex-row-reverse" : ""}`}>
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[1.4rem] bg-graphite text-xl font-black text-avocado">{initials}</div>
        <div>
          <p className="text-xl font-black tracking-[-0.03em] text-graphite">{founder.name}</p>
          <p className="mt-1 text-sm font-semibold text-evidence">{founder.localName}</p>
          <p className="mt-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-forest">{founder.role}</p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-7 text-evidence sm:text-base">{founder.shortBio}</p>
      <div className={`mt-6 flex flex-wrap gap-2 ${side === "right" ? "md:justify-end" : ""}`}>
        {founder.domains.map((domain) => <Tag key={domain}>{domain}</Tag>)}
      </div>
    </article>
  );
}

export function HomePage({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <>
      <section className="hero-glow surface-grid overflow-hidden border-b border-white/10 py-20 text-warm-white sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <Eyebrow inverse>{content.hero.eyebrow}</Eyebrow>
              <h1 className="text-gradient mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">{content.hero.title}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">{content.hero.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaLink cta={content.hero.primaryCta} locale={locale} />
                <CtaLink cta={content.hero.secondaryCta} locale={locale} variant="inverse" />
              </div>
            </div>
            <HeroVisual content={content.hero} />
          </div>
        </Container>
      </section>

      <section aria-label={content.proof.label} className="border-b border-black/8 bg-white/55 py-7">
        <Container>
          <p className="text-center font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-evidence">{content.proof.label}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {content.proof.items.map((item) => <span className="text-sm font-bold text-graphite" key={item}>{item}</span>)}
          </div>
        </Container>
      </section>

      <section className="soft-grid py-24 sm:py-32">
        <Container>
          <SectionHeader description={content.problem.description} eyebrow={content.problem.eyebrow} title={content.problem.title} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.problem.items.map((item) => (
              <article className="rounded-3xl border border-black/10 bg-warm-white p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/5" key={item.title}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-avocado"><Icon name={item.icon} /></div>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-evidence">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="surface-grid bg-graphite py-24 text-warm-white sm:py-32">
        <Container>
          <SectionHeader description={content.platform.description} eyebrow={content.platform.eyebrow} inverse title={content.platform.title} />
          <div className="mt-14 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {content.platform.steps.map((step) => (
              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5" key={step.number}>
                <p className="font-mono text-xs font-bold text-avocado">{step.number}</p>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-6 rounded-[2rem] border border-avocado/25 bg-forest/35 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-3xl text-lg leading-8 text-white/78">{content.platform.highlight}</p>
            <CtaLink cta={content.platform.cta} locale={locale} />
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32" id="solutions">
        <Container>
          <SectionHeader description={content.solutionsSection.description} eyebrow={content.solutionsSection.eyebrow} title={content.solutionsSection.title} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {content.solutions.map((solution, index) => (
              <article className="group flex min-h-[31rem] flex-col rounded-[2rem] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-forest/30 hover:shadow-2xl hover:shadow-black/8 sm:p-8" key={solution.slug}>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-forest">{solution.kicker}</p>
                  <p className="font-mono text-xs font-bold text-evidence">0{index + 1}</p>
                </div>
                <h3 className="mt-8 text-balance text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{solution.title}</h3>
                <p className="mt-5 text-sm leading-7 text-evidence sm:text-base">{solution.homeSummary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {solution.capabilities.slice(0, 4).map((capability) => <Tag key={capability}>{capability}</Tag>)}
                </div>
                <Link className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-bold text-forest group-hover:text-graphite" href={localizedHref(locale, `/solutions/${solution.slug}`)}>{locale === "zh-Hant" ? "查看方案" : "Explore solution"}<ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-[#edf0e8] py-24 sm:py-32" id="field-proof">
        <Container>
          <SectionHeader description={content.fieldProof.description} eyebrow={content.fieldProof.eyebrow} title={content.fieldProof.title} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {content.fieldProof.items.map((item) => (
              <article className="rounded-[2rem] border border-black/10 bg-warm-white p-7" key={item.title}>
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.13em] text-forest">{item.sector}</p>
                <p className="mt-4 text-xs font-semibold text-evidence">{item.status}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence">{item.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">{item.highlights.map((highlight) => <Tag key={highlight}>{highlight}</Tag>)}</div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="soft-grid py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeader description={content.foundersSection.description} eyebrow={content.foundersSection.eyebrow} title={content.foundersSection.title} />
              <p className="mt-8 inline-flex rounded-full border border-forest/15 bg-forest/5 px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-forest">{content.foundersSection.bridgeLabel}</p>
              <div className="mt-8"><CtaLink cta={content.foundersSection.cta} locale={locale} variant="secondary" /></div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <FounderCard founder={content.foundersSection.people[0]} side="left" />
              <FounderCard founder={content.foundersSection.people[1]} side="right" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest py-24 text-warm-white sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader description={content.integrations.description} eyebrow={content.integrations.eyebrow} inverse title={content.integrations.title} />
            <div>
              <div className="flex flex-wrap gap-3">
                {content.integrations.items.map((item) => <Tag inverse key={item}>{item}</Tag>)}
              </div>
              <p className="mt-8 border-l-2 border-avocado pl-5 text-xl font-semibold leading-8 text-white/82">{content.integrations.statement}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader description={content.trust.description} eyebrow={content.trust.eyebrow} title={content.trust.title} />
              <div className="mt-8"><CtaLink cta={content.trust.cta} locale={locale} variant="secondary" /></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.trust.items.map((item) => (
                <article className="rounded-3xl border border-black/10 bg-white p-6" key={item.title}>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-graphite text-avocado"><Icon className="h-5 w-5" name={item.icon} /></div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-evidence">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/55 py-24 sm:py-32" id="resources">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader description={content.resources.description} eyebrow={content.resources.eyebrow} title={content.resources.title} />
            <CtaLink cta={content.resources.cta} locale={locale} variant="secondary" />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {content.resources.items.map((item) => (
              <article className="rounded-[2rem] border border-black/10 bg-warm-white p-7" key={item.title}>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-forest">{item.type}</p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence">{item.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="hero-glow surface-grid py-24 text-warm-white sm:py-32">
        <Container>
          <div className="rounded-[2.5rem] border border-white/12 bg-white/[0.045] p-8 sm:p-12 lg:p-16">
            <Eyebrow inverse>{content.finalCta.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{content.finalCta.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{content.finalCta.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaLink cta={content.finalCta.primaryCta} locale={locale} />
              <CtaLink cta={content.finalCta.secondaryCta} locale={locale} variant="inverse" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
