import { ArrowRightIcon } from "lucide-react";
import { AnimatedShinyText } from "@/components/magic/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { MagicButton } from "@/components/ui/magic-button";
import { HeroImage } from "./hero-image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] group inline-flex h-7 -translate-y-4 animate-fade-in items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black">
        <AnimatedShinyText className="inline-flex items-center justify-center">
          <span>✨ Premium Web Development Services</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
      <h1 className="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
        Website Services
      </h1>
      <p className="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        We craft stunning, high-performance websites that captivate,
        <br className="hidden md:block" /> convert, and elevate your online
        presence.
      </p>
      <div className="-translate-y-4 animate-fade-in flex items-center justify-center gap-4 opacity-0 [--animation-delay:600ms]">
        <MagicButton href="/contact">Book a Call</MagicButton>
        <Button variant="outline" className="gap-1 rounded-lg" href="/about">
          <span>Learn More</span>
        </Button>
      </div>

      {/* Hero Image - Client Component */}
      <HeroImage />
    </section>
  );
}
