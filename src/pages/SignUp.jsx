import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomInputMask from "../components/CustomInputMask";
import malibu from "../img/favicon-40x40.svg";
import ArrowSolid from "../components/ArrowSolid";
import axiosInstance from "../axiosInstance";

const SignUp = () => {
  const [isOpenOtp, setIsOpenOtp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    surname: "",
    email: "",
    password: "",
    bio: "",
    mobile: "",
    telegram: "",
    avatar: "", 
  });
  const [errors, setErrors] = useState({});

  const closeOtp = () => setIsOpenOtp(false);
  const handleOpenOtp = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsOpenOtp(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/; 

    if (!formData.name) newErrors.name = "Ismni kiriting.";
    if (!formData.surname) newErrors.surname = "Familiyani kiriting.";
    if (!formData.email) {
      newErrors.email = "E-pochta manzilini kiriting.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "To'g'ri e-pochta manzilini kiriting.";
    }
    if (!formData.password) {
      newErrors.password = "Parolni kiriting.";
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "Parol 8 ta katta harf, kichik harf va maxsus belgidan iborat bo'lishi kerak.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axiosInstance.post("users", formData); 
        console.log("Foydalanuvchi muvaffaqiyatli yaratildi:", response.data);
        setIsOpenOtp(true); 
      } catch (error) {
        console.error("Xatolik:", error);
        setErrors({ ...errors, api: "Ro'yxatdan o'tishda xato!" });
      }
    } else {
      setErrors(validationErrors);
    }
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
        <img
          width={44}
          height={44}
          src={malibu}
          alt="chevrolet malibu"
          className="w-9 h-9 sm:h-10 md:w-11 md:h-11"
        />
        <span>
          <span className="text-main">Mashina </span>
          <span className="text-111">bozor</span>
        </span>
      </Link>

      {/* signup content */}
      <div className={`${isOpenOtp ? "hidden" : "block"} space-y-10`}>
        <div className="space-y-5">
          <h1 className="text-2xl font-bold sm:text-[28px] sm:leading-normal">Ro'yxatdan o'tish</h1>
          <p className="opacity-70 sm:font-medium">Ro'yxatdan o'tish uchun ma'lumotlaringizni kiriting</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* name */}
          <div className="space-y-1">
            <label htmlFor="name" className="font-medium">
              Ism*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Falonchi"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          {/* surname */}
          <div className="space-y-1">
            <label htmlFor="surname" className="font-medium">
              Familiya*
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Falonchi"
              value={formData.surname}
              onChange={handleChange}
            />
            {errors.surname && <p className="text-red-500">{errors.surname}</p>}
          </div>

          {/* email */}
          <div className="space-y-1">
            <label htmlFor="email" className="font-medium">
              E-pochta*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="misol@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* password */}
          <div className="space-y-1">
            <label htmlFor="password" className="font-medium">
              Parol*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="parol1234"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          {/* submit btn */}
          <button type="submit">Keyingisi</button>
        </form>

        <div className="font-medium">
          <span>Akkauntingiz bormi? </span>
          <Link to="/auth/signin" className="text-teal-500">
            Akkauntga kirish
          </Link>
        </div>
      </div>

      {/* otp content */}
      <div className={`${isOpenOtp ? "block" : "hidden"} space-y-10`}>
        <div className="space-y-5">
          <button
            onClick={closeOtp}
            aria-label="go back"
            title="Ortga qaytish"
            className="flex items-center gap-2.5 py-1.5 font-medium text-teal-500"
          >
            <ArrowSolid size={20} fill="#009688" />
            <span>Ortga qaytish</span>
          </button>
          <h1 className="text-2xl font-bold sm:text-[28px] sm:leading-normal">E-pochtani tasdiqlash</h1>
          <p className="opacity-70 sm:font-medium">
            <span>Iltimos biz sizning </span>
            <span className="font-bold">{formData.email} </span>
            <span>E-pochtangizga yuborgan kod orqali E-pochtangizni tasdiqlang.</span>
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleVerifyOtp();
          }}
        >
          <div className="space-y-3">
            <label htmlFor="otp-password" className="font-medium">
              Kod*
            </label>
            <CustomInputMask
              mask="9 9 9 9"
              id="otp-password"
              name="otp password"
              placeholder="_ _ _ _"
            />
          </div>
          <div className="flex items-center justify-between">
            00:59 soniyadan so'ng kodni qayta olishingiz mumkin
          </div>
          <button type="submit">Tasdiqlash</button>
        </form>

        <div className="font-medium">
          <span>Kodni olmadingizmi? </span>
          <a href="#" className="text-teal-500">
            Yordam olish
          </a>
        </div>
      </div>

      <p className="opacity-70">© 2024 - Mashina bozor. Barcha huquqlar himoyalangan</p>
    </>
  );
};

export default SignUp;
