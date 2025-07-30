/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ChevronDown1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`chevron-down-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 12L10 8L6 4"
        stroke="url(#paint0_linear_9758_1008)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_9758_1008"
          x1="10"
          x2="6"
          y1="8"
          y2="8"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>
      </defs>
    </svg>
  );
};
