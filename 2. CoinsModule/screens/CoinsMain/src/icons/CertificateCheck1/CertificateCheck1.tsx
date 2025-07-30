/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const CertificateCheck1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`certificate-check-1 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.75 9L8.25 10.5L11.25 7.5M9 2.25L10.4326 3.6536L12.375 3.15433L12.9138 5.08616L14.8457 5.625L14.3464 7.56744L15.75 9L14.3464 10.4326L14.8457 12.375L12.9138 12.9138L12.375 14.8457L10.4326 14.3464L9 15.75L7.56744 14.3464L5.625 14.8457L5.08616 12.9138L3.15433 12.375L3.6536 10.4326L2.25 9L3.6536 7.56744L3.15433 5.625L5.08616 5.08616L5.625 3.15433L7.56744 3.6536L9 2.25Z"
        stroke="url(#paint0_linear_9750_2499)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_9750_2499"
          x1="9"
          x2="9"
          y1="2.25"
          y2="15.75"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>
      </defs>
    </svg>
  );
};
