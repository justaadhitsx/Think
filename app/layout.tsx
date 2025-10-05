import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  LXGW_WenKai_TC,
  Nanum_Gothic,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const wenkai = LXGW_WenKai_TC({
  variable: "--font-wenkai",
  subsets: ["latin"],
  weight: ["400"],
});

const nanumGothic = Nanum_Gothic({
  variable: "--font-nanum",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Think",
  description: "The web app that helps you live like a monk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wenkai.variable} ${nanumGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
