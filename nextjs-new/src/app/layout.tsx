import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BrandProvider } from "@/context/brand-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devlix.com"), // Replace with actual domain when deployed
  title: {
    default: "Devlix - Digital Solutions",
    template: "%s | Devlix",
  },
  description:
    "We build beautiful products without limits. A premium web development agency specializing in Next.js and digital transformation.",
  keywords: [
    "Devlix",
    "Web Development",
    "Next.js",
    "React",
    "Digital Agency",
    "Software Solutions",
  ],
  authors: [{ name: "Devlix Team" }],
  creator: "Devlix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devlix.com",
    title: "Devlix - Digital Solutions",
    description:
      "We build beautiful products without limits. Transform your digital presence with Devlix.",
    siteName: "Devlix",
    images: [
      {
        url: "/devlix-full.png",
        width: 1200,
        height: 630,
        alt: "Devlix Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlix - Digital Solutions",
    description: "We build beautiful products without limits.",
    images: ["/devlix-full.png"],
    creator: "@devlix",
  },
  icons: [
    { rel: "icon", url: "/logo.svg" },
    { rel: "apple-touch-icon", url: "/devlix-icon.png" },
  ],
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
