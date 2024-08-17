import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import CustomInputMask from "../components/CustomInputMask";

// images
import malibu from "../img/favicon-40x40.svg";
import ArrowSolid from "../components/ArrowSolid";

const SignUp = () => {
  const [isOpenOtp, setIsOpenOtp] = useState(false);

  // close otp
  const closeOtp = () => setIsOpenOtp(false);

  // handle open otp
  const handleOpenOtp = () => {
    setIsOpenOtp(true);
  };

  // handle veriyf otp
  const handleVerifyOtp = () => {
    closeOtp();
  };

  return (
    <>
      {/* logo */}
      <Link
        to="/"
        aria-label="home"
        title="mashina bozor"
        className="flex items-center gap-2 text-xl text-white font-semibold leading-none"
      >
        {/* logo img */}
        <img
          width={44}
          height={44}
          src={malibu}
          alt="chevrolet malibu"
          className="w-9 h-9 sm:h-10 md:w-11 md:h-11"
        />

        {/* logo text */}
        <span>
          <span className="text-main">Mashina </span>
          <span className="text-111">bozor</span>
        </span>
      </Link>

      {/* signup content */}
      <div className={`${isOpenOtp ? "hidden" : "block"} space-y-10`}>
        {/* title wrapper */}
        <div className="space-y-5">
          {/* title */}
          <h1 className="text-2xl font-bold sm:text-[28px] sm:leading-normal">
            Ro'yxatdan o'tish
          </h1>

          {/* description */}
          <p className="opacity-70 sm:font-medium">
            Ro'yxatdan o'tish uchun ma'lumotlaringizni kiriting
          </p>
        </div>

        {/* login form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleOpenOtp();
          }}
        >
          {/* name */}
          <div className="space-y-3">
            <label htmlFor="name" className="font-medium">
              Ism*
            </label>

            {/* input */}
            <input type="text" id="name" name="name" placeholder="Falonchi" />
          </div>

          {/* surname */}
          <div className="space-y-3">
            <label htmlFor="surname" className="font-medium">
              Familiya*
            </label>

            {/* input */}
            <input
              type="text"
              name="name"
              id="surname"
              placeholder="Falonchi"
            />
          </div>

          {/* email */}
          <div className="space-y-3">
            <label htmlFor="email" className="font-medium">
              E-pochta*
            </label>

            {/* input */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="misol@gmail.com"
            />
          </div>

          {/* password */}
          <div className="space-y-3">
            <label htmlFor="password" className="font-medium">
              Parol*
            </label>

            {/* input */}
            <input
              type="text"
              id="password"
              name="password"
              placeholder="parol1234"
            />
          </div>

          {/* submit btn */}
          <button type="submit">Keyingisi</button>
        </form>

        {/* sign in link */}
        <div className="font-medium">
          <span>Akkauntingiz bormi? </span>

          {/* link */}
          <Link to="/auth/signin" className="text-teal-500">
            Akkauntga kirish
          </Link>
        </div>
      </div>

      {/* otp content */}
      <div className={`${isOpenOtp ? "block" : "hidden"} space-y-10`}>
        {/* title wrapper */}
        <div className="space-y-5">
          {/* go back */}
          <button
            onClick={closeOtp}
            aria-label="go back"
            title="Ortga qaytish"
            className="flex items-center gap-2.5 py-1.5 font-medium text-teal-500"
          >
            {/* icon */}
            <ArrowSolid size={20} fill="#009688" />

            {/* text */}
            <span>Ortga qaytish</span>
          </button>

          {/* title */}
          <h1 className="text-2xl font-bold sm:text-[28px] sm:leading-normal">
            E-pochtani tasdiqlash
          </h1>

          {/* description */}
          <p className="opacity-70 sm:font-medium">
            <span>Iltimos biz sizning </span>
            <span className="font-bold">misol@gmail.com </span>
            <span>
              E-pochtangizga yuborgan kod orqali E-pochtangizni tasdiqlang.
            </span>
          </p>
        </div>

        {/* otp form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleVerifyOtp();
          }}
        >
          {/* otp password */}
          <div className="space-y-3">
            <label htmlFor="otp-password" className="font-medium">
              Kod*
            </label>

            {/* input */}
            <CustomInputMask
              mask="9 9 9 9"
              id="otp-password"
              name="otp password"
              placeholder="_ _ _ _"
            />
          </div>

          {/* resend otp password */}
          <div className="flex items-center justify-between">
            00:59 soniyadan so'ng kodni qayta olishingiz mumkin
          </div>

          {/* submit btn */}
          <button type="submit">Tasdiqlash</button>
        </form>

        {/* comment is not available */}
        <div className="font-medium">
          <span>Kodni olmadingizmi? </span>

          {/* link */}
          <a href="#" className="text-teal-500">
            Yordam olish
          </a>
        </div>
      </div>

      {/* sub content */}
      <p className="opacity-70">
        © 2024 - Mashina bozor. Barcha huquqlar himoyalangan
      </p>
    </>
  );
};

export default SignUp;
