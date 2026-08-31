import type { ReactNode } from "react";
import { locales } from "@/types/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
