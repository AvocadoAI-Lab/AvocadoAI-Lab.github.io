import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Avocado.ai",
    template: "%s | Avocado.ai",
  },
  description: "AI-native Security Operations & Validation Platform",
  applicationName: "Avocado.ai",
  category: "technology",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#101714",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
