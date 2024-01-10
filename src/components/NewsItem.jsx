// NewsItem.js
import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ id, img, title, date }) => {
  return (
    <li key={id}>
      <img
        className="w-full h-[260px] rounded-[18px] mb-5 object-cover"
        height={260}
        src={img}
        alt={title}
      />
      <h3 className="text-[20px] font-semibold text-111 leading-7 line-clamp-2 mb-3">
        {title}
      </h3>

      <div className="flex items-center justify-between">
        <Link className="text-main text-sm font-medium" to={`news/${title}`}>
          Подробнее
        </Link>

        <span>{date}</span>
      </div>
    </li>
  );
};

export default NewsItem;
