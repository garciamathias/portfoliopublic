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
  title: "Mathias Garcia - AI & Robotics Engineer Portfolio",
  description: "Portfolio of Mathias Garcia, HEC Paris student specializing in AI, Robotics and building AI startups. View projects, experience and get in touch.",
  keywords: ["AI", "Robotics", "Machine Learning", "Portfolio", "HEC Paris", "Startup", "Developer", "Engineer"],
  authors: [{ name: "Mathias Garcia" }],
  creator: "Mathias Garcia",
  openGraph: {
    title: "Mathias Garcia - AI & Robotics Engineer Portfolio",
    description: "Portfolio of Mathias Garcia, HEC Paris student specializing in AI, Robotics and building AI startups.",
    url: "https://mathiasgarcia.com",
    siteName: "Mathias Garcia Portfolio",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Mathias Garcia - AI & Robotics Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias Garcia - AI & Robotics Engineer Portfolio",
    description: "Portfolio of Mathias Garcia, HEC Paris student specializing in AI, Robotics and building AI startups.",
    images: ["/vercel.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
