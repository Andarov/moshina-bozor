import React from "react";

const ArrowSolid = ({
  size = 24,
  className = "",
  fill = "#111111",
  direction = "left",
}) => {
  const directionStyle = {
    top: "rotate-90",
    bottom: "-rotate-90",
    right: "rotate-180",
    left: "rotate-0",
  };
  return (
    <svg
      fill={fill}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`${directionStyle[direction]} ${className}`}
    >
      <path d="M1.293,12.707a1,1,0,0,1,0-1.414l5-5A1,1,0,0,1,7.707,7.707L4.414,11H22a1,1,0,0,1,0,2H4.414l3.293,3.293a1,1,0,1,1-1.414,1.414Z" />
    </svg>
  );
};

export default ArrowSolid;
