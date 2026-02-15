import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/shared/ClientWrapper";
import { personalInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.roles[0]}`,
  description: `Portfolio of ${personalInfo.name}, a ${personalInfo.roles[0]} specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.`,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Web Development",
  ],
  authors: [{ name: personalInfo.name }],
  icons: {
    icon: [
      { url: "/saitejasangisapu.jpg", sizes: "any" },
      { url: "/saitejasangisapu.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/saitejasangisapu.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/saitejasangisapu.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/saitejasangisapu.jpg",
  },
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.roles[0]}`,
    description:
      "Portfolio showcasing modern web applications and full-stack development expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/saitejasangisapu.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/saitejasangisapu.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/saitejasangisapu.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
