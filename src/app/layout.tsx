import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Young | CMO & Partner at LendWise Mortgage",
  description: "David Young - CMO & Partner at LendWise Mortgage Corporation. Your Mortgage. My Mission. Apply for a home loan with personalized service and cutting-edge technology.",
  keywords: "mortgage, home loan, David Young, LendWise, CMO, apply, refinance, purchase",
  openGraph: {
    title: "David Young | LendWise Mortgage",
    description: "Your Mortgage. My Mission. Work directly with a partner for a transparent, fast, and personal lending experience.",
    type: "website",
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
