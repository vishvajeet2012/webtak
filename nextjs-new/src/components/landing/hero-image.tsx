"use client";

import { BorderBeam } from "@/components/magic/border-beam";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative mt-32 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
    >
      <div
        className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
          inView ? "before:animate-image-glow" : ""
        }`}
      >
        <BorderBeam
          size={200}
          duration={12}
          delay={0}
          colorFrom="var(--color-one)"
          colorTo="var(--color-two)"
        />

        <Image
          src="/imgs/hero-dark.png"
          alt="Hero Dark"
          width={1200}
          height={800}
          className="relative hidden size-full rounded-[inherit] border object-contain dark:block"
        />
        <Image
          src="/imgs/hero-light.png"
          alt="Hero Light"
          width={1200}
          height={800}
          className="relative block size-full rounded-[inherit] border object-contain dark:hidden"
        />
      </div>
    </div>
  );
}
