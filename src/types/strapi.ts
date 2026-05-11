export interface StrapiBlog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any[];
  seoTitle?: string;
  seoDescription?: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}
