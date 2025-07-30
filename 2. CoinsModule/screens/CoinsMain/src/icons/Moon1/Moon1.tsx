/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Moon1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`moon-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.76648 9.73629C2.76648 13.8784 6.12434 17.2363 10.2665 17.2363C13.4224 17.2363 16.1231 15.287 17.2302 12.5267C16.3664 12.8738 15.4211 13.0696 14.4331 13.0696C10.291 13.0696 6.93315 9.71169 6.93315 5.56956C6.93315 4.58619 7.12592 3.63553 7.47 2.775C4.71292 3.8836 2.76648 6.58264 2.76648 9.73629Z"
        stroke="url(#paint0_linear_9757_1893)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_9757_1893"
          x1="9.99834"
          x2="9.99834"
          y1="2.775"
          y2="17.2363"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>
      </defs>
    </svg>
  );
};
