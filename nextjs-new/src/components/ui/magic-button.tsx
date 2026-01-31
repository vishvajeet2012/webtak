"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const MagicButton = ({
  children = "Click Me",
  className,
  onClick,
  mt,
  disabled = false,
  href,
  type = "button",
  variant = "magic", // "magic" | "submit" | "outline"
  routing,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  mt?: boolean;
  disabled?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "magic" | "submit" | "outline";
  routing?: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();

    if (type === "submit") return;
    if (onClick && !href && !routing) return;

    if (href) {
      router.push(href);
      return;
    }

    if (routing) {
      // Handle smooth scroll for hashes
      if (routing.startsWith("#") || routing.includes("/#")) {
        const id = routing.split("#")[1];
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      router.push(routing);
    }
  };

  const containerClasses = cn(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full group transition-all duration-300 ease-in-out p-[2px]",
    // Gradient matching the theme colors
    "bg-[linear-gradient(90deg,var(--color-one)_0%,var(--color-one)_40%,#ffffff_50%,var(--color-one)_60%,var(--color-one)_100%)] bg-[length:200%_100%] animate-gradient-flow",
    "hover:shadow-[0_0_20px_rgba(255,189,122,0.3),0_0_1px_rgba(255,189,122,0.15)]",
    "active:shadow-[0_0_15px_rgba(255,189,122,0.4)]",
    disabled ? "opacity-50 cursor-not-allowed" : "",
    mt ? "mt-5" : "",
    className,
  );

  const innerClasses = cn(
    "inline-flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-black text-neutral-700 dark:text-white font-medium text-lg leading-[26px] [font-family:'Nunito_Sans',Helvetica] transition-all ease-in-out",
    "px-6 py-2 duration-200",
    "group-hover:scale-[0.99]",
    "group-active:scale-[0.97]",
  );

  // If simple link with HREF prop
  if (href) {
    return (
      <Link href={href} className={containerClasses} onClick={handleClick}>
        <span className={innerClasses}>{children}</span>
      </Link>
    );
  }

  // Standard Button
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : handleClick}
      className={containerClasses}
    >
      <span className={innerClasses}>{children}</span>
    </button>
  );
};
