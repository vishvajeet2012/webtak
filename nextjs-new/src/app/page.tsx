import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { ClientSection } from "@/components/landing/client-section";
import { OurWorkSection } from "@/components/landing/our-work-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";
import { SphereMask } from "@/components/magic/sphere-mask";
import { PricingSection } from "@/components/landing/pricing-section";
import { ContactSection } from "@/components/landing/contact-section";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata = {
  title: "Svee UI - Next.js Startup Template",
  description:
    "Next.js Startup Template is a template for building Startup Applications. Built with Next.js, TailwindCSS, and Framer Motion.",
  keywords: "nextjs, tailwindcss, framer-motion, startup, template",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <div className="mx-auto flex-1 overflow-hidden">
        <HeroSection />
        <ClientSection />
        <WhyChooseUsSection />
        <SphereMask />
        <OurWorkSection />
        <PricingSection />
        <CtaSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
