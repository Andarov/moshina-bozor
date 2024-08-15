import React from "react";
import { Link } from "react-router-dom";

// images
import malibu from "../img/favicon-40x40.svg";

const SignIn = () => {
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

      {/* mid content */}
      <div className="space-y-10">
        {/* title wrapper */}
        <div className="space-y-5">
          {/* title */}
          <h1 className="text-2xl font-bold sm:text-[28px] sm:leading-normal">
            Akkauntga kirish
          </h1>

          {/* description */}
          <p className="opacity-70 sm:font-medium">
            Akkauntga kirish uchun ma'lumotlaringizni kiriting
          </p>
        </div>

        {/* login form */}
        <form className="space-y-6">
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

          {/* forgot password */}
          <p className="font-medium">
            <span>Parolni unutdingizmi? </span>

            {/* link */}
            <Link className="text-teal-500">Qayta tiklash</Link>
          </p>

          {/* submit btn */}
          <button type="submit">Kirish</button>
        </form>

        {/* sign up link */}
        <div className="font-medium">
          <span>Akkauntingiz yo'qmi? </span>

          {/* link */}
          <Link to="/auth/signup" className="text-teal-500">
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>

      {/* sub content */}
      <p className="opacity-70">
        © 2024 - Mashina bozor. Barcha huquqlar himoyalangan
      </p>
    </>
  );
};

export default SignIn;
