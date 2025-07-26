import { cn } from "../../lib/utils";

export function Separator({ className, ...props }) {
  return (
    <div
      className={cn("shrink-0 bg-border", className)}
      {...props}
    />
  )
} 