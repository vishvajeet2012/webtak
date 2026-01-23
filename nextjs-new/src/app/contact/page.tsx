"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  MessageSquare,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@sveeui.com",
    href: "mailto:hello@sveeui.com",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "San Francisco, CA",
    href: "#",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Fri, 9am-6pm PST",
    href: "#",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="-translate-y-4 animate-fade-in text-5xl font-bold tracking-tight text-black opacity-0 dark:text-white sm:text-6xl">
            Get in Touch
          </h1>
          <p className="-translate-y-4 animate-fade-in text-lg text-gray-500 opacity-0 [--animation-delay:200ms] dark:text-gray-400 mt-6">
            Have a question or want to work together? We&apos;d love to hear from
            you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.href}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-6 text-center",
                "bg-white dark:bg-transparent",
                "transition-all duration-300 hover:shadow-xl",
                "dark:border-white/10 dark:hover:border-white/20"
              )}
            >
              <div
                className={cn(
                  "mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-xl",
                  `bg-gradient-to-r ${info.gradient}`,
                  "text-white shadow-lg"
                )}
              >
                <info.icon className="size-6" />
              </div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {info.title}
              </h3>
              <p className="mt-1 font-semibold text-black dark:text-white">
                {info.value}
              </p>
            </a>
          ))}
        </motion.div>

        {/* Contact Form Section */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)]">
                <MessageSquare className="size-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Send us a message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Map / Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Map placeholder */}
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--color-one)]/10 via-[var(--color-two)]/10 to-[var(--color-three)]/10 p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto size-16 text-[var(--color-one)]" />
                  <p className="mt-4 text-xl font-semibold text-black dark:text-white">
                    San Francisco, CA
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    123 Innovation Street, Suite 456
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Need quick answers?
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Check out our frequently asked questions
              </p>
              <Button variant="outline" className="mt-4" href="#">
                View FAQ
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
