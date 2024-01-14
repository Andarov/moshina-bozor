import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../data";

const NewsDetail = () => {
  const { title } = useParams();
  const newsItem = news.find((newsItem)=> newsItem.title === title);

  return (
    <div className="pb-16 md:pb-20">
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-[25px] leading-7 text-111 font-bold mb-7 lg:text-4xl md:leading-8 md:mb-8">
          {newsItem.title}
        </h1>
        <img className="w-full rounded-xl mb-6 h-96 object-cover md:rounded-2xl lg:rounded-3xl" src={newsItem.img} alt={newsItem.title} />
        <p className="text-base mb-10 text-111 font-medium">{newsItem.text}</p>

        <div className="text-right">
            <span className="text-main font-semibold">{newsItem.date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
