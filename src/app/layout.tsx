import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Define live deployed URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  // Set the metadata base domain
  metadataBase: new URL(baseUrl),
  title: "Portfolio Project - Notion Landing Page Rebuild",
  description:
    "A pixel-accurate Next.js implementation of the Notion homepage, built from Figma.",
  // Instruct Next.js to auto-generate canonical paths for your pages
  alternates: {
    canonical: "/", // This tells Next.js to point to the current root page
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
