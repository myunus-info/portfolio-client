import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammad Yunus | Full-Stack Software Engineer & Remote Specialist",
  description:
    "Portfolio of Muhammad Yunus, Full-Stack Software Engineer specializing in React, Next.js, Node.js, Express, and PostgreSQL. Open for global remote roles.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Remote Developer",
  ],
  authors: [{ name: "Muhammad Yunus" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
