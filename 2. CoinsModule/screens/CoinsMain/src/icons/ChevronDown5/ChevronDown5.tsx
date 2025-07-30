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

export const ChevronDown5 = ({
  color = "url(#paint0_linear_9750_2481)",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`chevron-down-5 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4 6L8 10L12 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_9750_2475"
          x1="8"
          x2="8"
          y1="10"
          y2="6"
        >
          <stop className="stop" stopColor="#AF8A39" />

          <stop className="stop" offset="0.413462" stopColor="#FFDE7D" />

          <stop className="stop" offset="1" stopColor="#AF8A39" />
        </linearGradient>
      </defs>
    </svg>
  );
};

ChevronDown5.propTypes = {
  color: PropTypes.string,
};
