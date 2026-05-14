export const API_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export const ENDPOINTS = {
  BLOGS: `/api/blogs`,
  PAGES: `/api/pages`,
} as const;
