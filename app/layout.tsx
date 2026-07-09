import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VANI — Enterprise AI Support Team",
  description:
    "VANI is an enterprise AI support team for customer service. Resolve repetitive calls, messages, and inquiries 24/7 while escalating sensitive cases to your best human agents.",
  keywords: [
    "AI customer support",
    "enterprise AI",
    "WhatsApp support automation",
    "call center AI",
    "customer service AI",
    "Saudi Arabia AI",
    "VANI",
  ],
  openGraph: {
    title: "VANI — Enterprise AI Support Team",
    description:
      "AI handles repetition. Humans handle excellence. Built for banks, hospitals, and regulated organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
