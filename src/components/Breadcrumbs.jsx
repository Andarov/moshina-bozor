import React from "react";
import { Link } from "react-router-dom";

// components
import Arrow from "./Arrow";

const Breadcrumbs = ({ items = [], className = "py-10" }) => {
  const lastItemIndex = items.length;
  const allItems = [{ name: "Bosh sahifa" }, ...items];

  return (
    <div className={`container ${className}`}>
      <ul className="flex flex-wrap items-center gap-1.5 sm:gap-3.5">
        {allItems.map((item, index) => {
          if (lastItemIndex !== index) {
            return (
              <li key={index}>
                <span className="flex items-center gap-1.5 sm:gap-3.5">
                  {/* item body */}
                  <Link
                    to={item.href ? "/" + item.href : "/"}
                    className="text-sm font-medium text-main transition-colors duration-200 hover:text-[#757575]"
                  >
                    {item.name}
                  </Link>

                  {/* arrow icon */}
                  <Arrow direction="right" size={16} fill="#757575" />
                </span>
              </li>
            );
          } else {
            return (
              <li key={index} className="text-sm font-medium text-[#757575]">
                {item.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
