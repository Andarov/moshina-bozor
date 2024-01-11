// NewsItem.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NewsItem = ({ id, img, title, date }) => {
  const location = useLocation();

  const news = location.pathname === '/news';
  return (
    <li className="flex flex-col" key={id}>
      <img
        className="w-full h-[260px] rounded-[18px] mb-5 object-cover bg-gray-400"
        height={260}
        src={img}
        alt={title}
      />
      <h3 className="grow text-[20px] font-semibold text-111 leading-7 line-clamp-2 mb-3">
        {title}
      </h3>

      <div className="flex items-center justify-between">
        <Link className="text-main text-sm font-medium" to={`${news ? `/news/${title}` : `news/${title}`}`}>
          Batafsil
        </Link>

        <span>{date}</span>
      </div>
    </li>
  );
};

export default NewsItem;
