"use client";

import { cn } from "@/lib/utils";
import {
  Zap,
  Shield,
  Users,
  Clock,
  HeartHandshake,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with performance in mind. Our solutions are optimized for speed and efficiency.",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected.",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "24/7 dedicated support team ready to help you succeed. We're here for you always.",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description:
      "Automate repetitive tasks and focus on what matters most. Save hours every week.",
    gradient: "from-pink-400 via-rose-500 to-red-500",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    description:
      "Trusted by 10,000+ companies worldwide. Join our growing community of success.",
    gradient: "from-violet-400 via-purple-500 to-indigo-500",
  },
  {
    icon: Rocket,
    title: "Scale Easily",
    description:
      "From startup to enterprise, our platform grows with your business needs.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-6",
                "bg-white dark:bg-transparent",
                "transition-all duration-300 hover:shadow-xl hover:shadow-black/5",
                "dark:border-white/10 dark:hover:border-white/20"
              )}
            >
              {/* Background glow */}
              <div
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30",
                  `bg-gradient-to-r ${feature.gradient}`
                )}
              />

              {/* Icon */}
              <div
                className={cn(
                  "mb-4 inline-flex size-12 items-center justify-center rounded-xl",
                  `bg-gradient-to-r ${feature.gradient}`,
                  "text-white shadow-lg"
                )}
              >
                <feature.icon className="size-6" />
              </div>

              {/* Content */}
              <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

              {/* Hover effect line */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full",
                  `bg-gradient-to-r ${feature.gradient}`
                )}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
