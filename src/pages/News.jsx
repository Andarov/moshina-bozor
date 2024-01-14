import React from "react";
import NewsItem from "../components/NewsItem";
import { news } from "../data";

const News = () => {
  return (
    <div className="pb-20">
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-3xl leading-7 text-111 font-bold mb-7 md:text-4xl md:leading-8 md:mb-8">
          Yangiliklar
        </h1>

        <ul className="grid grid-cols-1 gap-7 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {news.map((newsItem) => {
            return (
              <NewsItem key={newsItem.id} {...newsItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default News;
