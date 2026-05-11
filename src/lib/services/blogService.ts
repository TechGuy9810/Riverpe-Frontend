import apiClient from '../api';
import { ENDPOINTS } from '../endpoints';
import { StrapiBlog, StrapiResponse } from '@/types/strapi';

export async function getBlogs(page: number = 1): Promise<StrapiResponse<StrapiBlog>> {
  try {
    const response = await apiClient.get<StrapiResponse<StrapiBlog>>(ENDPOINTS.BLOGS, {
      params: {
        populate: '*',
        'pagination[page]': page,
        'pagination[pageSize]': 9, // Let's set a reasonable page size
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching blogs from Strapi:', error);
    // Return empty payload on error so page doesn't crash completely
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

export async function getBlogBySlug(slug: string): Promise<StrapiBlog | null> {
  try {
    const response = await apiClient.get<StrapiResponse<StrapiBlog>>(ENDPOINTS.BLOGS, {
      params: {
        'filters[slug][$eq]': slug,
        populate: '*',
      },
    });

    const data = response.data;

    if (data?.data && data.data.length > 0) {
      return data.data[0];
    }

    return null;
  } catch (error) {
    console.error(`Error fetching blog ${slug} from Strapi:`, error);
    return null;
  }
}
