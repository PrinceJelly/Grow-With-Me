import React from "react";
import { ReactSVG } from "react-svg";

export default function Icon({ addClass, name }) {
  return (
    <ReactSVG
      className={addClass ? addClass : "IconSVG"}
      src={`/#/${name}`}
      wrapper="span"
    />
  );
}
