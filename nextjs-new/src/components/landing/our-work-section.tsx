import { ProjectCards } from "./project-cards";

export function OurWorkSection() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-one)]">
            Our Work
          </h2>
          <h3 className="mt-2 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Selected Projects
          </h3>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            A glimpse into the innovative solutions we&apos;ve crafted for our
            clients. We turn complex challenges into elegant, functional digital
            products.
          </p>
        </div>

        {/* Project Cards - Client Component */}
        <ProjectCards />
      </div>
    </section>
  );
}
