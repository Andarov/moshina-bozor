import React from "react";
import { Link } from "react-router-dom";
import { news } from "../data";

const News = () => {
  return (
    <div className="pb-20">
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-4xl leading-10 text-111 font-bold mt-5 mb-8">
          Yangiliklar
        </h2>

        <ul className="grid grid-cols-3 gap-x-7 gap-y-10">
          {news.map((newsItem) => {
            return (
              <li key={newsItem.id}>
                <img
                  className="w-full h-[260px] rounded-[18px] mb-5 object-cover"
                  height={260}
                  src={newsItem.img}
                  alt={newsItem.title}
                />
                <h3 className="text-[20px] font-semibold text-111 leading-7 line-clamp-2 mb-3">
                  {newsItem.title}
                </h3>

                <div className="flex items-center justify-between">
                  <Link
                    className="text-main text-sm font-medium"
                    to={`news/${newsItem.title}`}
                  >
                    Подробнее
                  </Link>

                  <span>{newsItem.date}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default News;
