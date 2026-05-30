import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivian Clarissah Chinoda",
  description:
    "Frontend Developer and Visual Designer — Building digital products, brands, and experience.",
  openGraph: {
    title: "Vivian Clarissah Chinoda",
    description:
      "Frontend Developer and Visual Designer — Building digital products, brands, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
