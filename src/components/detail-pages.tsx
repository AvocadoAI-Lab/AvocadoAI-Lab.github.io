import type { Locale, SiteContent, Solution } from "@/types/content";
import { bookingUrl, contactEmail, contactName } from "@/lib/site";
import { EventGallery } from "@/components/event-gallery";
import { ArrowIcon } from "@/components/icons";
import { TechnologyCard } from "@/components/technology-card";
import { Container, CtaLink, Eyebrow, PageHero, SectionHeader, Tag } from "@/components/ui";

function CtaPanel({ locale, eyebrow, title, description, cta }: { locale: Locale; eyebrow: string; title: string; description: string; cta: { label: string; href: string } }) {
  return (
    <section className="hero-glow surface-grid py-20 text-warm-white sm:py-24">
      <Container>
        <div className="rounded-[2.2rem] border border-white/12 bg-white/[0.045] p-8 sm:p-12">
          <Eyebrow inverse>{eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{description}</p>
          <div className="mt-8"><CtaLink cta={cta} locale={locale} /></div>
        </div>
      </Container>
    </section>
  );
}

function ListCard({ title, items, dark = false }: { title: string; items: string[]; dark?: boolean }) {
  return (
    <article className={`rounded-[2rem] border p-7 sm:p-8 ${dark ? "border-white/10 bg-white/[0.035]" : "border-black/10 bg-white"}`}>
      <h2 className={`text-2xl font-semibold tracking-[-0.03em] ${dark ? "text-warm-white" : "text-graphite"}`}>{title}</h2>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li className={`flex gap-3 text-sm leading-7 sm:text-base ${dark ? "text-white/65" : "text-evidence"}`} key={item}>
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-avocado" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SolutionDetail({ locale, solution }: { locale: Locale; solution: Solution }) {
  const labels = locale === "zh-Hant" ? {
    audience: "適用對象",
    challenges: "需要解決的問題",
    capabilities: "方案能力",
    outcomes: "預期營運成果",
    process: "建議導入路徑",
    closeEyebrow: "START WITH A SCOPED WORKSHOP",
    closeDescription: "先確認場域、資料、責任邊界與可驗收成果，再決定導入範圍與服務層級。",
  } : {
    audience: "Who it is for",
    challenges: "Operating challenges",
    capabilities: "Capabilities",
    outcomes: "Target operating outcomes",
    process: "Recommended delivery path",
    closeEyebrow: "START WITH A SCOPED WORKSHOP",
    closeDescription: "Clarify environment, data, responsibilities, and measurable acceptance before selecting scope and service tier.",
  };

  return (
    <>
      <PageHero eyebrow={solution.kicker} summary={solution.pageSummary} title={solution.title} />
      <section className="soft-grid py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <ListCard items={solution.audiences} title={labels.audience} />
            <ListCard items={solution.challenges} title={labels.challenges} />
          </div>
        </Container>
      </section>
      <section className="surface-grid bg-graphite py-20 text-warm-white sm:py-28">
        <Container>
          <SectionHeader description={solution.pageSummary} eyebrow={solution.kicker} inverse title={labels.capabilities} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.capabilities.map((item, index) => (
              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6" key={item}>
                <p className="font-mono text-xs font-bold text-avocado">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-5 text-lg font-semibold leading-7 text-warm-white">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <ListCard items={solution.outcomes} title={labels.outcomes} />
            <article className="rounded-[2rem] border border-black/10 bg-[#edf0e8] p-7 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{labels.process}</h2>
              <ol className="mt-7 space-y-4">
                {solution.process.map((step, index) => (
                  <li className="grid grid-cols-[2.5rem_1fr] gap-3" key={step}>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-graphite font-mono text-xs font-bold text-avocado">{index + 1}</span>
                    <span className="pt-1.5 text-sm font-semibold leading-6 text-graphite sm:text-base">{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </Container>
      </section>
      <CtaPanel cta={solution.cta} description={labels.closeDescription} eyebrow={labels.closeEyebrow} locale={locale} title={solution.title} />
    </>
  );
}

export function PlatformDetail({ locale, content }: { locale: Locale; content: SiteContent }) {
  const page = content.platformPage;
  const layers = locale === "zh-Hant" ? [
    ["Edge & Data", "EDR、NDR、WAF、OT Edge、CTI 與營運資料的接入、健康狀態與最小化"],
    ["Evidence Fabric", "把來源、資產、版本、缺漏與 Evidence ID 綁定到 Episode revision"],
    ["Governed AI", "在 detector 事實與權限邊界內進行摘要、脈絡整理與調查假設"],
    ["Validation", "以隔離情境、人工核准、固定範圍與安全護欄執行控制驗證"],
    ["Improvement & Assurance", "保留修正、重測、artifact、Audit 與改善狀態"],
  ] : [
    ["Edge & Data", "Ingest EDR, NDR, WAF, OT edge, CTI, and operating data with health state and minimization"],
    ["Evidence Fabric", "Bind provenance, assets, versions, gaps, and evidence IDs to each episode revision"],
    ["Governed AI", "Summarize, contextualize, and form hypotheses inside detector-fact and authority boundaries"],
    ["Validation", "Evaluate controls with isolated scenarios, human approval, fixed scope, and safety guardrails"],
    ["Improvement & Assurance", "Preserve remediation, retest, artifacts, audit history, and improvement state"],
  ];

  return (
    <>
      <PageHero eyebrow={page.eyebrow} summary={page.summary} title={page.title} />
      <section className="soft-grid py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow={page.eyebrow} title={page.principlesTitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {page.principles.map((principle, index) => (
              <article className="rounded-[2rem] border border-black/10 bg-white p-7" key={principle.title}>
                <p className="font-mono text-xs font-bold text-forest">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence sm:text-base">{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader description={page.capabilitiesDescription} eyebrow="SENSEL CAPABILITIES" title={page.capabilitiesTitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {page.capabilities.map((capability, index) => (
              <article className="rounded-[2rem] border border-black/10 bg-white p-7 sm:p-8" key={capability.title}>
                <p className="font-mono text-xs font-bold text-forest">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{capability.title}</h3>
                <p className="mt-4 text-sm leading-7 text-evidence sm:text-base">{capability.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="surface-grid bg-graphite py-20 text-warm-white sm:py-28">
        <Container>
          <SectionHeader description={page.architectureDescription} eyebrow="CONTROL & VALIDATION ARCHITECTURE" inverse title={page.architectureTitle} />
          <div className="mt-12 space-y-3">
            {layers.map(([title, description], index) => (
              <article className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[4rem_0.45fr_1fr] md:items-center" key={title}>
                <span className="font-mono text-xs font-bold text-avocado">L{index + 1}</span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-white/58 sm:text-base">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaPanel cta={page.cta} description={page.summary} eyebrow="SENSEL" locale={locale} title={page.title} />
    </>
  );
}

export function TechnologyDetail({ locale, content }: { locale: Locale; content: SiteContent }) {
  const page = content.technologyPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} summary={page.summary} title={page.title} />

      <section className="soft-grid py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 rounded-[2.2rem] border border-black/10 bg-white p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{page.thesisTitle}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-evidence sm:text-lg">{page.thesisDescription}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="surface-grid bg-graphite py-20 text-warm-white sm:py-28">
        <Container>
          <SectionHeader description={page.architectureDescription} eyebrow="EDGE → EVIDENCE → VALIDATION" inverse title={page.architectureTitle} />
          <ol className="mt-12 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {page.architectureSteps.map((step) => (
              <li className="rounded-3xl border border-white/10 bg-white/[0.035] p-5" key={step.number}>
                <p className="font-mono text-xs font-bold text-avocado">{step.number}</p>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader description={page.portfolioDescription} eyebrow="BUILDING IN PUBLIC" title={page.portfolioTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {page.items.map((item) => <TechnologyCard item={item} key={item.id} locale={locale} />)}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-[#edf0e8] py-20 sm:py-28">
        <Container>
          <SectionHeader description={page.maturityDescription} eyebrow="CLAIM DISCIPLINE" title={page.maturityTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.maturityLevels.map((level, index) => (
              <article className="rounded-[2rem] border border-black/10 bg-warm-white p-6" key={level.title}>
                <p className="font-mono text-xs font-bold text-forest">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em]">{level.title}</h3>
                <p className="mt-3 text-sm leading-7 text-evidence">{level.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaPanel cta={page.cta} description={page.summary} eyebrow="FOUNDER-LED TECH REVIEW" locale={locale} title={page.title} />
    </>
  );
}

export function FoundersDetail({ locale, content }: { locale: Locale; content: SiteContent }) {
  const page = content.foundersPage;
  const labels = locale === "zh-Hant"
    ? { email: "電子郵件", whatsapp: "WhatsApp" }
    : { email: "Email", whatsapp: "WhatsApp" };

  return (
    <>
      <PageHero eyebrow={page.eyebrow} summary={page.summary} title={page.title} />
      <section className="soft-grid py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="FOUNDERS" title={page.leadershipTitle} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {content.foundersSection.people.map((founder) => (
              <article className="rounded-[2.2rem] border border-black/10 bg-white p-7 sm:p-10" key={founder.id}>
                <div className="grid h-24 w-24 place-items-center rounded-[1.7rem] bg-graphite text-2xl font-black text-avocado">{founder.id === "rain-chung" ? "RC" : "EM"}</div>
                <h3 className="mt-7 text-3xl font-black tracking-[-0.04em]">{founder.name}</h3>
                <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-forest">{founder.role}</p>
                <address className="mt-7 space-y-3 not-italic">
                  <a className="block rounded-2xl border border-black/8 bg-warm-white px-5 py-4 text-sm font-semibold text-forest transition hover:border-forest/25 hover:bg-forest/5" href={`mailto:${founder.email}`}>
                    <span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-evidence">{labels.email}</span>
                    <span className="mt-1 block break-all">{founder.email}</span>
                  </a>
                  <a
                    className="block rounded-2xl border border-black/8 bg-warm-white px-5 py-4 text-sm font-semibold text-forest transition hover:border-forest/25 hover:bg-forest/5"
                    href={`https://wa.me/${founder.whatsapp.replace(/\D/g, "")}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-evidence">{labels.whatsapp}</span>
                    <span className="mt-1 block">{founder.whatsapp}</span>
                  </a>
                </address>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="AVOCADO.AI" title={page.companyInfoTitle} />
          <div className="mt-10 grid gap-5 rounded-[2.2rem] border border-black/10 bg-white p-7 sm:grid-cols-2 sm:p-10">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-evidence">{page.registrationNumberLabel}</p>
              <p className="mt-3 text-xl font-semibold text-graphite">{page.registrationNumber}</p>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-evidence">{content.contactPage.officeLabel}</p>
              <address className="mt-3 not-italic">
                <p className="text-lg font-semibold text-graphite">{content.contactPage.officeName}</p>
                <p className="mt-2 text-sm leading-7 text-evidence sm:text-base">{content.contactPage.officeAddress}</p>
              </address>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function TrustDetail({ locale, content }: { locale: Locale; content: SiteContent }) {
  const page = content.trustPage;
  return (
    <>
      <PageHero eyebrow={page.eyebrow} summary={page.summary} title={page.title} />
      <section className="soft-grid py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {page.sections.map((section) => <ListCard items={section.items} key={section.title} title={section.title} />)}
          </div>
          <div className="mt-10 rounded-[2rem] border border-signal-amber/25 bg-signal-amber/8 p-7 text-sm leading-7 text-evidence">
            {locale === "zh-Hant" ? "公開 Trust Center 不等於完整稽核證據庫。敏感報告、架構細節與合規文件應在 NDA、身分控管與存取紀錄下分享。" : "A public Trust Center is not a complete audit evidence repository. Sensitive reports, architecture detail, and assurance documents should be shared under NDA, access control, and logging."}
          </div>
        </Container>
      </section>
      <CtaPanel cta={page.cta} description={page.summary} eyebrow="SECURITY REVIEW" locale={locale} title={page.title} />
    </>
  );
}

export function ResourcesDetail({ locale, content }: { locale: Locale; content: SiteContent }) {
  const page = content.resourcesPage;
  const gallery = page.eventGallery;
  return (
    <>
      <PageHero eyebrow={page.eyebrow} summary={page.summary} title={page.title} />
      <section className="soft-grid py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap gap-3">{page.topics.map((topic) => <Tag key={topic}>{topic}</Tag>)}</div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.resources.items.map((item) => (
              <article className="group rounded-[2rem] border border-black/10 bg-white p-7" key={item.title}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-forest">{item.type}</p>
                  {item.status ? <Tag>{item.status}</Tag> : null}
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-evidence">{item.summary}</p>
                {item.href && item.linkLabel ? <a aria-label={`${item.linkLabel}: ${item.title} (${locale === "zh-Hant" ? "於新視窗開啟" : "opens in a new window"})`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-forest group-hover:text-graphite" href={item.href} rel="noreferrer" target="_blank">{item.linkLabel}<ArrowIcon /></a> : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <EventGallery events={gallery.events} eyebrow={gallery.eyebrow} locale={locale} summary={gallery.summary} title={gallery.title} />
      <CtaPanel cta={page.cta} description={page.summary} eyebrow={page.eyebrow} locale={locale} title={page.title} />
    </>
  );
}

export function ContactDetail({ locale, content }: { locale: Locale; content: SiteContent }) {
  const page = content.contactPage;
  const emailIsConfigured = contactEmail.includes("@") && !contactEmail.startsWith("REPLACE_");
  const configuredBookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const booking = bookingUrl(locale);
  const pendingLabel = locale === "zh-Hant" ? "待設定核准聯絡管道" : "Approved contact channel pending";

  return (
    <>
      <PageHero eyebrow={page.eyebrow} summary={page.summary} title={page.title} />
      <section className="soft-grid py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {page.workshops.map((workshop, index) => (
              <article className="rounded-[2rem] border border-black/10 bg-white p-7" key={workshop.title}>
                <p className="font-mono text-xs font-bold text-forest">0{index + 1}</p>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{workshop.title}</h2>
                <p className="mt-4 text-sm leading-7 text-evidence sm:text-base">{workshop.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-5 rounded-[2rem] border border-black/10 bg-[#edf0e8] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{locale === "zh-Hant" ? "聯絡與預約" : "Contact and booking"}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-evidence">{page.privacyNote}</p>
              <address className="mt-6 border-l-2 border-avocado pl-4 not-italic">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-forest">{page.officeLabel}</p>
                <p className="mt-2 text-sm font-semibold text-graphite">{page.officeName}</p>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-evidence">{page.officeAddress}</p>
              </address>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {emailIsConfigured ? (
                <a
                  aria-label={`${page.emailLabel}: ${contactName}, ${contactEmail}`}
                  className="inline-flex min-h-11 flex-col items-start justify-center rounded-2xl bg-graphite px-5 py-3 text-avocado"
                  href={`mailto:${contactEmail}`}
                >
                  <span className="text-sm font-bold">Email · {contactName}</span>
                  <span className="mt-0.5 text-xs font-semibold text-white/70">{contactEmail}</span>
                </a>
              ) : <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-bold text-evidence">{pendingLabel}</span>}
              {configuredBookingUrl ? <a className="inline-flex min-h-11 items-center justify-center rounded-full bg-avocado px-5 py-2.5 text-sm font-bold text-graphite" href={booking}>{page.bookingLabel}</a> : null}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
