/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const CoinVertical1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`coin-vertical-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.73437 1.96875C8.36534 1.96875 9.6875 4.61307 9.6875 7.875M6.73437 1.96875C5.10341 1.96875 3.78125 4.61307 3.78125 7.875C3.78125 11.1369 5.10341 13.7812 6.73437 13.7812M6.73437 1.96875H10.3437C11.7935 1.96875 12.9687 4.61307 12.9687 7.875M9.6875 7.875C9.6875 11.1369 8.36534 13.7812 6.73437 13.7812M9.6875 7.875H12.9687M6.73437 13.7812H10.3437C11.7935 13.7812 12.9687 11.1369 12.9687 7.875M12.5267 11.1562H9.19021M12.5267 4.59375H9.19021M6.73437 5.25C7.27803 5.25 7.71875 6.42525 7.71875 7.875C7.71875 9.32475 7.27803 10.5 6.73437 10.5C6.19072 10.5 5.75 9.32475 5.75 7.875C5.75 6.42525 6.19072 5.25 6.73437 5.25Z"
        stroke="url(#paint0_linear_9750_2995)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.9"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_9750_2995"
          x1="8.375"
          x2="8.375"
          y1="1.96875"
          y2="13.7812"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>
      </defs>
    </svg>
  );
};
