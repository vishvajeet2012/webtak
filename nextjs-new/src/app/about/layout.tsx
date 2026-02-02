import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CrosDev",
  description:
    "Learn about CrosDev, our story, our team, and our mission to build beautiful digital products.",
  openGraph: {
    title: "About CrosDev - Our Story & Team",
    description: "Discover the people and philosophy behind CrosDev.",
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
