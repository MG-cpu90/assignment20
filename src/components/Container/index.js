import React from "react";
// import backgroundPic from "../../public/img/background.jpg";
import backgroundPic from "./background.jpg";
import "./style.css";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} id="pageContainer" style={{ backgroundImage: `url(${backgroundPic})` }}/>;
}

export default Container;
