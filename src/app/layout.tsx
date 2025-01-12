import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELabs Recruitment | 2025",
  description: "Elabs Peer to Peer Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-full min-w-full bg-[linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(181,108,15,1) 100%)] antialiased `}
      >

        <main> {children}</main>
        <Toaster />
      </body>
    </html>
  );
}
