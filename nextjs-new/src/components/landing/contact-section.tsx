"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !lookingFor || !message) {
      toast.error("All fields are required.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully (Simulation)");
      setName("");
      setEmail("");
      setLookingFor("");
      setMessage("");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-[40px] md:py-[100px]"
    >
      {/* Background Gradient */}
      <div className="absolute left-0 top-0 h-[300px] w-full bg-[linear-gradient(to_right,var(--color-one),transparent)] opacity-20 blur-3xl dark:opacity-10" />

      {/* Mobile Heading */}
      <div className="relative mb-10 flex flex-col gap-4 px-6 md:hidden">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-normal text-black dark:text-white">
          <span className="font-bold">Let&apos;s Get</span>
          <span>In Touch</span>
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Tell us about your project, and we&apos;ll take it from there.
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row lg:gap-20 xl:gap-32">
          {/* Form Card */}
          <div className="w-full shrink-0 rounded-2xl border bg-white p-6 shadow-xl shadow-black/5 dark:bg-black/40 dark:border-white/10 lg:w-[480px] xl:w-[580px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name *"
                    className="h-12 border-0 border-b border-gray-200 bg-transparent px-2 shadow-none focus-visible:ring-0 focus-visible:border-black dark:border-white/20 dark:focus-visible:border-white rounded-none"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Company Email *"
                    type="email"
                    className="h-12 border-0 border-b border-gray-200 bg-transparent px-2 shadow-none focus-visible:ring-0 focus-visible:border-black dark:border-white/20 dark:focus-visible:border-white rounded-none"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="relative w-full">
                <select
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="h-12 w-full appearance-none border-0 border-b border-gray-200 bg-transparent px-2 text-sm text-gray-500 shadow-none focus:ring-0 focus:outline-none dark:border-white/20 dark:text-gray-400 rounded-none cursor-pointer"
                >
                  <option value="" disabled className="bg-white dark:bg-black">
                    What Are You Looking For? *
                  </option>
                  <option
                    value="Web Development"
                    className="bg-white dark:bg-black text-black dark:text-white"
                  >
                    Web Development
                  </option>
                  <option
                    value="Mobile App"
                    className="bg-white dark:bg-black text-black dark:text-white"
                  >
                    Mobile App
                  </option>
                  <option
                    value="UI/UX Design"
                    className="bg-white dark:bg-black text-black dark:text-white"
                  >
                    UI/UX Design
                  </option>
                  <option
                    value="Marketing"
                    className="bg-white dark:bg-black text-black dark:text-white"
                  >
                    Marketing
                  </option>
                  <option
                    value="Other"
                    className="bg-white dark:bg-black text-black dark:text-white"
                  >
                    Other
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message *"
                className="min-h-[120px] resize-none border-0 border-b border-gray-200 bg-transparent px-2 shadow-none focus-visible:ring-0 focus-visible:border-black dark:border-white/20 dark:focus-visible:border-white rounded-none"
                disabled={isSubmitting}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-start mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Now"
                )}
              </Button>
            </form>
          </div>

          {/* Desktop Text Section */}
          <div className="mt-10 hidden flex-1 flex-col items-end gap-6 text-right md:flex lg:mt-20">
            <h2 className="flex flex-col text-4xl font-normal leading-tight text-white dark:text-white lg:text-5xl xl:text-6xl">
              <span className="font-bold text-black dark:text-white">
                Let&apos;s Get
              </span>
              <span className="text-black/60 dark:text-white/60">In Touch</span>
            </h2>

            <p className="max-w-md text-lg text-gray-500 dark:text-gray-400">
              Tell us about your project, and we&apos;ll take it from there. We
              are excited to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
