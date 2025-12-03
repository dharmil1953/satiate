import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { robotoCondensed } from "@/components/lib/fonts";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  title: "SATIATE",
  description: "Weight Maintenance Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoCondensed.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
