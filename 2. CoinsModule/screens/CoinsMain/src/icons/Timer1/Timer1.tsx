/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Timer1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`timer-1 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.38666 5.25C2.6687 6.32257 2.25 7.61239 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25V4.5M9 9L6 6"
        stroke="#5A6060"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};
