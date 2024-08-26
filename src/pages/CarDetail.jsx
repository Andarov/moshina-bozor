import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

// data
import { cars } from "../data";

// slider
import Slider from "react-slick";

// components
import CTA from "../components/CTA";
import Arrow from "../components/Arrow";
import CarItem from "../components/CarItem";
import LikeIcon from "../components/LikeIcon";
import DottedLabel from "../components/DottedLabel";

// redux
import { useDispatch } from "react-redux";
import { openModal } from "../store/slices/modalsSlice";

// images
import shareIcon from "../img/icon/share.svg";
import moreIcon from "../img/icon/more-circle.svg";
import chatIcon from "../img/icon/chat-round-line.svg";
import warningIcon from "../img/icon/warning-circle.svg";

const CarDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const carItem = cars.find((car) => car.id === id);
  const selectedCarMarkaArray = cars.filter(
    (car) => car.model === carItem.model
  );

  // slider next
  const CustomNextArrow = (props) => (
    <button
      title="Keyingi"
      aria-label="next"
      onClick={props.onClick}
      className="flex items-center justify-center absolute right-2 top-[calc(50%-20px)] z-10 size-9 bg-white rounded-full border-2 border-111/40 transition-colors hover:bg-gray-50 sm:size-10"
    >
      <Arrow
        direction="right"
        fill="rgb(17 17 17 / 0.4)"
        className="size-[22px] sm:size-6"
      />
    </button>
  );

  // slider prev
  const CustomPrevArrow = (props) => (
    <button
      title="Oldingi"
      aria-label="prev"
      onClick={props.onClick}
      className="flex items-center justify-center absolute left-2 top-[calc(50%-20px)] z-10 size-9 bg-white rounded-full border-2 border-111/40 transition-colors hover:bg-gray-50 sm:size-10"
    >
      <Arrow fill="rgb(17 17 17 / 0.4)" className="size-[22px] sm:size-6" />
    </button>
  );

  // slider settings
  const settings = {
    dots: true,
    speed: 500,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <img
          key={i}
          width={100}
          height={65}
          alt={`Thumb ${i + 1}`}
          src={carItem.images[i]}
          className="border-[3px] border-transparent transition-colors duration-300"
        />
      );
    },
  };

  const openCarComplaintModal = () => {
    dispatch(openModal("carComplaintModal"));
  };

  return (
    <>
      {/* car item */}
      <div className="container lg:pb-8">
        {carItem ? (
          <div className="space-y-8 sm:space-y-10">
            {/* top */}
            <div className="flex flex-col justify-between gap-5 sm:items-center sm:flex-row">
              {/* page title */}
              <h1>{carItem.marka}</h1>

              {/* actions */}
              <div className="flex items-center gap-5 shrink-0">
                {/* like */}
                <button
                  aria-label="toggle like"
                  onClick={() => setIsLiked((state) => !state)}
                  className="bg-gray-50 rounded-full p-2 transition-colors hover:bg-gray-200/70 sm:p-2.5"
                  title={
                    isLiked
                      ? "Yoqtirilganlardan olib tashlash"
                      : "Yoqtirilganlarga qo'shish"
                  }
                >
                  <LikeIcon isLiked={isLiked} strokeWidth={1.5} />
                </button>

                {/* share */}
                <button
                  title="Ulashish"
                  aria-label="share this car"
                  className="bg-gray-50 rounded-full p-2 transition-colors hover:bg-gray-200/70 sm:p-2.5"
                >
                  <img
                    width={24}
                    height={24}
                    src={shareIcon}
                    alt="share icon"
                    className="size-6"
                  />
                </button>

                {/* complaint */}
                <button
                  title="Shikoyat qilish"
                  aria-label="complaining"
                  onClick={openCarComplaintModal}
                  className="bg-main/5 rounded-full p-2 transition-colors hover:bg-main/10 sm:p-2.5"
                >
                  <img
                    width={24}
                    height={24}
                    src={warningIcon}
                    className="size-6"
                    alt="complaint icon"
                  />
                </button>
              </div>
            </div>

            {/* car detail */}
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
              {/* slider */}
              <Slider {...settings}>
                {carItem.images.map((image, index) => (
                  <img
                    key={index}
                    width={565}
                    src={image}
                    height={400}
                    alt="car image"
                    className="h-[280px] object-cover w-full rounded-2xl sm:h-[320px] md:h-[400px]"
                  />
                ))}
              </Slider>

              {/* car detail content */}
              <div className="flex flex-col justify-center gap-5">
                {/* top */}
                <div className="flex items-start justify-between gap-3.5">
                  {/* car name */}
                  <h2 className="text-111 text-[20px] font-bold leading-7">
                    {carItem.model} {carItem.marka}
                  </h2>

                  {/* car logo */}
                  <img
                    width={40}
                    height={40}
                    alt="car logo"
                    src={carItem.logo}
                    className="size-8 object-contain sm:size-10"
                  />
                </div>

                {/* price */}
                <div className="flex flex-wrap items-center gap-1.5 font-medium text-xl">
                  <h3>Narxi: </h3>

                  <p className="text-main">{carItem.price.toLocaleString()}</p>
                </div>

                {/* contact */}
                <div className="space-y-5">
                  {/* contact list */}
                  <ul className="space-y-3.5">
                    <li>
                      <DottedLabel
                        children1={<h3>Sotuvchi</h3>}
                        children2={<p>{carItem.author}</p>}
                      />
                    </li>

                    {/* phone number */}
                    <li>
                      <DottedLabel
                        children1={<h3>Telefon raqam</h3>}
                        children2={
                          <a href={"tel:" + carItem.tel} className="text-main">
                            {carItem.tel}
                          </a>
                        }
                      />
                    </li>

                    {/* telegram username */}
                    <li>
                      <DottedLabel
                        children1={<h3>Telegram</h3>}
                        children2={
                          <a href={"tel:" + carItem.tel} className="text-main">
                            @{carItem.author}
                          </a>
                        }
                      />
                    </li>
                  </ul>

                  {/* chat link */}
                  <Link
                    to="chat"
                    title="Sotuvchi bilan onlayn chatda muloqot qilish"
                    className="flex items-center justify-center gap-3.5 w-full bg-teal-400 py-3 rounded-lg text-white font-medium transition-colors hover:bg-teal-300 sm:rounded-xl"
                  >
                    {/* icon */}
                    <img
                      width={24}
                      height={24}
                      src={chatIcon}
                      alt="chat icon"
                      className="size-6"
                    />

                    {/* text */}
                    <span className="min-w-[146px]">Xabar yozish...</span>
                  </Link>

                  {/* more info link */}
                  <a
                    href="#more-info"
                    title="Mashina haqida ba'tafsil ma'lumot olish"
                    className="flex items-center justify-center gap-3.5 w-full h-12 py-3 rounded-lg border border-111/10 font-medium transition-colors hover:bg-gray-50 sm:rounded-xl"
                  >
                    {/* icon */}
                    <img
                      width={24}
                      height={24}
                      src={moreIcon}
                      alt="more info icon"
                      className="size-6 rounded-full border border-111/15"
                    />

                    {/* text */}
                    <span className="">Ba'tafsil ma'lumot</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        ) : (
          // no data
          <h1>Mashina topilmadi!</h1>
        )}
      </div>

      {/* car info section */}
      <section id="more-info" className="py-12 md:py-20">
        <div className="container">
          {/* section title */}
          <h2 className="mb-8 ">Ba'tafsil ma'lumot</h2>

          {/* main content */}
          <div className="space-y-8">
            {/* list */}
            <ul className="max-w-3xl space-y-3.5 text-111/70">
              {/* probeg */}
              <li>
                <DottedLabel
                  children1={<h3>Probeg</h3>}
                  children2={<p>{carItem.run.toLocaleString()}</p>}
                />
              </li>

              {/* color */}
              <li>
                <DottedLabel
                  children1={<h3>Rangi</h3>}
                  children2={<p>{carItem.color}</p>}
                />
              </li>

              {/* year */}
              <li>
                <DottedLabel
                  children1={<h3>Ishlab chiqarilgan yili</h3>}
                  children2={<p>{carItem.year}</p>}
                />
              </li>

              {/* address */}
              <li>
                <DottedLabel
                  children1={<h3>Manzil</h3>}
                  children2={
                    <address className="not-italic">{carItem.place}</address>
                  }
                />
              </li>
            </ul>

            {/* description */}
            <div className="space-y-2.5">
              <h3 className="text-lg font-medium">Qo'shimcha malumot</h3>

              {/* description */}
              <p className="text-111/70">{carItem.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <CTA />

      {/* recommendation section (related cars) */}
      <section className="py-12 md:py-20">
        <div className="container">
          {/* section title */}
          <h2 className="mb-8">
            {selectedCarMarkaArray[0].model} modelidagi moshinalar
          </h2>

          {/* cars */}
          <ul className="grid grid-cols-1 gap-7 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {selectedCarMarkaArray.length > 0 &&
              selectedCarMarkaArray.slice(0, 3).map((car) => {
                return <CarItem key={car.id} {...car} />;
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CarDetail;
