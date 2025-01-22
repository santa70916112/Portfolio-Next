import React from "react";
import HeadingProps from "@/types/heading";
import { FONT_SIZE } from "@/constants/heading";

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className = "",
}) => {
  const sizeClasses = FONT_SIZE[level];
  // Ensure level is between 1 and 6
  const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}` as keyof JSX.IntrinsicElements;

  // Get the corresponding Tailwind classes for the given level

  return (
    <HeadingTag className={`font-mont font-bold ${sizeClasses} ${className}`}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
