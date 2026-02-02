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
  title: "CrosDev - Premier Web Development & Digital Services",
  description:
    "CrosDev is a leading service-based company specializing in high-performance web development, mobile apps, and digital transformation solutions.",
  keywords:
    "crosdev, web development, software agency, digital services, nextjs, react, mobile apps",
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
        {/* <PricingSection /> */}
        <CtaSection />
        {/* <ContactSection /> */}
      </div>
      <Footer />
    </div>
  );
}
