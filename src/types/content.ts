export const locales = ["zh-Hant", "en"] as const;
export type Locale = (typeof locales)[number];

export type Cta = {
  label: string;
  href: string;
};

export type NavItem = Cta;

export type IconName =
  | "signal"
  | "layers"
  | "validation"
  | "evidence"
  | "deployment"
  | "approval"
  | "shield";

export type CardItem = {
  title: string;
  description: string;
  icon: IconName;
};

export type PlatformStep = {
  number: string;
  title: string;
  description: string;
};

export type ProductFamilyItem = {
  id: "agent-assurance" | "security-operations" | "validation-evidence";
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

export type Solution = {
  slug: "managed-security" | "fab-intelligence" | "healthcare-resilience";
  kicker: string;
  title: string;
  homeSummary: string;
  pageSummary: string;
  audiences: string[];
  challenges: string[];
  capabilities: string[];
  outcomes: string[];
  process: string[];
  cta: Cta;
};

export type AgentModule = {
  id: "assess" | "validate" | "gate" | "lens";
  category: string;
  maturity: "available-service" | "design-partner" | "closed-beta-roadmap" | "research-option";
  status: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type CaseStudy = {
  id: "regional-hospital-edr" | "semiconductor-ot-energy" | "smb-supply-chain";
  evidenceStatus: "delivery-pattern" | "poc-evidence-model" | "service-blueprint";
  claimIds: string[];
  sector: string;
  status: string;
  title: string;
  summary: string;
  highlights: string[];
  challenge: string;
  approach: string[];
  outcomes: string[];
};

export type Founder = {
  id: "rain-chung" | "eric-mao";
  name: string;
  localName: string;
  role: string;
  email: string;
  whatsapp: string;
  shortBio: string;
  domains: string[];
};

export type ResourceItem = {
  type: string;
  status?: string;
  title: string;
  summary: string;
  href?: string;
  linkLabel?: string;
};

export type TechnologyItem = {
  id: string;
  category: string;
  maturity: "open-source-mvp" | "public-research-artifact" | "research-preview" | "lab-baseline";
  status: string;
  title: string;
  description: string;
  proof: string;
  href?: string;
  linkLabel?: string;
};

export type MediaItem = {
  src: string;
  alt: string;
  caption: string;
};

export type EventRecord = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  images: MediaItem[];
};

export type Principle = {
  title: string;
  description: string;
};

export type TrustSection = {
  title: string;
  items: string[];
};

export type Workshop = {
  title: string;
  description: string;
};

export type SiteContent = {
  meta: { title: string; description: string };
  navigation: {
    menuLabel: string;
    localeLabel: string;
    items: NavItem[];
    customerLogin: Cta;
    primaryCta: Cta;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    visualInputLabel: string;
    visualInputs: string[];
    visualCoreLabel: string;
    visualCoreCaption: string;
    visualOutputs: string[];
  };
  proof: { label: string; items: string[] };
  productFamily: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProductFamilyItem[];
  };
  problem: { eyebrow: string; title: string; description: string; items: CardItem[] };
  platform: {
    eyebrow: string;
    title: string;
    description: string;
    steps: PlatformStep[];
    highlight: string;
    cta: Cta;
  };
  agentAssurance: {
    eyebrow: string;
    title: string;
    description: string;
    modules: AgentModule[];
    cta: Cta;
  };
  technology: {
    eyebrow: string;
    title: string;
    description: string;
    featuredIds: string[];
    cta: Cta;
  };
  solutionsSection: { eyebrow: string; title: string; description: string };
  solutions: Solution[];
  caseStudies: { eyebrow: string; title: string; description: string; items: CaseStudy[]; cta: Cta };
  foundersSection: {
    eyebrow: string;
    title: string;
    description: string;
    bridgeLabel: string;
    cta: Cta;
    people: Founder[];
  };
  integrations: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    statement: string;
  };
  trust: { eyebrow: string; title: string; description: string; items: CardItem[]; cta: Cta };
  resources: {
    eyebrow: string;
    title: string;
    description: string;
    items: ResourceItem[];
    cta: Cta;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  footer: { tagline: string; links: NavItem[] };
  platformPage: {
    eyebrow: string;
    title: string;
    summary: string;
    principlesTitle: string;
    principles: Principle[];
    capabilitiesTitle: string;
    capabilitiesDescription: string;
    capabilities: Principle[];
    architectureTitle: string;
    architectureDescription: string;
    cta: Cta;
  };
  agentAssurancePage: {
    eyebrow: string;
    title: string;
    summary: string;
    problemTitle: string;
    problemDescription: string;
    problems: CardItem[];
    journeyTitle: string;
    journeyDescription: string;
    architectureTitle: string;
    architectureDescription: string;
    architectureSteps: PlatformStep[];
    audienceTitle: string;
    audiences: string[];
    boundaryTitle: string;
    boundaries: string[];
    cta: Cta;
  };
  caseStudiesPage: {
    eyebrow: string;
    title: string;
    summary: string;
    challengeLabel: string;
    approachLabel: string;
    outcomesLabel: string;
    cta: Cta;
  };
  technologyPage: {
    eyebrow: string;
    title: string;
    summary: string;
    thesisTitle: string;
    thesisDescription: string;
    architectureTitle: string;
    architectureDescription: string;
    architectureSteps: PlatformStep[];
    portfolioTitle: string;
    portfolioDescription: string;
    items: TechnologyItem[];
    maturityTitle: string;
    maturityDescription: string;
    maturityLevels: Principle[];
    cta: Cta;
  };
  foundersPage: {
    eyebrow: string;
    title: string;
    summary: string;
    leadershipTitle: string;
    companyInfoTitle: string;
    registrationNumberLabel: string;
    registrationNumber: string;
  };
  trustPage: {
    eyebrow: string;
    title: string;
    summary: string;
    sections: TrustSection[];
    cta: Cta;
  };
  resourcesPage: {
    eyebrow: string;
    title: string;
    summary: string;
    topics: string[];
    eventGallery: {
      eyebrow: string;
      title: string;
      summary: string;
      events: EventRecord[];
    };
    cta: Cta;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    summary: string;
    workshops: Workshop[];
    privacyNote: string;
    officeLabel: string;
    officeName: string;
    officeAddress: string;
    emailLabel: string;
    bookingLabel: string;
  };
};
