"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProjectCards } from "@/components/landing/project-cards";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="-translate-y-4 animate-fade-in text-5xl font-bold tracking-tight text-black opacity-0 dark:text-white sm:text-6xl">
            Our Work
          </h1>
          <p className="-translate-y-4 animate-fade-in text-lg text-gray-500 opacity-0 [--animation-delay:200ms] dark:text-gray-400 mt-6">
            A showcase of our best projects and digital experiences.
          </p>
        </div>

        <ProjectCards />
      </main>
      <Footer />
    </div>
  );
}
