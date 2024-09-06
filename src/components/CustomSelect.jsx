import React from "react";

// antd
import { Select } from "antd";
import "../css/antd/select.css";

// components
import Arrow from "./Arrow";

// select
const CustomSelect = ({
  children,
  className = "",
  onSelect = () => false,
  defaultValue = "item 1",
  items = [
    { id: 0, name: "Item 1", value: "item 1" },
    { id: 1, name: "Item 2", value: "item 2" },
    { id: 2, name: "Item 3", value: "item 3" },
  ],
}) => {
  return (
    <Select
      onSelect={onSelect}
      className={className}
      defaultValue={defaultValue}
      suffixIcon={<Arrow size={14} direction="bottom" />}
    >
      {children}
      {items
        ? items.map((item) => (
            <CustomOption key={item.id} value={item.value}>
              {item.name}
            </CustomOption>
          ))
        : null}
    </Select>
  );
};

export default CustomSelect;
