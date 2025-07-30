/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  fileShieldAlt: string;
}

export const FileShieldAlt = ({
  className,
  fileShieldAlt = "/img/file-shield-alt.png",
}: Props): JSX.Element => {
  return (
    <img
      className={`file-shield-alt ${className}`}
      alt="File shield alt"
      src={fileShieldAlt}
    />
  );
};

FileShieldAlt.propTypes = {
  fileShieldAlt: PropTypes.string,
};
