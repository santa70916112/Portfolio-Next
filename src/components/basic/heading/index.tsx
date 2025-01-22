import React from "react";
import HeadingProps from "@/types/heading";
import { fontSizeClasses } from "@/constants/heading";

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className = "",
}) => {
  // Ensure level is between 1 and 6
  const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}` as keyof JSX.IntrinsicElements;

  // Get the corresponding Tailwind classes for the given level
  const sizeClasses = fontSizeClasses[level];

  return (
    <HeadingTag className={`font-mont font-bold ${sizeClasses} ${className}`}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
