import React from "react";
import backgroundPic from "./background.jpg";
import "../style.css";

function Wrapper(props) {
  return <main className="wrapper" {...props} />;
}

export default Wrapper;

// style={{ width: "80%" }}
