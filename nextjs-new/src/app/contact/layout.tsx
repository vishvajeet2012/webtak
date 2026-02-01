import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Devlix",
  description:
    "Get in touch with Devlix for your next web development project. We'd love to hear from you.",
  openGraph: {
    title: "Contact Devlix - Let's Build Together",
    description: "Reach out to our team to discuss your digital needs.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
