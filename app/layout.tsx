import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";

import { profile } from "@/lib/content";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });

const description = `${profile.title}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Satyam Sharma",
  description,
  openGraph: { title: "Satyam Sharma", description, url: profile.siteUrl, type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geist.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
