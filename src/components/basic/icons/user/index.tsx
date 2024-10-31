// SvgComponent.tsx
import React from "react";

interface UserProps {
  className?: string;
  width?: string | number; // Allow width to be passed as a prop
}

const User = ({ className }: UserProps) => {
  return (
    <svg
      width={'100%'}
      height="auto" // Set height to auto
      viewBox="0 0 724 724"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="724"
        height="724"
        rx="362"
        fill="#B4B4B4"
        fillOpacity="0.85"
      />
      <path
        d="M362 377.583C405.032 377.583 439.917 342.699 439.917 299.667C439.917 256.634 405.032 221.75 362 221.75C318.968 221.75 284.083 256.634 284.083 299.667C284.083 342.699 318.968 377.583 362 377.583Z"
        stroke="black"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M486.667 502.25C486.667 469.186 473.532 437.477 450.153 414.097C426.773 390.718 395.064 377.583 362 377.583C328.936 377.583 297.227 390.718 273.847 414.097C250.468 437.477 237.333 469.186 237.333 502.25"
        stroke="black"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default User;
