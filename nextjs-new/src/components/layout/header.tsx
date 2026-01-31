import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const menuItems = [
  { id: 1, label: "Features", href: "#" },
  { id: 2, label: "Pricing", href: "#pricing" },
  { id: 3, label: "About", href: "/about" },
  { id: 4, label: "Team", href: "/team" },
  { id: 5, label: "Contact", href: "/contact" },
];

export function Header() {
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

          {/* Mobile Menu - Client Component */}
          <MobileMenu />
        </div>
      </header>
    </>
  );
}
