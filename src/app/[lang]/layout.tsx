import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import {Language, languages} from "@/app/[lang]/languages";

// TODO: add fonts

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  }
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: "#030403"
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export interface LangParams {
  lang: Language
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<LangParams>
}>) {
  return (
    <html lang={(await params).lang}>
      <body>{children}</body>
    </html>
  )
}
