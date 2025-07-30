/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Timer2 = ({
  color = "url(#paint0_linear_9750_2555)",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`timer-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.01037 4.66667C2.37218 5.62007 2 6.76657 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2V4M8 8L5.33333 5.33333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_9750_2703"
          x1="8"
          x2="8"
          y1="2"
          y2="14"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Timer2.propTypes = {
  color: PropTypes.string,
};
