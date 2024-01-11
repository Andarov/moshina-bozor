import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../data";

const NewsDetail = () => {
  const { title } = useParams();
  const newsItem = news.find((newsItem)=> newsItem.title === title);
  console.log(newsItem);

  return (
    <div className="pb-20">
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-4xl leading-10 text-111 font-bold mt-5 mb-8">
          {newsItem.title}
        </h1>
        <img className="w-full rounded-3xl mb-6 h-96 object-cover" src={newsItem.img} alt={newsItem.title} />
        <p className="text-base mb-10 text-111 font-medium">{newsItem.text}</p>

        <div className="text-right">
            <span className="text-main font-semibold">{newsItem.date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
