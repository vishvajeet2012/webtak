"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "A modern, high-performance e-commerce solution with real-time inventory management.",
    link: "#",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Financial Dashboard",
    category: "SaaS Product",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "Interactive analytics dashboard for visualizing complex financial data streams.",
    link: "#",
    tags: ["React", "D3.js", "TypeScript"],
  },
  {
    title: "Healthcare App",
    category: "Mobile Application",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "Secure telemedicine platform connecting patients with certified healthcare providers.",
    link: "#",
    tags: ["React Native", "Node.js", "WebRTC"],
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

export function ProjectCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white dark:bg-transparent dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:border-white/20"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
              {project.title}
            </h3>

            <Link
              href={project.link}
              className="flex items-center gap-2 text-sm font-medium text-black/70 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              View Project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
