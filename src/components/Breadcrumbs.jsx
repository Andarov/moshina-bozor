import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const isNewsPath = location.pathname.startsWith('/news/');
  const isCatalogPath = location.pathname.startsWith('/catalog/');
  const tayyorArr = pathArr.filter((path) => path !== "");
  const isCarPath = tayyorArr.find((path)=> path === 'car');
  console.log(tayyorArr);

  return (
    <ul className="flex flex-wrap text-base leading-6 text-[#767980] mb-10">
      <li>
        <Link to="/">
          <span className="text-main font-semibold slash">Bosh sahifa</span> 
        </Link>
      </li>
      
      {tayyorArr.map((path, index) => {
        return (
          <li key={index}>
            {index !== tayyorArr.length - 1 ? (
              <Link className="text-main font-semibold" to={`${isCatalogPath && index === 1 ? '/catalog' : ''}/${path}`}>
                {isCarPath && index === 2 ? '' : <span className={`${isNewsPath && index >= 0 && 'after:hidden'} slash`}>{path}</span>}
              </Link> 
            ) : (
              !isNewsPath && !isCarPath && <span>{path}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
