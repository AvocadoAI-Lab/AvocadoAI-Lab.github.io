import type { Locale } from "@/types/content";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.avocadolab.ai";
export const contactName = process.env.NEXT_PUBLIC_CONTACT_NAME || "Rain Chung";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "rain.chung@mail.avocadolab.ai";

export function bookingUrl(locale: Locale): string {
  return process.env.NEXT_PUBLIC_BOOKING_URL || `/${locale}/contact`;
}

export function customerPortalUrl(): string {
  return process.env.NEXT_PUBLIC_CUSTOMER_PORTAL_URL || "https://sensel.avocadolab.ai/dashboard/smb-portal";
}
