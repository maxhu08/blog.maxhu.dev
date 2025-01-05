import { cn } from "@/lib/utils";
import { FC } from "react";

interface SeparatorProps {
  orientation: "horizontal" | "vertical";
  className?: string;
}

export const Separator: FC<SeparatorProps> = ({ orientation, className }) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-zinc-300 dark:bg-[#262626]",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}></div>
  );
};
