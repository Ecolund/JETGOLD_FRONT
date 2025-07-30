/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Moon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`moon ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.32031 11.6836C3.32031 16.6542 7.34975 20.6836 12.3203 20.6836C16.1075 20.6836 19.3483 18.3445 20.6768 15.0321C19.6402 15.4487 18.5059 15.6835 17.3203 15.6835C12.3497 15.6835 8.32031 11.6541 8.32031 6.68354C8.32031 5.5035 8.55165 4.36271 8.96453 3.33008C5.65605 4.6604 3.32031 7.89924 3.32031 11.6836Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
