import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrow from "../img/arrow.svg";
import { comments } from "../data";
import star from "../img/star.png";
import { Link } from "react-router-dom";

const Comments = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const CustomNextArrow = (props) => (
    <div
      className="hidden w-12 h-12 bg-white rounded-full absolute -top-24 -right-8 border-2 lg:inline-block lg:w-12 lg:h-12 border-[#919395]"
      onClick={props.onClick}
    >
      <img className="rotate-180" src={arrow} alt="" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
    className="hidden w-12 h-12 bg-white rounded-full absolute -top-24 right-8 border-2 lg:inline-block lg:w-12 lg:h-12 border-[#919395]"
      onClick={props.onClick}
    >
      <img src={arrow} alt="" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    adaptiveHeight: true,
    beforeChange: handleBeforeChange,
  };

  return (
    <div className="py-12 bg-[#f2f4f6] md:py-24">
      <div className="w-full max-w-base mx-auto px-5">
        <div className="w-full grid grid-cols-1 gap-8 lg:gap-5 lg:grid-cols-2">
          {/* left-content */}
          <div className="w-full space-y-5">
            <h2 className="text-2xl leading-7 font-bold sm:text-3xl md:leading-9">
              Fikrlar
            </h2>
            <p className="text-gray-800 font-medium font-base">
              Mashinabozor sayti haqida foydalanuvchilar fikri bilan tanishing.
            </p>
            <Link className="inline-block bg-teal-400 text-white font-semibold border-2 border-teal-400 px-6 py-2 rounded-md hover:text-teal-400 hover:bg-transparent transition-all duration-300" to='/elon/sharx'>Sharx qoldirish</Link>
          </div>

          <div className="w-full max-w-2xl rounded-2xl shadow-xl p-8 bg-white border-r-4 border-b-4 border-teal-400">
            {/* slider */}
            <Slider {...settings}>
              {/* slider item */}
              {comments.map((comment, index) => {
                return (
                  <div
                    key={comment.id}
                    className={`slick-fade ${
                      currentSlide === index ? "slick-current" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <img
                        className="w-20 h-20"
                        width={80}
                        height={80}
                        src={comment.img}
                        alt=""
                      />
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            width={28}
                            height={28}
                            src={star}
                            alt=""
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {comment.author}
                      </h3>
                      <p className="text-gray-800">{comment.comment}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
