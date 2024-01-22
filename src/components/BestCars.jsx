import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrow from "../img/arrow.svg";
import { cars } from "../data";
import { Link } from "react-router-dom";

const BestCars = () => {
  // Mashinalarni narxi bo'yicha tartiblash
  const sortedCars = [...cars].sort((a, b) => b.price - a.price).slice(0, 3);

  const CustomNextArrow = (props) => (
    <div
      className="w-8 h-8 bg-white rounded-full absolute -top-[70px] right-5 sm:-top-20 sm:right-5 border-2 sm:w-10 sm:h-10 md:w-12 md:h-12 border-[#919395] xl:top-1/2 xl:-right-24"
      onClick={props.onClick}
    >
      <img className="rotate-180" src={arrow} alt="" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className="w-8 h-8 bg-white rounded-full absolute -top-[70px] right-16 sm:-top-20 sm:right-[70px] border-2 sm:w-10 sm:h-10 md:right-20 md:w-12 md:h-12 border-[#919395] xl:top-1/2 xl:-left-24"
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
    fade: true,
  };

  return (
    <div className="py-7">
      <div className="w-full max-w-base mx-auto px-5">
        <div className="bg-white py-8 rounded-2xl sm:py-12">
          <div className="w-full max-w-[921px] mx-auto px-5 relative">
            <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9 xl:justify-center sm:flex sm:items-center sm:space-x-2 sm:mb-10">
              <strong className="text-main">Eng yaxshi</strong> <p>takliflar</p>
            </h2>
            <Slider {...settings}>
              {/* slider item */}
              {sortedCars.map((car) => {
                return (
                  <div key={car.id} className="slider">
                    {/* image */}
                    <div className="w-full col-span-1.5 h-60 mb-5 lg:mr-8 lg:max-w-xl md:h-[340px]">
                      <img
                        height={350}
                        width={560}
                        className="w-full h-full object-cover rounded-2xl"
                        src={car.images[0]}
                        alt={car.marka}
                      />
                    </div>

                    <div className="w-full space-y-2 lg:max-w-96">
                      <h3 className="text-111 text-2xl font-bold">
                        {car.model} {car.marka}
                      </h3>

                      <div className="text-lg text-[#767980]">
                        <p>Probeg: {car.run.toLocaleString()}</p>
                        <p>Rangi: {car.color}</p>
                      </div>

                      <div className="p-4 rounded-[10px] bg-[#EFF2F4] text-base font-medium">
                        <p>Hudud: {car.place}</p>
                        <p className="text-right">
                          Narxi:{" "}
                          <span className="text-main">
                            {car.price.toLocaleString()}
                          </span>
                        </p>
                      </div>

                      <Link
                        to={`/catalog/${car.model}/car/${car.id}`}
                        className="inline-block text-center w-full bg-main py-3 text-white font-medium text-lg rounded-xl"
                      >
                        Batafsil
                      </Link>
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

export default BestCars;
