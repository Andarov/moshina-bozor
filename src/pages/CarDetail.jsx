import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../data";
import arrow from "../img/arrow.svg";

import Slider from "react-slick";

const CarDetail = () => {
  const { id } = useParams();
  const carItem = cars.find((car) => car.id === id);

  console.log(carItem);

  const CustomNextArrow = (props) => (
    <div
      className="w-8 h-8 bg-lime-100 rounded-full absolute right-0 z-50 border-2 top-1/2 border-main cursor-pointer"
      onClick={props.onClick}
    >
      <img className="rotate-180" src={arrow} alt="" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className="w-8 h-8 bg-lime-100 rounded-full absolute border-2 border-main top-1/2 z-50 cursor-pointer"
      onClick={props.onClick}
    >
      <img src={arrow} alt="" />
    </div>
  );

  const settings = {
    customPaging: function (i) {
      return (
        <a key={i}>
          <img src={carItem.images[i]} alt={`Thumb ${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    fade: true,
  };

  return (
    <div className="w-full max-w-base mx-auto px-5 pb-16 md:pb-24">
      {carItem ? (
        <div>
          <h1 className="text-2xl leading-7 text-111 font-bold mb-4 sm:text-3xl md:leading-9">
            {carItem.marka}
          </h1>

          {/* Main car detail */}
          <div className="grid grid-cols-1 md:gap-7 md:grid-cols-2 lg:gap-10">
            {/* slider */}
            <Slider {...settings}>
              <div>
                <img
                  width={565}
                  height={400}
                  className="h-[280px] object-cover w-full rounded-2xl sm:h-[320px] md:h-[400px]"
                  src={carItem.images[0]}
                />
              </div>
              <div>
                <img
                  width={565}
                  height={400}
                  className="h-[280px] object-cover w-full rounded-2xl sm:h-[320px] md:h-[400px]"
                  src={carItem.images[1]}
                />
              </div>
              <div>
                <img
                  width={565}
                  height={400}
                  className="h-[280px] object-cover w-full rounded-2xl sm:h-[320px] md:h-[400px]"
                  src={carItem.images[2]}
                />
              </div>
              <div>
                <img
                  width={565}
                  height={400}
                  className="h-[280px] object-cover w-full rounded-2xl sm:h-[320px] md:h-[400px]"
                  src={carItem.images[3]}
                />
              </div>
            </Slider>

            {/* car detail content */}
            <div className="space-y-2 relative p-0 md:space-y-4 lg:p-5">
              <img
                className="absolute right-0 top-0"
                src={carItem.logo}
                alt=""
              />
              <h3 className="text-111 text-[20px] font-bold leading-7">
                {carItem.model} {carItem.marka}
              </h3>

              <div className="text-base leading-6 text-[#767980]">
                <p>Probeg: {carItem.run}</p>
                <p>Rangi: {carItem.color}</p>
                <p>Ishlab chiqarilgan yili: {carItem.year}</p>
                <p>Qo'shimcha malumot: {carItem.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-end mb-3">Aloqa uchun</h4>
                <div className="flex justify-between items-center">
                  <p>Moshina egasi:</p>
                  <span>{carItem.author}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p>Telefon raqam:</p>
                  <span>{carItem.tel}</span>
                </div>
              </div>

              <div className="p-4 rounded-[10px] bg-[#EFF2F4] text-base font-medium">
                <p>Hudud: {carItem.place}</p>
                <p className="text-right">
                  Narxi:{" "}
                  <span className="text-main">
                    {carItem.price.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default CarDetail;
