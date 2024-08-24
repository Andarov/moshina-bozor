import React from "react";
import { Link } from "react-router-dom";

// components
import CarCommentItem from "./CarCommentItem";

// data
import { carCommentsWithImage } from "../data";

const Comments = () => {
  return (
    <section className="bg-[#EFF2F4] py-14">
      <div className="container">
        {/* content top */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl leading-7 text-111 font-bold sm:text-3xl">
            Mashinalar haqida sharxlar
          </h2>

          <Link
            to="/rating"
            className="font-medium underline underline-offset-4 transition-colors hover:text-main"
          >
            Barcha sharxlar
          </Link>
        </div>

        {/* content main */}
        <ul className="grid grid-cols-1 gap-x-5 gap-y-6 md:gap-y-5 md:grid-cols-2 lg:grid-cols-3">
          {carCommentsWithImage.slice(0, 6).map((car) => (
            <CarCommentItem key={car.id} {...car} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Comments;
