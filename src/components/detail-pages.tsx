import Image from "next/image";
import type { Locale, SiteContent, Solution } from "@/types/content";
import { basePath, bookingUrl, contactEmail, contactName } from "@/lib/site";
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
    outcomes: "客戶成果",
    process: "建議導入路徑",
    closeEyebrow: "START WITH A SCOPED WORKSHOP",
    closeDescription: "先確認場域、資料、責任邊界與可驗收成果，再決定導入範圍與服務層級。",
  } : {
    audience: "Who it is for",
    challenges: "Operating challenges",
    capabilities: "Capabilities",
    outcomes: "Customer outcomes",
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
    ["Data Plane", "EDR、NDR、WAF、OT、CTI 與營運資料的接入與正規化"],
    ["Context Plane", "資產、身分、網路、漏洞、業務與場域脈絡"],
    ["AI Reasoning", "事件關聯、風險排序、攻擊故事與調查建議"],
    ["Validation Plane", "情境、BAS、Purple Team、控制驗證與回歸測試"],
    ["Trust & Governance", "Episode Evidence、人工核准、Audit 與改善追蹤"],
  ] : [
    ["Data Plane", "Ingest and normalize EDR, NDR, WAF, OT, CTI, and operational data"],
    ["Context Plane", "Connect assets, identities, networks, vulnerabilities, business, and field context"],
    ["AI Reasoning", "Correlate incidents, prioritize risk, build attack narratives, and recommend investigation"],
    ["Validation Plane", "Run scenarios, BAS, purple-team exercises, control validation, and regression tests"],
    ["Trust & Governance", "Preserve episode evidence, human approval, audit history, and improvement tracking"],
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
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {content.resources.items.map((item) => (
              <article className="rounded-[2rem] border border-black/10 bg-white p-7" key={item.title}>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-forest">{item.type}</p>
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-evidence">{item.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="surface-grid bg-graphite py-20 text-warm-white sm:py-28">
        <Container>
          <SectionHeader description={gallery.summary} eyebrow={gallery.eyebrow} inverse title={gallery.title} />
          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {gallery.images.map((item, index) => (
              <figure
                className={`overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] ${index === 0 ? "lg:col-span-8" : index === 1 ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-4"}`}
                key={item.src}
              >
                <div className={`relative overflow-hidden ${index === 1 ? "aspect-[3/4] lg:h-full lg:min-h-[34rem]" : index === 0 ? "aspect-video" : "aspect-[4/3]"}`}>
                  <Image
                    alt={item.alt}
                    className="object-cover"
                    fill
                    sizes={index === 1 ? "(min-width: 1024px) 33vw, 100vw" : index === 0 ? "(min-width: 1024px) 67vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    src={`${basePath}${item.src}`}
                    unoptimized
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-semibold text-white/68">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
      <CtaPanel cta={page.cta} description={page.summary} eyebrow="INTELLIGENCE & FIELD NOTES" locale={locale} title={page.title} />
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
