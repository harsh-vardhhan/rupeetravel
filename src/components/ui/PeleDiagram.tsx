import * as React from "react";
import { render } from "pele";
import { cn } from "../../lib/utils";

export interface PeleDiagramProps extends React.HTMLAttributes<HTMLElement> {
  code: string;
  caption?: string;
}

export default function PeleDiagram({
  code,
  caption,
  className,
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
        className="pele-wrapper w-full flex justify-center overflow-x-auto py-2"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="text-xs sm:text-sm text-muted-foreground mt-2 text-center font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
