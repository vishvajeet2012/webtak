"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewAboutPageContent } from "@/components/landing/new-about-content";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <NewAboutPageContent />
      <Footer />
    </div>
  );
}
