import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Devlix",
  description:
    "Learn about Devlix, our story, our team, and our mission to build beautiful digital products.",
  openGraph: {
    title: "About Devlix - Our Story & Team",
    description: "Discover the people and philosophy behind Devlix.",
    images: ["/imgs/about/story.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
