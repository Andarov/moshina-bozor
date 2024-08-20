import React from "react";

// data
import { news } from "../data";

// components
import NewsItem from "../components/NewsItem";

const News = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <h1 className="text-3xl leading-7 text-111 font-bold mb-7 md:text-4xl md:leading-8 md:mb-8">
          Yangiliklar
        </h1>

        {/* news list */}
        <ul className="grid grid-cols-1 gap-5 md:gap-y-10 md:grid-cols-2 lg:gap-6 lg:grid-cols-3">
          {news.map((newsItem) => {
            return <NewsItem key={newsItem.id} {...newsItem} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default News;
