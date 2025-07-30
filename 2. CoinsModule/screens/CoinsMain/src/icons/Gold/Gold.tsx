/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Gold = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`gold ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.875 14H9.125L10 19H3L3.875 14Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M9.375 5H14.625L15.5 10H8.5L9.375 5Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        className="path"
        d="M14.875 14H20.125L21 19H14L14.875 14Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
