import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// swiper
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// images
import carBg1 from "../img/bg/auth-page-bg-1.jpg";
import carBg2 from "../img/bg/auth-page-bg-2.jpg";
import carBg3 from "../img/bg/auth-page-bg-3.jpg";
import carBg4 from "../img/bg/auth-page-bg-4.jpg";
import carBg5 from "../img/bg/auth-page-bg-5.jpg";
import carBg6 from "../img/bg/auth-page-bg-6.jpg";
import carBg7 from "../img/bg/auth-page-bg-7.jpg";

const AuthLayout = () => {
  const location = useLocation();
  const [isSignUpPage, setIsSignUpPage] = useState(true);
  const pathArr = location.pathname.split("/").filter((path) => path !== "");

  useEffect(() => {
    setIsSignUpPage(pathArr[1] === "signup");
  }, [location.pathname]);

  return (
    <div className="grid grid-cols-1 w-full h-screen lg:grid-cols-2">
      {/* animated background */}
      <div
        className={`${
          isSignUpPage ? "translate-x-0" : "lg:translate-x-full"
        } hidden duration-500 transition-transform lg:block`}
      >
        <Swiper
          loop={true}
          effect={"fade"}
          className="w-full h-screen"
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 5000,
          }}
        >
          {/* slide 1 */}
          <SwiperSlide className="size-full">
            <img
              src={carBg1}
              alt="car background image"
              className="size-full object-cover bg-111/5"
            />
          </SwiperSlide>

          {/* slide 2 */}
          <SwiperSlide className="size-full">
            <img
              src={carBg2}
              alt="car background image"
              className="size-full object-cover bg-111/5"
            />
          </SwiperSlide>

          {/* slide 3 */}
          <SwiperSlide className="size-full">
            <img
              src={carBg3}
              alt="car background image"
              className="size-full object-cover bg-111/5"
            />
          </SwiperSlide>

          {/* slide 4 */}
          <SwiperSlide className="size-full">
            <img
              src={carBg4}
              alt="car background image"
              className="size-full object-cover bg-111/5"
            />
          </SwiperSlide>

          {/* slide 5 */}
          <SwiperSlide className="size-full">
            <img
              src={carBg5}
              alt="car background image"
              className="size-full object-cover bg-111/5"
            />
          </SwiperSlide>

          {/* slide 6 */}
          <SwiperSlide className="size-full">
            <img
              src={carBg6}
              alt="car background image"
              className="size-full object-cover bg-111/5"
            />
          </SwiperSlide>

          {/* slide 7 */}
          <SwiperSlide className="size-full">
            <img
              src={carBg7}
              alt="car background image"
              className="size-full object-cover bg-111/5 object-center"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* page content */}
      <div
        className={`${
          isSignUpPage ? "translate-x-0" : "lg:-translate-x-full"
        } flex justify-center h-screen overflow-y-scroll bg-white px-5 duration-500 transition-transform`}
      >
        <div className="max-w-md w-full h-max space-y-10 py-8 my-auto md:space-y-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
