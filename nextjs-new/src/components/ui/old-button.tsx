import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OldButtonProps extends React.ComponentProps<typeof Button> {
  href?: string;
  children?: React.ReactNode;
}

export function OldButton({
  className,
  children = "Book a Call",
  ...props
}: OldButtonProps) {
  return (
    <Button
      className={cn("gap-1 rounded-lg text-white dark:text-black", className)}
      {...props}
    >
      <span>{children}</span>
      <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </Button>
  );
}
