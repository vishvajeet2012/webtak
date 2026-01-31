"use client";

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

export function MobileMenu() {
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
      {/* Mobile Menu Toggle Button */}
      <button className="ml-6 md:hidden" onClick={toggleMenu}>
        <span className="sr-only">Toggle menu</span>
        {isOpen ? (
          <XIcon strokeWidth={1.4} className="text-gray-300" />
        ) : (
          <AlignJustify strokeWidth={1.4} className="text-gray-300" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <nav
        className={cn("fixed left-0 top-0 z-50 h-screen w-full overflow-auto", {
          "pointer-events-none": !isOpen,
          "bg-background/70 backdrop-blur-md": isOpen,
        })}
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
                <li
                  key={item.id}
                  className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
                >
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
