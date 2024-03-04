import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cars } from "../data";
import CarItem from "./CarItem";

import logo from "../img/logo.svg";
import search from "../img/search.svg";
import cross from "../img/cross.svg";
import malibu from "../img/favicon-40x40.svg";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  const [searchStyles, setSearchStyles] = useState({
    display: "none",
    opacity: 0,
    transform: "translateY(-100px)",
  });

  const allKeywords = cars.map((car) => ({
    name: `${car.model} ${car.marka}`,
    model: car.model,
    marka: car.marka,
  }));

  const [searchedCars, setSearchedCars] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchInputRef = useRef(null);

  // filter && sort
  const filterKeywords = (e) => {
    const formattedValue = e.target.value.trim();
    setSearchInputValue(formattedValue);

    if (formattedValue !== "") {
      const filteredKeywords = allKeywords
        .filter((keyword) =>
          keyword.name.toLowerCase().includes(formattedValue.toLowerCase())
        )
        .map((keyword) => keyword.name)
        .sort(
          (a, b) =>
            a.toLowerCase().indexOf(formattedValue.toLowerCase()) -
            b.toLowerCase().indexOf(formattedValue.toLowerCase())
        )
        .slice(0, 6);
      setKeywords(filteredKeywords);
    } else {
      setKeywords([]);
    }
  };

  // find cars
  const searchCars = () => {
    const formattedSearchInputValue = searchInputRef.current.value.trim();
    if (formattedSearchInputValue !== "") {
      setIsSearched(true);
      const filteredCars = cars.filter((car) =>
        `${car.model} ${car.marka}`
          .toLowerCase()
          .includes(formattedSearchInputValue.toLowerCase())
      );
      setSearchedCars(filteredCars);
      setKeywords([]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenNavbar(false);
        setOpenSearch(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // close search and navbar
  useEffect(() => {
    setIsHome(location.pathname === "/");
    setOpenSearch(false);
    setOpenNavbar(false);
  }, [location]);

  // close navbar > 768
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // animation search panel
  useEffect(() => {
    if (openSearch) {
      setSearchStyles({
        display: "block",
        opacity: 0,
        transform: "translateY(-100px)",
      });
      setTimeout(() => {
        setSearchStyles({
          display: "block",
          opacity: 1,
          transform: "translateY(0px)",
        });
        searchInputRef.current.focus();
      }, 200);
    } else {
      setSearchStyles({
        display: "block",
        opacity: 0,
        transform: "translateY(-100px)",
      });
      setTimeout(() => {
        setSearchStyles({
          display: "none",
          opacity: 0,
          transform: "translateY(-100px)",
        });
      }, 200);
    }
  }, [openSearch]);

  return (
    <>
      {/* header */}
      <header className="py-5 bg-teal-900/10 z-10">
        <div className="flex justify-between items-center w-full max-w-base mx-auto px-5">
          {/* logo */}
          <Link
            aria-label="home"
            title="mashina bozor"
            className="flex items-center justify-center gap-2 text-xl text-white font-semibold leading-none"
            to="/"
          >
            <img
              width={44}
              height={44}
              src={malibu}
              alt="chevrolet malibu"
              className="w-9 h-9 sm:h-10 md:w-11 md:h-11"
            />
            <span
              className={`${isHome ? "text-white" : "text-black"} sm:hidden`}
            >
              M
              <span className={`${isHome ? "text-white" : "text-main"}`}>
                B
              </span>
            </span>
            <h1
              className={`${
                isHome ? "text-white" : "text-main"
              } hidden sm:block`}
            >
              Mashina
              <span className={`${isHome ? "text-white" : "text-111"}`}>
                bozor
              </span>
            </h1>
          </Link>

          {/* navbar */}
          <nav>
            <ul
              className={`${
                isHome ? "text-white" : "text-111"
              } hidden items-center gap-6 text-base font-medium leading-7 md:flex`}
            >
              <li>
                <NavLink to="/catalog">Katalog</NavLink>
              </li>
              <li>
                <NavLink to="/news">Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink to="/elon">Elon joylash</NavLink>
              </li>
              <li>
                <NavLink to="/elon/sharx">Sharx qoldirish</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Bog'lanish</NavLink>
              </li>
            </ul>
          </nav>

          {/* actions */}
          <div className="flex z-20 items-center gap-6 sm:gap-8">
            {/* search */}
            <button
              onClick={() => {
                setOpenSearch(true);
              }}
              title="search"
              aria-label="search button"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7929 25.2071C24.1834 25.5976 24.8166 25.5976 25.2071 25.2071C25.5976 24.8166 25.5976 24.1834 25.2071 23.7929L23.7929 25.2071ZM18.3484 19.7624L23.7929 25.2071L25.2071 23.7929L19.7627 18.3482L18.3484 19.7624ZM12.3889 20.2775C8.03198 20.2775 4.5 16.7456 4.5 12.3886H2.5C2.5 17.8501 6.92741 22.2775 12.3889 22.2775V20.2775ZM20.2778 12.3886C20.2778 16.7456 16.7458 20.2775 12.3889 20.2775V22.2775C17.8504 22.2775 22.2778 17.8501 22.2778 12.3886H20.2778ZM12.3889 4.49976C16.7458 4.49976 20.2778 8.03173 20.2778 12.3886H22.2778C22.2778 6.92716 17.8504 2.49976 12.3889 2.49976V4.49976ZM12.3889 2.49976C6.92741 2.49976 2.5 6.92716 2.5 12.3886H4.5C4.5 8.03173 8.03198 4.49976 12.3889 4.49976V2.49976Z"
                  fill={`${isHome ? "#fff" : "#111"}`}
                />
              </svg>
            </button>

            {/* favorites link */}
            <Link
              aria-label="favorites"
              to="/favorites"
              className="relative btn-normal"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2261 6.99763L14.2996 7.91784C14.3548 7.96512 14.4362 7.96512 14.4914 7.91784L15.5649 6.99763C18.5678 4.42372 23.1789 5.26951 25.0728 8.74164C26.4382 11.2449 25.9265 14.356 23.8312 16.2901L14.6961 24.7225C14.5264 24.8792 14.2647 24.8792 14.0949 24.7225L4.95978 16.2901C2.86453 14.356 2.35283 11.2449 3.71825 8.74164C5.61214 5.26951 10.2232 4.42372 13.2261 6.99763Z"
                  stroke={`${isHome ? "#fff" : "#111"}`}
                  strokeWidth="2"
                />
              </svg>

              {/* count */}
              <span className="flex absolute w-5 h-5 bg-main items-center justify-center -top-1 -right-3 rounded-full text-white text-xs leading-none font-bold">
                0
              </span>
            </Link>

            {/* call */}
            <a
              title="contact"
              aria-label="contact"
              className="hidden md:inline-block"
              href="tel:+998881690033"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9727 19.0348L18.6721 17.3346C18.9336 17.0699 19.245 16.8595 19.5882 16.7161C19.9315 16.5726 20.2998 16.4989 20.6717 16.4989C21.0438 16.4989 21.412 16.5726 21.7554 16.7161C22.0986 16.8595 22.4099 17.0699 22.6714 17.3346L24.6646 19.3288C24.9292 19.5903 25.1394 19.9016 25.2828 20.245C25.4261 20.5884 25.5 20.957 25.5 21.3291C25.5 21.7013 25.4261 22.0699 25.2828 22.4133C25.1394 22.7567 24.9292 23.0679 24.6646 23.3294L23.7574 24.2498C23.1324 24.8812 22.3239 25.2992 21.4474 25.4438C20.5709 25.5883 19.6711 25.4525 18.8765 25.0552C12.0385 21.5338 6.46884 15.9662 2.94327 9.12839C2.54581 8.33259 2.41085 7.43118 2.55779 6.55381C2.70473 5.67642 3.126 4.86816 3.76104 4.24542L4.66818 3.32512C5.19962 2.79667 5.91851 2.5 6.66782 2.5C7.41714 2.5 8.13602 2.79667 8.66747 3.32512L10.6735 5.33204C11.2018 5.86371 11.4983 6.5828 11.4983 7.33242C11.4983 8.08204 11.2018 8.80113 10.6735 9.3328L8.97411 11.033C10.0978 12.5535 11.332 13.9888 12.6667 15.3276C13.9938 16.6575 15.4205 17.8841 16.9344 18.9964L16.9727 19.0348Z"
                  stroke={isHome ? "#fff" : "#111"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* hamburger */}
            <button
              title="hamburger button"
              aria-label="hamburger button"
              className={`hamburger-btn ${
                openNavbar ? "hamburger-btn-active" : ""
              }`}
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              <span className="hamburger-btn_items-wrapper">
                <span
                  className={`hamburger-btn_item ${
                    isHome ? "" : openNavbar ? "bg-white" : "!bg-111"
                  }`}
                ></span>
                <span
                  className={`hamburger-btn_item ${
                    isHome ? "" : openNavbar ? "bg-white" : "!bg-111"
                  }`}
                ></span>
                <span
                  className={`hamburger-btn_item ${
                    isHome ? "" : openNavbar ? "bg-white" : "!bg-111"
                  }`}
                ></span>
              </span>
            </button>

            {/* overlay */}
            <div
              className={`${
                openNavbar ? "block md:hidden" : "hidden"
              } fixed top-0 right-0 z-20 bg-black/70 w-full min-h-screen`}
              onClick={() => {
                setOpenNavbar(false);
              }}
            ></div>
          </div>
        </div>
      </header>

      {/* responsive navbar*/}
      <div
        className={`${
          openNavbar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } flex flex-col top-0 left-0 fixed bg-white h-screen z-30 py-6 px-5 overflow-y-auto transition-transform duration-300 md:hidden`}
      >
        <Link
          aria-label="home"
          title="mashina bozor"
          className="flex items-center text-xl text-white font-semibold leading-none space-x-1 mb-6"
          to="/"
        >
          <img width={36} height={36} src={logo} alt="logo" />
          <h1 className="text-main">
            Mashina <span className="text-111">bozor</span>
          </h1>
        </Link>

        <nav className="mb-auto">
          <ul className="flex text-lg text-111 font-medium leading-7 flex-col items-start gap-3">
            <li>
              <NavLink to="/catalog">Katalog</NavLink>
            </li>
            <li>
              <NavLink to="/news">Yangiliklar</NavLink>
            </li>
            <li>
              <NavLink to="/elon">Elon joylash</NavLink>
            </li>
            <li>
              <NavLink to="/elon/sharx">Sharx qoldirish</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Bog'lanish</NavLink>
            </li>
          </ul>
        </nav>

        {/* call */}
        <a
          title="contact"
          aria-label="contact"
          className="flex w-auto bg-main items-center justify-center gap-3 px-6 py-2.5 rounded-full mobile-m:w-64 mt-5 md:hidden"
          href="tel:+998881690033"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9727 19.0348L18.6721 17.3346C18.9336 17.0699 19.245 16.8595 19.5882 16.7161C19.9315 16.5726 20.2998 16.4989 20.6717 16.4989C21.0438 16.4989 21.412 16.5726 21.7554 16.7161C22.0986 16.8595 22.4099 17.0699 22.6714 17.3346L24.6646 19.3288C24.9292 19.5903 25.1394 19.9016 25.2828 20.245C25.4261 20.5884 25.5 20.957 25.5 21.3291C25.5 21.7013 25.4261 22.0699 25.2828 22.4133C25.1394 22.7567 24.9292 23.0679 24.6646 23.3294L23.7574 24.2498C23.1324 24.8812 22.3239 25.2992 21.4474 25.4438C20.5709 25.5883 19.6711 25.4525 18.8765 25.0552C12.0385 21.5338 6.46884 15.9662 2.94327 9.12839C2.54581 8.33259 2.41085 7.43118 2.55779 6.55381C2.70473 5.67642 3.126 4.86816 3.76104 4.24542L4.66818 3.32512C5.19962 2.79667 5.91851 2.5 6.66782 2.5C7.41714 2.5 8.13602 2.79667 8.66747 3.32512L10.6735 5.33204C11.2018 5.86371 11.4983 6.5828 11.4983 7.33242C11.4983 8.08204 11.2018 8.80113 10.6735 9.3328L8.97411 11.033C10.0978 12.5535 11.332 13.9888 12.6667 15.3276C13.9938 16.6575 15.4205 17.8841 16.9344 18.9964L16.9727 19.0348Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium text-lg text-white">Telefon raqam</span>
        </a>
      </div>

      {/* search */}
      <div
        style={searchStyles}
        className="fixed z-30 w-full min-h-screen bg-white inset-0 transition-all duration-300"
      >
        {/* content header */}
        <div className="z-20 bg-[#EFF2F4] py-6">
          <div className="flex max-w-base w-full gap-5 items-center px-5 mx-auto">
            <img
              width={28}
              height={28}
              src={search}
              alt="search icon"
              className="hidden w-7 h-7 md:block"
            />

            {/* search input wrapper */}
            <div className="relative z-10 grow">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  searchCars();
                }}
                className="w-full"
              >
                <input
                  ref={searchInputRef}
                  onChange={(e) => filterKeywords(e)}
                  placeholder="Qidirish"
                  type="text"
                  className="js-search-input w-full px-6 py-3 text-111 text-base font-semibold rounded-lg focus:outline outline-2"
                />
              </form>

              {/* autocomplete */}
              <div
                style={{ display: keywords.length > 0 ? "block" : "none" }}
                className="absolute top-[calc(100%+10px)] w-[calc(100%+68px)] sm:w-full bg-white p-2.5 rounded-lg shadow-xl"
              >
                <ul className="space-y-0.5">
                  {keywords.map((keyword, index) => {
                    return (
                      <li key={index} className="w-full">
                        <button
                          onClick={() => {
                            searchInputRef.current.value = keyword;
                            searchCars();
                          }}
                          className="flex items-center gap-3 w-full text-start px-2.5 py-1.5 font-medium rounded transition-colors duration-300 hover:bg-[#EFF2F4] focus:bg-[#EFF2F4]"
                        >
                          <img
                            width={20}
                            height={20}
                            src={search}
                            alt="search icon"
                            className="w-5 h-5"
                          />
                          <span className="line-clamp-1">{keyword}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* close button */}
            <button
              onClick={() => {
                setOpenSearch(false);
              }}
              className="inline-block bg-main p-3 text-white text-base font-semibold rounded-lg sm:px-6"
            >
              <img
                width={24}
                height={24}
                src={cross}
                alt="cross icon"
                className="block min-w-6 min-h-6 sm:hidden"
              />
              <span className="hidden sm:block">Yopish</span>
            </button>
          </div>
        </div>

        {/* search results */}
        <div className="z-10 h-[calc(100%-136px)] pt-5 md:pt-10 overflow-y-auto search-result">
          <div className="w-full max-w-base mx-auto px-5 pt-2 pb-10">
            <h1 className="text-xl leading-7 text-111 font-semibold mb-8 sm:text-2xl md:leading-9">Qidiruv bo'yicha natijalar:</h1>
            {searchedCars.length > 0 ? (
              <ul className="grid grid-cols-1 gap-7 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {searchedCars.map((car) => (
                  <CarItem key={car.id} {...car} />
                ))}
              </ul>
            ) : isSearched ? (
              <p className="text-lg font-medium text-[#9FA3AF]">
                Hech qanday mashina topilmadi :(
              </p>
            ) : (
              <p className="text-lg font-medium text-[#9FA3AF]">
                Nimani qidiramiz
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
