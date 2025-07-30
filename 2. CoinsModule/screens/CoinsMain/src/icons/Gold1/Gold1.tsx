/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Gold1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`gold-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.67499 14H9.92499L10.8 19H3.79999L4.67499 14Z"
        stroke="url(#paint0_linear_9750_2950)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="path"
        d="M10.175 5H15.425L16.3 10H9.29999L10.175 5Z"
        stroke="url(#paint1_linear_9750_2950)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="path"
        d="M15.675 14H20.925L21.8 19H14.8L15.675 14Z"
        stroke="url(#paint2_linear_9750_2950)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_9750_2950"
          x1="12.8"
          x2="12.8"
          y1="5"
          y2="19"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_9750_2950"
          x1="12.8"
          x2="12.8"
          y1="5"
          y2="19"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_9750_2950"
          x1="12.8"
          x2="12.8"
          y1="5"
          y2="19"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>
      </defs>
    </svg>
  );
};
