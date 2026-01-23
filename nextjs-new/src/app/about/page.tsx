"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "50+", label: "Team Members" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description:
      "We're on a mission to democratize design and make beautiful products accessible to everyone.",
    gradient: "from-orange-500 via-rose-500 to-purple-500",
  },
  {
    icon: Eye,
    title: "Vision Forward",
    description:
      "We envision a world where anyone can create stunning digital experiences without barriers.",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Every decision we make starts with our customers. Their success is our success.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description:
      "We hold ourselves to the highest standards and never compromise on quality.",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started with a dream and a laptop" },
  { year: "2021", title: "First 1000 Users", description: "Reached our first milestone" },
  { year: "2022", title: "Series A Funding", description: "Raised $10M to scale" },
  { year: "2023", title: "Global Expansion", description: "Launched in 50+ countries" },
  { year: "2024", title: "10K Customers", description: "Trusted by thousands worldwide" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="-translate-y-4 animate-fade-in text-5xl font-bold tracking-tight text-black opacity-0 dark:text-white sm:text-6xl">
            About Us
          </h1>
          <p className="-translate-y-4 animate-fade-in text-lg text-gray-500 opacity-0 [--animation-delay:200ms] dark:text-gray-400 mt-6">
            We&apos;re building the future of design tools. Our mission is to empower
            creators, designers, and developers to build beautiful products
            without limits.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-one)] via-[var(--color-two)] to-[var(--color-three)]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="mt-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white">
                Our Story
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Founded in 2020, we started with a simple idea: make design
                accessible to everyone. What began as a side project has grown
                into a platform trusted by thousands of creators worldwide.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Today, we&apos;re a diverse team of designers, engineers, and
                dreamers united by a shared passion for beautiful, functional
                design. We believe that great design shouldn&apos;t be limited to
                those with years of experience – it should be available to
                anyone with a vision.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-one)] via-[var(--color-two)] to-[var(--color-three)] opacity-20 blur-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex size-16 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                    <Sparkles className="size-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black dark:text-white">
                      10,000+
                    </div>
                    <div className="text-sm text-gray-500">
                      Projects Created
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex size-16 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--color-two)] to-[var(--color-three)]">
                    <Users className="size-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black dark:text-white">
                      50+
                    </div>
                    <div className="text-sm text-gray-500">
                      Countries Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold text-black dark:text-white">
            Our Values
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border p-6",
                  "bg-white dark:bg-transparent",
                  "transition-all duration-300 hover:shadow-xl",
                  "dark:border-white/10 dark:hover:border-white/20"
                )}
              >
                <div
                  className={cn(
                    "mb-4 inline-flex size-12 items-center justify-center rounded-xl",
                    `bg-gradient-to-r ${value.gradient}`,
                    "text-white shadow-lg"
                  )}
                >
                  <value.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold text-black dark:text-white">
            Our Journey
          </h2>
          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[var(--color-one)] via-[var(--color-two)] to-[var(--color-three)]" />
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative flex items-center",
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                  )}
                >
                  <div
                    className={cn(
                      "w-5/12 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
                      idx % 2 === 0 ? "text-right mr-8" : "text-left ml-8"
                    )}
                  >
                    <div className="text-sm font-bold text-[var(--color-one)]">
                      {milestone.year}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-black dark:text-white">
                      {milestone.title}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {milestone.description}
                    </div>
                  </div>
                  <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
