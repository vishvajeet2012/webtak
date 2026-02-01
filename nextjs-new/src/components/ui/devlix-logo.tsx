"use client";

import { useBrand } from "@/context/brand-context";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DevlixLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const DevlixLogo = ({
  className,
  iconOnly = false,
}: DevlixLogoProps) => {
  const { appName } = useBrand();

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xl font-bold tracking-tight",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="size-8 text-primary"
        >
          <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z" />
          <path d="M12 5h2a7 7 0 0 1 0 14h-2V5z" />
        </svg>
      </div>
      {!iconOnly && (
        <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          {appName}
        </span>
      )}
    </div>
  );
};
