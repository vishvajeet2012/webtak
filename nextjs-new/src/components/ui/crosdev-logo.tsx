"use client";

import { cn } from "@/lib/utils";

interface CrosDevLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const CrosDevLogo = ({
  className,
  iconOnly = false,
}: CrosDevLogoProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xl font-bold tracking-tight",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        {/* Premium CrosDev Logo: Abstract X formed by code brackets/arrows */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0"
          className="size-8 text-primary"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Left Angle / Bracket */}
          <path
            d="M10.5 4.5L3 12L10.5 19.5"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Angle / Bracket (Crossed) */}
          <path
            d="M13.5 4.5L21 12L13.5 19.5"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Connecting Slash for 'Dev' */}
          <path
            d="M14 4L10 20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {!iconOnly && (
        <span className="font-bold text-xl">
          Cros<span className="text-primary font-extrabold">Dev</span>
        </span>
      )}
    </div>
  );
};
