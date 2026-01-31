import { WhyChooseUsCards } from "./why-choose-us-cards";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-one)]">
            Why Choose Us
          </h2>
          <h3 className="mt-2 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Everything you need to succeed
          </h3>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            We provide the tools and support you need to build, grow, and scale
            your business with confidence.
          </p>
        </div>

        {/* Animated Cards - Client Component */}
        <WhyChooseUsCards />
      </div>
    </section>
  );
}
