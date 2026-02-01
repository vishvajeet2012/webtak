import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BrandProvider } from "@/context/brand-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devlix",
  description: "We build beautiful products without limits.",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/devlix-icon.png" },
    { rel: "apple-touch-icon", url: "/devlix-icon.png" },
  ],
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <BrandProvider>{children}</BrandProvider>
      </body>
    </html>
  );
}
