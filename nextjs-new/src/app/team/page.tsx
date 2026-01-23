"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "10+ years experience in tech leadership. Previously led product at Fortune 500 companies.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    gradient: "from-orange-500 via-rose-500 to-purple-500",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack engineer with expertise in scalable systems. Stanford CS graduate.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Award-winning designer with a passion for creating beautiful user experiences.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    name: "David Kim",
    role: "Lead Engineer",
    bio: "Backend specialist with deep knowledge in cloud infrastructure and DevOps.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    name: "Anna Williams",
    role: "Product Manager",
    bio: "Strategic thinker focused on delivering value to customers and stakeholders.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    name: "James Thompson",
    role: "Marketing Director",
    bio: "Growth hacker with proven track record of scaling startups from 0 to millions.",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
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

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="-translate-y-4 animate-fade-in text-5xl font-bold tracking-tight text-black opacity-0 dark:text-white sm:text-6xl">
            Meet Our Team
          </h1>
          <p className="-translate-y-4 animate-fade-in text-lg text-gray-500 opacity-0 [--animation-delay:200ms] dark:text-gray-400 mt-6">
            We are a passionate team of innovators, designers, and engineers
            dedicated to building the future of technology.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-6",
                "bg-white dark:bg-transparent",
                "transition-all duration-300 hover:shadow-2xl hover:shadow-black/10",
                "dark:border-white/10 dark:hover:border-white/20"
              )}
            >
              {/* Background glow */}
              <div
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20",
                  `bg-gradient-to-r ${member.gradient}`
                )}
              />

              {/* Profile Image */}
              <div className="relative mb-6 overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    `bg-gradient-to-r ${member.gradient}`
                  )}
                  style={{ padding: "2px" }}
                />
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="mx-auto size-32 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {member.name}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-sm font-medium bg-clip-text text-transparent",
                    `bg-gradient-to-r ${member.gradient}`
                  )}
                >
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 transition-colors hover:text-[var(--color-one)]"
                  >
                    <Twitter className="size-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 transition-colors hover:text-[var(--color-two)]"
                  >
                    <Linkedin className="size-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 transition-colors hover:text-[var(--color-three)]"
                  >
                    <Github className="size-5" />
                  </a>
                </div>
              </div>

              {/* Hover effect line */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full",
                  `bg-gradient-to-r ${member.gradient}`
                )}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Join Us Section */}
        <div className="mt-32 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-r from-[var(--color-one)]/10 via-[var(--color-two)]/10 to-[var(--color-three)]/10 p-12">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Join Our Team
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We&apos;re always looking for talented individuals to join our mission.
              Check out our open positions and become part of something amazing.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-one)] via-[var(--color-two)] to-[var(--color-three)] px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
