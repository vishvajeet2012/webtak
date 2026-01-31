"use client";

import { cn } from "@/lib/utils";
import {
  Sparkles,
  Search,
  Smartphone,
  Zap,
  Accessibility,
  HeadphonesIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Minimal Design",
    description:
      "Clean aesthetics that put your content in the spotlight. We eliminate unnecessary elements to create a focused user experience with intentional whitespace and balanced typography.",
    gradient: "from-slate-400 via-gray-500 to-zinc-600",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Built to help your site rank higher in search results. We implement semantic HTML, optimized metadata, clean URLs, and performance optimization for better visibility.",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description:
      "Flawless experiences across all devices and screen sizes. We use flexible layouts, fluid grids, and media queries for seamless desktop, tablet, and mobile experiences.",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Lightning-quick load times for smooth user interactions. We optimize images, leverage caching, minimize HTTP requests, and implement code splitting for speed.",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Inclusive design practices for all users. Our designs follow WCAG guidelines with proper contrast, keyboard navigation, and screen reader compatibility.",
    gradient: "from-violet-400 via-purple-500 to-indigo-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Modern Technology",
    description:
      "Built with the latest frameworks and technologies. We use Next.js, React, TypeScript, and modern tools to create future-proof websites that stay ahead of the curve.",
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

export function WhyChooseUsCards() {
  return (
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
            "dark:border-white/10 dark:hover:border-white/20",
          )}
        >
          {/* Background glow */}
          <div
            className={cn(
              "pointer-events-none absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30",
              `bg-gradient-to-r ${feature.gradient}`,
            )}
          />

          {/* Icon */}
          <div
            className={cn(
              "mb-4 inline-flex size-12 items-center justify-center rounded-xl",
              `bg-gradient-to-r ${feature.gradient}`,
              "text-white shadow-lg",
            )}
          >
            <feature.icon className="size-6" />
          </div>

          {/* Content */}
          <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
            {feature.title}
          </h4>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
            {feature.description}
          </p>

          {/* Hover effect line */}
          <div
            className={cn(
              "absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full",
              `bg-gradient-to-r ${feature.gradient}`,
            )}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
