import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import CustomCursor from "@/components/shared/CustomCursor";
import SmoothScroll from "@/components/shared/SmoothScroll";
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
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Web Development"],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.roles[0]}`,
    description: "Portfolio showcasing modern web applications and full-stack development expertise",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <Navigation />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
