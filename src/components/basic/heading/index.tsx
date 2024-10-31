import React from "react";
import HeadingProps from "@/types/heading";

export default function Heading({
  children,
  level = 1,
  className = "",
}: HeadingProps) {
  // Ensure level is between 1 and 6
  const HeadingTag = `h${Math.min(
    Math.max(level, 1),
    6
  )}` as keyof JSX.IntrinsicElements;

  const fontSize = 96 / level;
  const lineHeight = fontSize * 1.2;

  return (
    <HeadingTag
      className={`font-mont font-bold text-[${fontSize}px] leading-[${lineHeight}px] ${className}`}
    >
      {children}
    </HeadingTag>
  );
}
