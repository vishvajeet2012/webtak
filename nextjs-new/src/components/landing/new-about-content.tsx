"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// ... (omitting lines 10-112 to keep concise, assuming tool works on chunks. IF NOT, I need to be more precise.
// Wait, I should do multiple edits to be safe or target specific lines.)
// Let's target specific lines instead of a huge block.

// Skipped replace_file_content call to do multi_replace_file_content instead.

// --- Data & Content ---

const AGENCY_NAME = "Devlix"; // Hardcoded as per instruction ("conext se dekh le likhin ontexrt use mt krna")

const ourStoryContent = {
  heading: "Our Journey",
  text1:
    "We started with a simple belief: great websites should be both beautiful and functional. Our journey began when we combined our complementary skills to create solutions that truly deliver results for our clients.",
  text2:
    "Today, we continue to push boundaries in web development, creating experiences that help our clients stand out in a crowded digital landscape.",
  image: "/imgs/about/story.png", // Updated to use generated image
};

const teamMembers = [
  {
    name: "Rajesh",
    role: "Lead Developer",
    bio: "I handle all aspects of development, from front-end to back-end integration. With expertise in React, Next.js, and modern JavaScript frameworks, I ensure our projects are built with clean, maintainable code that performs exceptionally well.",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Node.js"],
    image: "/imgs/about/rajesh.png",
  },
  {
    name: "Rajib",
    role: "Client Relations Manager",
    bio: "I oversee client relationships and project management. My focus is on understanding client needs, maintaining clear communication throughout projects, and ensuring we exceed expectations with every delivery.",
    skills: [
      "Project Management",
      "Client Relations",
      "Requirements Analysis",
      "Agile Methodology",
    ],
    image: "/imgs/about/rajib.png",
  },
  {
    name: "Bidyadhar",
    role: "SEO & Database Specialist",
    bio: "I specialize in SEO optimization and database architecture. My work ensures our clients' websites rank well in search engines like Google and have robust, efficient database systems that scale with their business growth.",
    skills: ["SEO", "Database Design", "MongoDB", "PostgreSQL", "Analytics"],
    image: "/imgs/about/bidyadhar.png",
  },
];

const approachContent = {
  philosophy: {
    heading: "Our Philosophy",
    text: `At ${AGENCY_NAME}, we believe a great website is more than just code and design—it's a powerful business tool that drives real results. Our approach blends technical excellence with a deep understanding of business objectives, ensuring that every project is not only visually appealing but also strategically effective. We focus on user-centricity, crafting seamless experiences that engage and convert, while maintaining the highest standards of performance, security, and scalability. Every website we build is aligned with our clients' goals, making it a valuable digital asset that contributes to long-term success.`,
  },
  steps: [
    {
      number: "1",
      title: "Discovery",
      description:
        "We begin by deeply understanding your business goals, target audience, and unique needs. This foundational step ensures our solutions are aligned with your objectives from the start.",
    },
    {
      number: "2",
      title: "Strategy & Design",
      description:
        "We craft a strategic approach and design concepts that combine aesthetics with functionality. Our designs are created with both user experience and conversion optimization in mind.",
    },
    {
      number: "3",
      title: "Development & Launch",
      description:
        "Our development process emphasizes clean code, performance, and security. After thorough testing, we launch your site and provide ongoing support to ensure continued success.",
    },
  ],
  footerText:
    "We blend innovation with functionality, ensuring every website we build is visually stunning, high-performing, and aligned with your business goals.",
};

// --- Sub-Components ---

function OurStory() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">
          {ourStoryContent.heading}
        </h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {ourStoryContent.text1}
        </p>
        <p className="text-gray-400 leading-relaxed">{ourStoryContent.text2}</p>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4">
        {/* Using a placeholder for the illustration shown in the screenshot */}
        <div className="aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          <Image
            src="/imgs/about/story.png"
            alt="Our Journey"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

function MeetTheTeam() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
        <p className="text-gray-400">
          We&apos;re a tight-knit team with complementary skills, working
          together to create exceptional digital experiences. Each of us brings
          unique expertise to ensure every aspect of your project is handled
          with precision.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
          >
            <div className="mb-6 relative w-content mx-auto">
              <div className="relative w-48 h-48 mx-auto rounded-xl overflow-hidden border-2 border-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-sm font-semibold text-gray-400 mb-4">
              {member.role}
            </p>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed min-h-[100px]">
              {member.bio}
            </p>

            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 text-gray-500">
              <Github className="size-5 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="size-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="size-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OurApproach() {
  return (
    <div className="animate-fade-in">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start mb-20 animate-fade-in">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4 order-2 lg:order-1">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black">
            <Image
              src="/imgs/about/philosophy.png"
              alt="Our Philosophy"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-white mb-6">
            {approachContent.philosophy.heading}
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
            {approachContent.philosophy.text}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {approachContent.steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#111] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
          >
            <div className="text-lg font-bold text-white/20 mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto">
        {approachContent.footerText}
      </p>
    </div>
  );
}

function ReadyToWork() {
  return (
    <div className="py-20 text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to work with us?
      </h2>
      <p className="text-gray-400 mb-8">
        Let&apos;s collaborate to create a website that perfectly represents
        your brand and helps you achieve your business goals.
      </p>
      <Button className="rounded-full px-8 h-12 text-base font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white">
        Get in Touch
      </Button>
    </div>
  );
}

// --- Main Page Component ---

export function NewAboutPageContent() {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "Our Story" },
    { id: "team", label: "Meet the Team" },
    { id: "approach", label: "Our Approach" },
  ];

  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Our Agency
          </h1>
          <p className="text-gray-400">
            We&apos;re a team of web developers and digital specialists crafting
            impactful digital experiences.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-16 border-b border-white/10">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-4 text-sm font-medium transition-colors relative",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300",
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "story" && <OurStory />}
          {activeTab === "team" && <MeetTheTeam />}
          {activeTab === "approach" && <OurApproach />}
        </div>

        {/* CTA Section (Visible on all tabs) */}
        <ReadyToWork />
      </main>
    </div>
  );
}
