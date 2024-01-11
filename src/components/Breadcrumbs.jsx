import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const isNewsPath = location.pathname.startsWith('/news/');
  const tayyorArr = pathArr.filter((path) => path !== "");

  return (
    <ul className="flex text-base leading-6 text-[#767980]">
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
                {!isNewsPath && <span className="mx-3">/</span>}
              </Link> 
            ) : (
              !isNewsPath && path
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
