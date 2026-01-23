import Image from "next/image";
import Link from "next/link";

const footerNavs = [
  {
    label: "Product",
    items: [
      { href: "/", name: "Email Collection" },
      { href: "/pricing", name: "Pricing" },
      { href: "/faq", name: "FAQ" },
    ],
  },
  {
    label: "Community",
    items: [
      { href: "/", name: "Discord" },
      { href: "/", name: "Twitter" },
      { href: "mailto:hello@chatcollect.com", name: "Email" },
    ],
  },
  {
    label: "Legal",
    items: [
      { href: "/terms", name: "Terms" },
      { href: "/privacy", name: "Privacy" },
    ],
  },
];

const footerSocials = [
  { href: "", name: "Discord", icon: "/imgs/discord.svg" },
  { href: "", name: "Twitter", icon: "/imgs/x.svg" },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-floor-plan size-8"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />
                <path d="M9 3v7" />
                <path d="M21 10h-7" />
                <path d="M3 15h9" />
              </svg>
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Svee UI
              </span>
            </Link>
            <p className="max-w-xs">UI Library for Design Engineers</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-5 sm:mt-0 sm:justify-center">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
              >
                <Image
                  src={social.icon}
                  className="size-4"
                  alt={social.name}
                  width={16}
                  height={16}
                />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Svee UI
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
