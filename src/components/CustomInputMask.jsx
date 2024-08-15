import React from "react";

// input mask
import ReactInputMask from "react-input-mask-next";

const CustomInputMask = ({
  value,
  id = "",
  onChange,
  mask = "",
  name = "input",
  placeholder = "",
  ...rest
}) => {
  return (
    <ReactInputMask
      id={id}
      {...rest}
      name={name}
      mask={mask}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CustomInputMask;
