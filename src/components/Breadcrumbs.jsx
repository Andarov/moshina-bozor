import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const tayyorArr = pathArr.filter((path) => path !== "");

  return (
    <ul className="flex mb-10 text-base leading-6 text-[#767980]">
      <li>
        <Link to="/">
          <span>Bosh sahifa</span> 
          <span className="mx-3">/</span>
        </Link>
      </li>
      
    {tayyorArr.map((path, index) => {
        return (
          <li key={index}>
            {index !== tayyorArr.length - 1 ? (
              <Link to={path}>
                {path}
                <span className="mx-3">/</span>
              </Link> 
            ) : (
              path
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
