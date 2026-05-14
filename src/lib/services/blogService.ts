import apiClient from '../api';
import { ENDPOINTS } from '../endpoints';
import { StrapiBlog, StrapiResponse } from '@/types/strapi';

const BLOG_POPULATE = {
  populate: ['seo', 'seo.ogImage', 'coverImage', 'category']
};

export async function getBlogs(
  page: number = 1,
  pageSize: number = 9,
  featuredOnly: boolean = false
): Promise<StrapiResponse<StrapiBlog>> {
  try {
    const params: Record<string, string | number | boolean | string[]> = {
      ...BLOG_POPULATE,
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
      'sort': 'publishedAt:desc',
    };

    const response = await apiClient.get<StrapiResponse<StrapiBlog>>(
      ENDPOINTS.BLOGS,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error('[blogService] Error fetching blogs:', error);
    return {
      data: [],
      meta: { pagination: { page: 1, pageSize, pageCount: 0, total: 0 } },
    };
  }
}

export async function getBlogBySlug(slug: string): Promise<StrapiBlog | null> {
  try {
    const response = await apiClient.get<StrapiResponse<StrapiBlog>>(
      ENDPOINTS.BLOGS,
      {
        params: {
          'filters[slug][$eq]': slug,
          populate: ['seo', 'seo.ogImage', 'coverImage'],
        },
      }
    );

    const data = response.data;
    if (data?.data && data.data.length > 0) {
      return data.data[0];
    }
    return null;
  } catch (error) {
    console.error(`[blogService] Error fetching blog "${slug}":`, error);
    return null;
  }
}
