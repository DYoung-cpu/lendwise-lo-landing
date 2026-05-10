import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { companyProfile } from "@/config/company-profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://join.teamlendwise.com"),
  title: companyProfile.meta.title,
  description: companyProfile.meta.description,
  keywords: companyProfile.meta.keywords,
  openGraph: {
    title: companyProfile.meta.ogTitle,
    description: companyProfile.meta.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: companyProfile.meta.ogTitle,
    description: companyProfile.meta.ogDescription,
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
