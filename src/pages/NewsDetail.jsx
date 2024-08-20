import React from "react";
import { useParams } from "react-router-dom";

// data
import { news } from "../data";

// images
import dateIcon from "../img/icon/date.svg";

const NewsDetail = () => {
  const { title } = useParams();
  const newsItem = news.find((newsItem) => newsItem.title === title);

  return (
    <div className="pb-16 md:pb-20">
      <div className="container">
        {/* title */}
        <h1 className="text-[25px] leading-7 text-111 font-bold mb-7 lg:text-4xl md:leading-8 md:mb-8">
          {newsItem.title}
        </h1>

        {/* image */}
        <img
          className="w-full rounded-xl mb-6 h-96 object-cover md:h-[480px] md:rounded-2xl lg:rounded-3xl"
          src={newsItem.img}
          alt={newsItem.title}
        />

        {/* description */}
        <p className="text-base mb-8 font-medium md:text-lg">{newsItem.text}</p>

        {/* date */}
        <div className="flex items-center gap-2">
          <img
            width={20}
            height={20}
            src={dateIcon}
            alt="date icon"
            className="size-6"
          />

          <span className="font-medium">{newsItem.date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
