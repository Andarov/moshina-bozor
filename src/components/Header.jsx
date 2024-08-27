import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// components
import Dropdown from "./Dropdown";
import LikeIcon from "./LikeIcon";
import HeaderMenu from "./HeaderMenu";

// images
import malibu from "../img/favicon-40x40.svg";
import loginIcon from "../img/icon/login.svg";
import userPlusIcon from "../img/icon/user-plus.svg";
import megaphoneIcon from "../img/icon/megaphone.svg";
import loginFilledIcon from "../img/icon/login-filled.svg";

// dropdown items
const dropdownItems = [
  {
    label: (
      <Link
        to="/auth/signup"
        className="flex items-center gap-3.5 px-3.5 py-2.5 transition-colors hover:bg-gray-100"
      >
        {/* item icon */}
        <img
          width={24}
          height={24}
          alt="user icon"
          src={userPlusIcon}
          className="size-6"
        />

        {/* item text */}
        <span>Ro'yxatdan o'tish</span>
      </Link>
    ),
  },
  {
    label: (
      <Link
        to="/auth/signin"
        className="flex items-center gap-3.5 px-3.5 py-2.5 transition-colors hover:bg-gray-100"
      >
        {/* item icon */}
        <img
          width={24}
          height={24}
          src={loginIcon}
          alt="login icon"
          className="size-6"
        />

        {/* item text */}
        <span>Akkauntga kirish</span>
      </Link>
    ),
  },
];

const Header = () => {
  // ref & states
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  // close menu with escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => setOpenMenu(false), [location]);

  return (
    <>
      {/* header */}
      <header className="z-10 bg-white py-3 border-b border-111/10 sm:py-4 md:py-5">
        <div className="flex justify-between items-center container">
          {/* hamburger btn & logo wrapper */}
          <div className="flex items-center gap-5">
            {/* hamburger btn */}
            <button
              title="hamburger"
              aria-label="hamburger"
              onClick={() => setOpenMenu((state) => !state)}
              className={`hamburger-btn ${openMenu ? "active" : ""}`}
            >
              <span className="hamburger-btn-items">
                <span className="hamburger-btn-item"></span>
                <span className="hamburger-btn-item"></span>
                <span className="hamburger-btn-item"></span>
              </span>
            </button>

            {/* logo */}
            <Link
              to="/"
              aria-label="home"
              title="mashina bozor"
              className="flex items-center justify-center gap-4"
            >
              <img
                width={44}
                height={44}
                src={malibu}
                alt="chevrolet malibu"
                className="size-8 sm:size-10 md:size-11"
              />

              {/* mobile text */}
              <span className="text-xl font-semibold leading-none sm:hidden">
                <span>M</span>
                <span className="text-main">B</span>
              </span>

              {/* laptop text */}
              <h1 className="hidden text-xl font-semibold leading-none sm:inline-block">
                <span className="text-main">M</span>
                <span>ashina</span>
                <span className="text-main">B</span>
                <span className="">ozor</span>
              </h1>
            </Link>
          </div>

          {/* header actions */}
          <div className="flex items-center gap-4 sm:gap-7">
            {/* announcement */}
            <Link
              to="/elon"
              className="hidden items-center gap-2.5 p-2.5 bg-main/5 rounded-lg border border-b-0 border-main/[0.08] transition-colors hover:bg-main/[0.08] md:flex"
            >
              {/* icon */}
              <img
                width={24}
                height={24}
                className="size-6"
                src={megaphoneIcon}
                alt="megaphone icon"
              />

              {/* text */}
              <span className="font-medium">E'lon joylash</span>
            </Link>

            {/* search */}
            <button
              title="search"
              className="p-1.5"
              aria-label="search"
              onClick={() => {
                setOpenSearch(true);
              }}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#111111"
                  d="M23.7929 25.2071C24.1834 25.5976 24.8166 25.5976 25.2071 25.2071C25.5976 24.8166 25.5976 24.1834 25.2071 23.7929L23.7929 25.2071ZM18.3484 19.7624L23.7929 25.2071L25.2071 23.7929L19.7627 18.3482L18.3484 19.7624ZM12.3889 20.2775C8.03198 20.2775 4.5 16.7456 4.5 12.3886H2.5C2.5 17.8501 6.92741 22.2775 12.3889 22.2775V20.2775ZM20.2778 12.3886C20.2778 16.7456 16.7458 20.2775 12.3889 20.2775V22.2775C17.8504 22.2775 22.2778 17.8501 22.2778 12.3886H20.2778ZM12.3889 4.49976C16.7458 4.49976 20.2778 8.03173 20.2778 12.3886H22.2778C22.2778 6.92716 17.8504 2.49976 12.3889 2.49976V4.49976ZM12.3889 2.49976C6.92741 2.49976 2.5 6.92716 2.5 12.3886H4.5C4.5 8.03173 8.03198 4.49976 12.3889 4.49976V2.49976Z"
                />
              </svg>
            </button>

            {/* favorites link */}
            <Link
              to="/favorites"
              aria-label="favorites"
              className="relative p-1.5"
            >
              {/* <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 29 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="2"
                  stroke="#111111"
                  d="M13.2261 6.99763L14.2996 7.91784C14.3548 7.96512 14.4362 7.96512 14.4914 7.91784L15.5649 6.99763C18.5678 4.42372 23.1789 5.26951 25.0728 8.74164C26.4382 11.2449 25.9265 14.356 23.8312 16.2901L14.6961 24.7225C14.5264 24.8792 14.2647 24.8792 14.0949 24.7225L4.95978 16.2901C2.86453 14.356 2.35283 11.2449 3.71825 8.74164C5.61214 5.26951 10.2232 4.42372 13.2261 6.99763Z"
                />
              </svg> */}
              <LikeIcon size={24} strokeWidth={1.7} />

              {/* circle shape */}
              <span className="absolute size-3 bg-main top-1.5 right-0.5 rounded-full border-2 border-white"></span>
            </Link>

            {/* dropdown */}
            <Dropdown className="h-9" menuItems={dropdownItems}>
              <button title="Login" aria-label="login" className="p-1">
                <img
                  width={28}
                  alt="login"
                  height={28}
                  className="size-7"
                  src={loginFilledIcon}
                />
              </button>
            </Dropdown>
          </div>
        </div>
      </header>

      {/* menu */}
      <HeaderMenu isOpen={openMenu} />
    </>
  );
};

export default Header;
