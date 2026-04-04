import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { recruitConfig } from "@/config/recruit-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamlendwise.com"),
  title: recruitConfig.meta.title,
  description: recruitConfig.meta.description,
  keywords: recruitConfig.meta.keywords,
  openGraph: {
    title: recruitConfig.meta.ogTitle,
    description: recruitConfig.meta.ogDescription,
    type: "website",
    images: [{ url: "/images/og-preview.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: recruitConfig.meta.ogTitle,
    description: recruitConfig.meta.ogDescription,
    images: ["/images/og-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
