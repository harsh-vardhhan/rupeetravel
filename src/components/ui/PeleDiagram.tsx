import * as React from "react";
import { render } from "pele";
import { cn } from "../../lib/utils";

export interface PeleDiagramProps extends React.HTMLAttributes<HTMLElement> {
  code: string;
  caption?: string;
  containerClassName?: string;
}

export default function PeleDiagram({
  code,
  caption,
  className,
  containerClassName,
  ...props
}: PeleDiagramProps) {
  let svg = "";
  try {
    const result = render(code);
    svg = result.svg;
  } catch (error) {
    console.error("Failed to render diagram with Pele:", error);
    return null;
  }

  return (
    <figure className={cn("w-full my-6 flex flex-col items-center", className)} {...props}>
      <div
        className={cn(
          "pele-wrapper w-full max-w-sm flex justify-center overflow-x-auto rounded-xl border bg-card text-card-foreground p-3 sm:p-4 shadow-sm",
          containerClassName
        )}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="text-xs sm:text-sm text-muted-foreground mt-2 text-center font-medium max-w-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
