import React from "react";
import { Link } from "react-router-dom";
import { news } from "../data";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <section>
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-4xl leading-10 text-111 font-bold mb-9">
          So'nggi yangiliklar
        </h2>

        <ul className="grid grid-cols-3 gap-7">
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
