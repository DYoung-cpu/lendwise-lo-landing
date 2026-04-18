import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { loProfile } from "@/config/lo-profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orlyhakimi.teamlendwise.com"),
  title: loProfile.meta.title,
  description: loProfile.meta.description,
  keywords: loProfile.meta.keywords,
  openGraph: {
    title: loProfile.meta.ogTitle,
    description: loProfile.meta.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: loProfile.meta.ogTitle,
    description: loProfile.meta.ogDescription,
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
