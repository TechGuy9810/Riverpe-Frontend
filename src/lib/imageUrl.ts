import { API_BASE_URL } from "./endpoints";

/**
 * Intelligently resolves Strapi image URLs.
 * - If the URL is already an absolute external path (Cloudinary, AWS S3, etc.), returns it directly.
 * - Strips any trailing `/api` from API_BASE_URL to correctly target the root server host for `/uploads/...`.
 * - Prevents double slash issues.
 */
export function getStrapiImageUrl(url?: string | null): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;

  // Clean the base URL to target the host root instead of /api endpoints
  const cleanBase = API_BASE_URL.replace(/\/api\/?$/, "").replace(/\/+$/, "");
  const cleanUrl = url.startsWith("/") ? url : `/${url}`;

  return `${cleanBase}${cleanUrl}`;
}
