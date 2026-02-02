import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BrandProvider } from "@/context/brand-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crosdev.vercel.app"),
  title: {
    default: "CrosDev - Digital Solutions",
    template: "%s | CrosDev",
  },
  description:
    "We build beautiful products without limits. A premium web development agency specializing in Next.js and digital transformation.",
  keywords: [
    "CrosDev",
    "Web Development",
    "Next.js",
    "React",
    "Digital Agency",
    "Software Solutions",
  ],
  authors: [{ name: "CrosDev Team" }],
  creator: "CrosDev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crosdev.vercel.app",
    title: "CrosDev - Digital Solutions",
    description:
      "We build beautiful products without limits. Transform your digital presence with CrosDev.",
    siteName: "CrosDev",
    images: [
      {
        url: "/devlix-full.png",
        width: 1200,
        height: 630,
        alt: "CrosDev Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrosDev - Digital Solutions",
    description: "We build beautiful products without limits.",
    images: ["/devlix-full.png"],
    creator: "@crosdev",
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
