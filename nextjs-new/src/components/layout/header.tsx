import { MagicButton } from "@/components/ui/magic-button";
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
      <header className="fixed left-0 top-0 z-50 w-full animate-fade-in border-b border-transparent bg-background/5 backdrop-blur-md transition-all duration-300 hover:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <Link
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
            href="/"
          >
            WebCors
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8 ml-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex h-full items-center gap-4">
            <Link
              className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block"
              href="/signin"
            >
              Log in
            </Link>
            <MagicButton href="/contact">Book a Call</MagicButton>
          </div>

          {/* Mobile Menu - Client Component */}
          <MobileMenu />
        </div>
      </header>
    </>
  );
}
