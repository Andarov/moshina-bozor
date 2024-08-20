import React from "react";
import { Link } from "react-router-dom";

// coponents
import ArrowSolid from "./ArrowSolid";

// images
import dateIcon from "../img/icon/date.svg";

const NewsItem = ({ id, img, title, date }) => {
  return (
    <li className="flex flex-col gap-5" key={id}>
      {/* image */}
      <img
        src={img}
        width={374}
        alt={title}
        height={260}
        className="w-full h-[260px] rounded-[18px] object-cover bg-gray-400"
      />

      {/* details */}
      <div className="flex flex-col gap-3.5 grow">
        {/* title */}
        <h3 className="grow text-xl font-semibold line-clamp-2">{title}</h3>

        {/* bottom */}
        <div className="flex items-center justify-between">
          {/* date */}
          <div className="flex items-center gap-2">
            <img
              width={20}
              height={20}
              src={dateIcon}
              alt="date icon"
              className="size-6"
            />

            <span className="font-medium">{date}</span>
          </div>

          {/* link */}
          <Link
            to={"/news/" + title}
            className="group flex items-center gap-1.5 relative overflow-hidden py-1.5"
          >
            <span className="translate-x-5 text-main text-base font-medium transition-transform duration-200 group-hover:translate-x-0">
              Ba'tafsil o'qish
            </span>

            {/* icon */}
            <ArrowSolid
              size={20}
              fill="#e70a32"
              direction="right"
              className="translate-x-full transition-transform duration-200 group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
