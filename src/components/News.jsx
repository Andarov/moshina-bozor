import React from "react";
import { Link } from "react-router-dom";
import { news } from "../data";

const News = () => {
  return (
    <section>
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-4xl leading-10 text-111 font-bold mb-9">
          So'nggi yangiliklar
        </h2>

        <ul className="grid grid-cols-3 gap-7">
            {
                news.slice(0,3).map(newsItem=>{
                    return(
                        <li key={newsItem.id}>
                            <img className="w-full h-[260px] rounded-[18px] mb-5" height={260} src={newsItem.img} alt={newsItem.title} />
                            <h3 className="text-[20px] font-semibold text-111 leading-7 line-clamp-2 mb-3">{newsItem.title}</h3>

                            <div className="flex items-center justify-between">
                                <Link className="text-main text-sm font-medium" to={`news/${newsItem.title}`}>Подробнее</Link>

                                <span>{newsItem.date}</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </section>
  );
};

export default News;
