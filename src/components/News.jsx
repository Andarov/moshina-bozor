import React from "react";

// data
import { news } from "../data";

// components
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <section className="pt-7">
      <div className="container">
        <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
          So'nggi yangiliklar
        </h2>

        {/* news list */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 lg:grid-cols-3">
          {news.slice(0, 3).map((newsItem) => {
            return <NewsItem key={newsItem.id} {...newsItem} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default News;
