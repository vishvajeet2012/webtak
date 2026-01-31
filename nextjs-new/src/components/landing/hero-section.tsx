import { ArrowRightIcon } from "lucide-react";
import { AnimatedShinyText } from "@/components/magic/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { HeroImage } from "./hero-image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] group inline-flex h-7 -translate-y-4 animate-fade-in items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black">
        <AnimatedShinyText className="inline-flex items-center justify-center">
          <span>✨ Introducing Svee UI Template</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
      <h1 className="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
        Svee UI is the new way
        <br className="hidden md:block" /> to build landing pages.
      </h1>
      <p className="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        Beautifully designed, animated components and templates built with
        <br className="hidden md:block" /> Tailwind CSS,{" "}
        <a href="https://nextjs.org" className="underline underline-offset-2">
          Next.js
        </a>
        , and{" "}
        <a
          href="https://www.framer.com/motion/"
          className="underline underline-offset-2"
        >
          Framer Motion
        </a>
        .
      </p>
      <Button className="-translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
        <span>Get Started for free </span>
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>

      {/* Hero Image - Client Component */}
      <HeroImage />
    </section>
  );
}
