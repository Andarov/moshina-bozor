import React from "react";

// css
import "../css/loader/bar.css";

const BarLoader = ({ className = "" }) => {
  return <span className={"bar-loader " + className}></span>;
};

export default BarLoader;
