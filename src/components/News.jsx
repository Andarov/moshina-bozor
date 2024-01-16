import React from "react";
import { news } from "../data";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <section className="pt-7">
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
          So'nggi yangiliklar
        </h2>

        <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((newsItem) => {
            return (
              <NewsItem key={newsItem.id} {...newsItem} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default News;
