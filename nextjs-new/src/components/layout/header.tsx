"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlignJustify, XIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { id: 1, label: "Features", href: "#" },
  { id: 2, label: "Pricing", href: "#pricing" },
  { id: 3, label: "About", href: "/about" },
  { id: 4, label: "Team", href: "/team" },
  { id: 5, label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between">
          <Link className="text-md flex items-center font-semibold" href="/">
            Svee UI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6 ml-10">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex h-full items-center">
            <Link className="mr-6 text-sm" href="/signin">
              Log in
            </Link>
            <Button variant="secondary" className="mr-6 text-sm" href="/signup">
              Sign up
            </Button>
          </div>
          <button className="ml-6 md:hidden" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <XIcon strokeWidth={1.4} className="text-gray-300" />
            ) : (
              <AlignJustify strokeWidth={1.4} className="text-gray-300" />
            )}
          </button>
        </div>
      </header>

      <nav
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-full overflow-auto",
          {
            "pointer-events-none": !isOpen,
            "bg-background/70 backdrop-blur-md": isOpen,
          }
        )}
      >
        {isOpen && (
          <>
            <div className="container flex h-14 items-center justify-between">
              <Link className="text-md flex items-center" href="/">
                Svee UI
              </Link>
              <button className="md:hidden" onClick={toggleMenu}>
                <span className="sr-only">Toggle menu</span>
                <XIcon strokeWidth={1.4} className="text-gray-300" />
              </button>
            </div>
            <ul className="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case">
              {menuItems.map((item) => (
                <li key={item.id} className="border-grey-dark border-b py-0.5 pl-6 md:border-none">
                  <Link
                    className="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors"
                    href={item.href}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>
    </>
  );
}
