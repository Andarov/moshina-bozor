import React from "react";
import { Link } from "react-router-dom";

// images
import moreIcon from "../img/icon/more-circle.svg";
import telegramIcon from "../img/icon/telegram-filled.svg";

const CTA = () => {
  return (
    <section className="py-20 bg-detailBg bg-cover">
      <div className="container">
        <div className="w-full max-w-md space-y-6 text-white">
          {/* title */}
          <h2 className="text-2xl leading-7 font-bold sm:text-3xl md:leading-9">
            Biz bilan bog'lanish
          </h2>

          {/* description */}
          <p className="opacity-80 font-medium">
            Sizda muammo yoki taklif bormi? Unday bo'lsa biz bilan tezkor
            bog'laning! Barcha murojaatlar 3 ish kuni ichida ko'rib chiqiladi.
          </p>

          {/* icons wrapper */}
          <div className="flex flex-col gap-6 sm:flex-row">
            <a
              target="_blank"
              href="https://t.me/Andarov_B"
              className="flex items-center justify-center w-full gap-5 py-3 bg-main rounded-lg transition-colors duration-200 hover:bg-main/80 sm:w-52"
            >
              <img
                width={24}
                height={24}
                src={telegramIcon}
                className="size-6"
                alt="telegram Icon"
              />
              <span className="font-medium">Telegram</span>
            </a>

            {/* more */}
            <Link
              to="/contact"
              className="flex items-center justify-center w-full gap-5 py-3 bg-main rounded-lg transition-colors duration-200 hover:bg-main/80 sm:w-52"
            >
              <img
                width={24}
                height={24}
                src={moreIcon}
                alt="more Icon"
                className="size-6"
              />
              <span className="font-medium min-w-[76px]">Ko'proq</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
