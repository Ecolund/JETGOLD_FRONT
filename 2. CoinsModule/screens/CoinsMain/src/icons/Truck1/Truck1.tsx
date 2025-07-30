/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Truck1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`truck-1 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.875 13.5C13.875 14.3284 13.2034 15 12.375 15C11.5466 15 10.875 14.3284 10.875 13.5M13.875 13.5C13.875 12.6716 13.2034 12 12.375 12C11.5466 12 10.875 12.6716 10.875 13.5M13.875 13.5H16.125M10.875 13.5H10.125M6.375 13.5C6.375 14.3284 5.70343 15 4.875 15C4.04657 15 3.375 14.3284 3.375 13.5M6.375 13.5C6.375 12.6716 5.70343 12 4.875 12C4.04657 12 3.375 12.6716 3.375 13.5M6.375 13.5H10.125M3.375 13.5C2.54657 13.5 1.875 12.8284 1.875 12V5.4C1.875 4.55992 1.875 4.13988 2.03849 3.81901C2.1823 3.53677 2.41177 3.3073 2.69401 3.16349C3.01488 3 3.43492 3 4.275 3H7.725C8.56508 3 8.98512 3 9.30599 3.16349C9.58823 3.3073 9.8177 3.53677 9.96151 3.81901C10.125 4.13988 10.125 4.55992 10.125 5.4V13.5M10.125 13.5V6H13.125L15.375 9M15.375 9V13.5M15.375 9H10.125"
        stroke="#00C3B6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};
