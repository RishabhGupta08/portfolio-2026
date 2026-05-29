import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishabh Gupta | Frontend Engineer & UI Architect",
  description:
    "Portfolio of Rishabh Gupta, a Frontend UI Developer specializing in modern web architecture, React, and performance optimization.",
  keywords: [
    "Frontend Developer",
    "UI Architect",
    "React",
    "Next.js",
    "Software Engineer",
    "Roorkee",
    "India",
  ],
  openGraph: {
    title: "Rishabh Gupta | Frontend Engineer",
    description:
      "Explore my enterprise frontend architecture, performance optimizations, and UI case studies.",
    url: "https://your-future-domain.com", // We will update this in Phase 3
    siteName: "Rishabh Gupta Portfolio",
    images: [
      {
        url: "/og-image.jpg", // This points to the image in the public folder
        width: 1200,
        height: 630,
        alt: "Rishabh Gupta Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Gupta | Frontend Engineer",
    description:
      "Explore my enterprise frontend architecture, performance optimizations, and UI case studies.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-sans ${inter.className}`}>{children}</body>
    </html>
  );
}
