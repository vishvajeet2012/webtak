"use client";

import {
  BarChart,
  ChevronRight,
  File,
  Globe,
  HeartHandshake,
  Rss,
  Shield,
  LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/magic/marquee";
import { CtaCard } from "./cta-card";
import { Button } from "@/components/ui/button";

interface Tile {
  icon: LucideIcon;
  bg: string;
}

const tiles: Tile[] = [
  {
    icon: HeartHandshake,
    bg: "pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]",
  },
  {
    icon: Globe,
    bg: "pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px]",
  },
  {
    icon: File,
    bg: "pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px]",
  },
  {
    icon: Shield,
    bg: "pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px]",
  },
  {
    icon: Rss,
    bg: "pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]",
  },
  {
    icon: BarChart,
    bg: "pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px]",
  },
];

// Pre-shuffled arrays to avoid hydration mismatch
const tiles1 = [tiles[2], tiles[0], tiles[4], tiles[1], tiles[5], tiles[3]];
const tiles2 = [tiles[5], tiles[3], tiles[1], tiles[4], tiles[0], tiles[2]];
const tiles3 = [tiles[1], tiles[4], tiles[0], tiles[3], tiles[2], tiles[5]];
const tiles4 = [tiles[3], tiles[2], tiles[5], tiles[0], tiles[4], tiles[1]];

export function CtaSection() {

  return (
    <section id="cta">
      <div className="py-14">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee reverse className="-delay-[200ms] [--duration:10s]" repeat={5}>
              {tiles1.map((tile, idx) => (
                <CtaCard key={`row1-${idx}`}>
                  <tile.icon className="size-full" />
                  <div className={tile.bg} />
                </CtaCard>
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:25s]" repeat={5}>
              {tiles2.map((tile, idx) => (
                <CtaCard key={`row2-${idx}`}>
                  <tile.icon className="size-full" />
                  <div className={tile.bg} />
                </CtaCard>
              ))}
            </Marquee>
            <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
              {tiles1.map((tile, idx) => (
                <CtaCard key={`row3-${idx}`}>
                  <tile.icon className="size-full" />
                  <div className={tile.bg} />
                </CtaCard>
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {tiles2.map((tile, idx) => (
                <CtaCard key={`row4-${idx}`}>
                  <tile.icon className="size-full" />
                  <div className={tile.bg} />
                </CtaCard>
              ))}
            </Marquee>
            <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
              {tiles3.map((tile, idx) => (
                <CtaCard key={`row5-${idx}`}>
                  <tile.icon className="size-full" />
                  <div className={tile.bg} />
                </CtaCard>
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {tiles4.map((tile, idx) => (
                <CtaCard key={`row6-${idx}`}>
                  <tile.icon className="size-full" />
                  <div className={tile.bg} />
                </CtaCard>
              ))}
            </Marquee>
            <div className="absolute z-10">
              <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
                <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24" />
              </div>
              <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
                <h1 className="text-3xl font-bold lg:text-4xl">
                  Stop wasting time on design.
                </h1>
                <p className="mt-2">
                  Start your 7-day free trial. No credit card required.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  href="#"
                  className="group mt-4 rounded-[2rem] px-6"
                >
                  Get Started
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="bg-backtround absolute inset-0 -z-10 rounded-full opacity-40 blur-xl dark:bg-background" />
            </div>
            <div className="to-backtround absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70% dark:to-background" />
          </div>
        </div>
      </div>
    </section>
  );
}
