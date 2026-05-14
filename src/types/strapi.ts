// ─── Primitives ─────────────────────────────────────────────────────────────

export interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

// ─── SEO ─────────────────────────────────────────────────────────────────────

export interface StrapiSeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  canonicalURL?: string;
  ogTitle?: string;
  ogImage?: StrapiMedia[];
  metaRobots?: string;
}

// ─── Icon Component ───────────────────────────────────────────────────────────

export type IconSize = 'sm' | 'md' | 'lg';

export interface IconData {
  id?: number;
  icon?: StrapiMedia;
  alt?: string;
  size?: IconSize;
}

// ─── Button Component ─────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonData {
  id?: number;
  label: string;
  href?: string;
  variant?: ButtonVariant;
  openInNewTab?: boolean;
  icon?: IconData;
}

// ─── Feature Card (used inside feature-grid) ─────────────────────────────────

export interface FeatureCard {
  id: number;
  title: string;
  descriptions?: string;
  link?: ButtonData;
  icon?: IconData;
}

// ─── CTA Card (used inside cta-banner) ───────────────────────────────────────

export interface CtaCard {
  id: number;
  title: string;
  description?: string;
  image?: StrapiMedia;
  button?: ButtonData;
}

// ─── Section Types ────────────────────────────────────────────────────────────

export type StrapiBlock = {
  type: string;
  level?: number;
  format?: string;
  children?: Array<{ type: string; text?: string; url?: string; children?: any[] }>;
};

export interface HeroSection {
  __component: 'sections.hero';
  id: number;
  title: string;
  subTitle?: string;
  description?: StrapiBlock[] | null;
  image?: StrapiMedia[];
  layout?: 'center' | 'left' | 'right';
  button?: ButtonData[];
}

export interface CtaBannerSection {
  __component: 'sections.cta-banner';
  id: number;
  title?: string;
  description?: string;
  cards?: CtaCard[];
}

export type FeatureGridVariant = 'simple-grid' | 'split-stats';

export interface FeatureGridSection {
  __component: 'sections.feature-grid';
  id: number;
  title?: string;
  description?: StrapiBlock[];
  features?: FeatureCard[];
  variant?: FeatureGridVariant;
}

export interface BlogGridSection {
  __component: 'sections.blog-grid';
  id: number;
  title?: string;
  description?: string;
  limit?: number;
  showFeaturedOnly?: boolean;
  viewAllLink?: ButtonData;
}

export interface CtaSectionData {
  __component: 'sections.cta-section';
  id: number;
  title?: string;
  subtitle?: string;
  button?: ButtonData[];
}

export type PageSection =
  | HeroSection
  | CtaBannerSection
  | FeatureGridSection
  | BlogGridSection
  | CtaSectionData;

// ─── Page Collection ──────────────────────────────────────────────────────────

export interface PageData {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo?: StrapiSeo;
  sections: PageSection[];
}

// ─── Blog Collection ──────────────────────────────────────────────────────────

export interface BlogCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface StrapiBlog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: StrapiBlock[];
  seo?: StrapiSeo;
  coverImage?: StrapiMedia;
  category?: BlogCategory;
  readingTime?: number;
  featured?: boolean;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// ─── Generic Strapi Response ──────────────────────────────────────────────────

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}
