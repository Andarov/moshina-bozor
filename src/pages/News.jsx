import React from "react";
import { Link } from "react-router-dom";
import NewsItem from "../components/NewsItem";
import { news } from "../data";

const News = () => {
  return (
    <div className="pb-20">
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-4xl leading-10 text-111 font-bold mt-5 mb-8">
          Yangiliklar
        </h1>

        <ul className="grid grid-cols-3 gap-x-7 gap-y-10">
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
