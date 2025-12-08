import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Bg from "@/components/layout/Bg";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Side from "@/components/layout/Side";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김별이 연구소",
  description: "김별이 포트폴리오입니다.",
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
        <Bg>
          <Side />
          {children}
          <Footer />
        </Bg>
      </body>
    </html>
  );
}
