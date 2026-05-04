import { ThemeProvider } from "./components/theme-provider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "./components/navbar/app-navbar";
import SmoothScroll from "./components/smooth-scroll";
import PageTransition from "./components/page-transition";
import CollaborativeCursors from "./components/collaborative-cursors";
import { LanguageProvider } from "./components/language-provider";
import { SITE_IDENTITY } from "@/app/data/site-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_IDENTITY.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE_IDENTITY.name} | ${SITE_IDENTITY.role}`,
  description:
    "Software developer portfolio with selected projects in frontend, backend, and product-focused delivery.",
  icons: {
    icon: "/ef-mark-light.svg",
  },
  openGraph: {
    title: `${SITE_IDENTITY.name} | ${SITE_IDENTITY.role}`,
    description:
      "Selected work across interfaces, APIs, production systems, and public projects.",
    images: "/ef-og.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_IDENTITY.name} | ${SITE_IDENTITY.role}`,
    description:
      "Selected work across interfaces, APIs, production systems, and public projects.",
    images: ["/ef-og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <AppNavbar />
            <CollaborativeCursors />
            <SmoothScroll>
              <PageTransition>{children}</PageTransition>
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
