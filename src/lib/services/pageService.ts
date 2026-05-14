import apiClient from '../api';
import { ENDPOINTS } from '../endpoints';
import { PageData, StrapiResponse } from '@/types/strapi';

/**
 * Deep populate query for the Page dynamic zone.
 * Covers all known section types and their nested components.
 */
const PAGE_POPULATE = {
  populate: [
    'seo',
    'seo.ogImage',
    'sections',
    'sections.image',
    'sections.button',
    'sections.button.icon',
    'sections.button.icon.icon',
    'sections.cards',
    'sections.cards.image',
    'sections.cards.button',
    'sections.cards.button.icon',
    'sections.cards.button.icon.icon',
    'sections.features',
    'sections.features.icon',
    'sections.features.icon.icon',
    'sections.features.link',
    'sections.features.link.icon',
    'sections.features.link.icon.icon',
    'sections.viewAllLink',
    'sections.viewAllLink.icon',
    'sections.viewAllLink.icon.icon'
  ]
};

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  try {
    const response = await apiClient.get<StrapiResponse<PageData>>(ENDPOINTS.PAGES, {
      params: {
        'filters[slug][$eq]': slug,
        ...PAGE_POPULATE,
      },
    });

    const pages = response.data?.data;
    if (pages && pages.length > 0) {
      return pages[0];
    }
    return null;
  } catch (error) {
    console.error(`[pageService] Error fetching page "${slug}":`, error);
    return null;
  }
}
