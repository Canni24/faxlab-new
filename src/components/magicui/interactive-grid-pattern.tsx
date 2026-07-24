import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  return (
    <svg
      width={width * squares[0]}
      height={height * squares[1]}
      className={cn(
        "absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      {Array.from({ length: squares[0] * squares[1] }).map((_, i) => {
        const x = (i % squares[0]) * width;
        const y = Math.floor(i / squares[0]) * height;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/20 transition-all duration-100 ease-in-out dark:stroke-gray-800/20",
              hoveredSquare === i ? squaresClassName : "fill-transparent"
            )}
            onMouseEnter={() => setHoveredSquare(i)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}