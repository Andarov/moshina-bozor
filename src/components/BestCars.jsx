import React from "react";
import { Link } from "react-router-dom";

// data
import { cars } from "../data";

// slick, swiper
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import Arrow from "./Arrow";

const BestCars = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleBeforeChange = (_, next) => {
    setCurrentSlide(next);
  };

  // sorted cars by price
  const sortedCars = [...cars].sort((a, b) => b.price - a.price).slice(0, 3);

  // slick next
  const CustomNextArrow = (props) => (
    <button
      title="Keyingi"
      aria-label="next"
      onClick={props.onClick}
      className="flex items-center justify-center absolute right-0 -top-20 size-9 bg-white rounded-full border-2 border-111/40 transition-colors hover:bg-gray-50 sm:size-11 xl:-right-20 xl:top-[calc(50%-22px)]"
    >
      <Arrow
        direction="right"
        fill="rgb(17 17 17 / 0.4)"
        className="size-[22px] sm:size-6"
      />
    </button>
  );

  // slick prev
  const CustomPrevArrow = (props) => (
    <button
      title="Oldingi"
      aria-label="prev"
      onClick={props.onClick}
      className="flex items-center justify-center absolute right-11 -top-20 size-9 bg-white rounded-full border-2 border-111/40 transition-colors hover:bg-gray-50 sm:right-14 sm:size-11 xl:-left-20 xl:top-[calc(50%-22px)]"
    >
      <Arrow fill="rgb(17 17 17 / 0.4)" className="size-[22px] sm:size-6" />
    </button>
  );

  // slick settings
  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: handleBeforeChange,
  };

  return (
    <section className="py-8">
      <div className="container !px-0 sm:!px-5">
        <div className="bg-white py-12 sm:pb-14 sm:rounded-2xl">
          {/* content wrapper */}
          <div className="w-full max-w-[921px] mx-auto px-5 relative">
            {/* title */}
            <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9 xl:justify-center sm:flex sm:items-center sm:space-x-2 sm:mb-10">
              <strong className="text-main">Eng yaxshi</strong> <p>takliflar</p>
            </h2>

            {/* slider */}
            <Slider {...settings}>
              {/* slider item */}
              {sortedCars.map((car, index) => {
                const current = currentSlide === index ? "slick-current" : "";
                return (
                  <div
                    key={car.id}
                    className={`items-center gap-4 slider slick-fade sm:gap-5 lg:gap-8 ${current}`}
                  >
                    {/* image */}
                    <div className="w-full bg-gray-400 rounded-2xl h-60 lg:max-w-xl md:h-[340px]">
                      <img
                        height={350}
                        width={560}
                        className="w-full h-full object-cover rounded-2xl"
                        src={car.images[0]}
                        alt={car.marka}
                      />
                    </div>

                    {/* details */}
                    <div className="w-full space-y-3 lg:max-w-96">
                      {/* title */}
                      <h3 className="text-111 text-xl font-bold sm:text-2xl">
                        {car.model} {car.marka}
                      </h3>

                      {/* description */}
                      <div className="space-y-1.5 text-111/70 sm:text-lg">
                        <p className="flex items-center gap-1">
                          <span>Probeg</span>
                          <span className="grow pt-2 border-b-2 border-dotted border-111/50"></span>
                          <span>{car.run.toLocaleString()}</span>
                        </p>

                        {/* color */}
                        <p className="flex items-center gap-1">
                          <span>Rangi</span>
                          <span className="grow pt-2 border-b-2 border-dotted border-111/50"></span>
                          <span>{car.color}</span>
                        </p>
                      </div>

                      {/* address & price */}
                      <div className="p-4 rounded-[10px] bg-[#EFF2F4] text-base font-medium">
                        <p>Hudud: {car.place}</p>

                        {/* price */}
                        <p className="text-right">
                          <span>Narxi: </span>
                          <span className="text-main">
                            {car.price.toLocaleString()}
                          </span>
                        </p>
                      </div>

                      {/* link */}
                      <Link
                        to={`/catalog/${car.model}/car/${car.id}`}
                        className="block text-center bg-main py-3 text-white font-medium rounded-xl transition-colors hover:bg-main/80 sm:text-lg"
                      >
                        Ba'tafsil
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCars;
