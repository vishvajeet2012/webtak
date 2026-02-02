import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | CrosDev",
  description:
    "Explore our portfolio of successful projects and digital solutions delivered for clients worldwide.",
  openGraph: {
    title: "Our Work - CrosDev Portfolio",
    description:
      "See how we help businesses transform with cutting-edge web development.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
