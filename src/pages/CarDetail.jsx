import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../data";
import redArrow from "../img/redArrow.png";
import CarItem from "../components/CarItem";

import Slider from "react-slick";
import CTA from "../components/CTA";

const CarDetail = () => {
  const { id } = useParams();
  const carItem = cars.find((car) => car.id === id);
  const selectedCarMarkaArray = cars.filter(
    (car) => car.model === carItem.model
  );

  const CustomNextArrow = (props) => (
    <div
      className="w-10 h-10 flex justify-center items-center bg-white rounded-full absolute right-0 z-50 border-2 top-1/2 border-main cursor-pointer"
      onClick={props.onClick}
    >
      <img className="w-6 h-6" src={redArrow} alt="" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className="w-10 h-10 flex justify-center items-center bg-white rounded-full absolute border-2 border-main top-1/2 z-50 cursor-pointer"
      onClick={props.onClick}
    >
      <img className="rotate-180 w-6 h-6"  src={redArrow} alt="" />
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
    <>
      <div className="w-full max-w-base mx-auto px-5">
        {carItem ? (
          <div className="pb-16 md:pb-24">
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
                  <h4 className="text-lg font-bold text-end mb-3">
                    Aloqa uchun
                  </h4>
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

      <CTA />

      <div className="w-full max-w-base mx-auto px-5">
        {/* releted cars */}
        <div className="py-14 md:py-20">
          <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
            {selectedCarMarkaArray[0].model} modelidagi moshinalar
          </h2>
          <ul className="grid grid-cols-1 gap-7 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {selectedCarMarkaArray.length > 0 &&
              selectedCarMarkaArray.slice(0, 3).map((car) => {
                return <CarItem key={car.id} {...car} />;
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
