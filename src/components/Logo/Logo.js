import React from "react";
import logo from "../../assets/images/logo.png";

function Logo(props) {
  return (
    <img src={logo} alt={props.alt} width={props.width} height={props.height} />
  );
}

export default Logo;
