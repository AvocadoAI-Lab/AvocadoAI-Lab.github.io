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

export type FieldProofItem = {
  sector: string;
  status: string;
  title: string;
  description: string;
  highlights: string[];
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
  title: string;
  summary: string;
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
    visualCoreLabel: string;
    visualCoreCaption: string;
    visualOutputs: string[];
  };
  proof: { label: string; items: string[] };
  problem: { eyebrow: string; title: string; description: string; items: CardItem[] };
  platform: {
    eyebrow: string;
    title: string;
    description: string;
    steps: PlatformStep[];
    highlight: string;
    cta: Cta;
  };
  solutionsSection: { eyebrow: string; title: string; description: string };
  solutions: Solution[];
  fieldProof: { eyebrow: string; title: string; description: string; items: FieldProofItem[] };
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
  footer: { tagline: string; note: string; links: NavItem[] };
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
