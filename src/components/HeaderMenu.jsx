import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// images
import listIcon from "../img/icon/list.svg";
import newsIcon from "../img/icon/news.svg";
import emailIcon from "../img/icon/email.svg";
import phoneIcon from "../img/icon/phone.svg";
import contactIcon from "../img/icon/contact.svg";
import commentIcon from "../img/icon/comment.svg";
import telegramIcon from "../img/icon/telegram.svg";
import megaphoneIcon from "../img/icon/megaphone.svg";
import facebookIcon from "../img/icon/facebook-multicolor.svg";
import instagramIcon from "../img/icon/instagram-multicolor.svg";
import telegramMulticolorIcon from "../img/icon/telegram-multicolor.svg";

const HeaderMenu = ({ isOpen = false }) => {
  const contentRef = useRef(null);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setTopPosition(contentRef.current.getBoundingClientRect().top);
    }
  }, []);

  return (
    <div
      ref={contentRef}
      className="overflow-hidden max-h-lg transition-[height] duration-200"
      style={{ height: isOpen ? `calc(100vh - ${topPosition}px)` : "0px" }}
    >
      <div className="h-full overflow-y-scroll">
        <div className="container pt-10 pb-12 sm:pt-12 sm:pb-16">
          <ul className="grid grid-cols-1 gap-y-8 gap-x-5 md:grid-cols-2">
            {/* company */}
            <li className="space-y-5">
              <h3 className="text-lg font-semibold">Kompaniya</h3>

              {/* list */}
              <nav>
                <ul className="space-y-3.5">
                  {/* catalog */}
                  <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                    <NavLink to="/catalog" className="flex items-start gap-4">
                      {/* item icon */}
                      <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                        <img
                          width={24}
                          height={24}
                          src={listIcon}
                          alt="list icon"
                          className="size-6"
                        />
                      </div>

                      {/* item details */}
                      <div className="space-y-1.5">
                        {/* item title */}
                        <h4 className="font-semibold">Katalog</h4>

                        {/* item description */}
                        <p className="opacity-70">
                          O'zingizga kerakli bo'lgan mashinani toping
                        </p>
                      </div>
                    </NavLink>
                  </li>

                  {/* elon */}
                  <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4 md:hidden">
                    <NavLink to="/elon" className="flex items-start gap-4">
                      {/* item icon */}
                      <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                        <img
                          width={24}
                          height={24}
                          className="size-6"
                          src={megaphoneIcon}
                          alt="megaphone icon"
                        />
                      </div>

                      {/* item details */}
                      <div className="space-y-1.5">
                        {/* item title */}
                        <h4 className="font-semibold">E'lon joylash</h4>

                        {/* item description */}
                        <p className="opacity-70">
                          Mashinangizni tezkor sotish uchun e'lon joylang
                        </p>
                      </div>
                    </NavLink>
                  </li>

                  {/* news */}
                  <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                    <NavLink to="/news" className="flex items-start gap-4">
                      {/* item icon */}
                      <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                        <img
                          width={24}
                          height={24}
                          src={newsIcon}
                          alt="news icon"
                          className="size-6"
                        />
                      </div>

                      {/* item details */}
                      <div className="space-y-1.5">
                        {/* item title */}
                        <h4 className="font-semibold">Yangiliklar</h4>

                        {/* item description */}
                        <p className="opacity-70">
                          Eng so'nggi yangiliklardan boxabar bo'ling
                        </p>
                      </div>
                    </NavLink>
                  </li>

                  {/* rating */}
                  <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                    <NavLink to="/rating" className="flex items-start gap-4">
                      {/* item icon */}
                      <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                        <img
                          width={24}
                          height={24}
                          src={listIcon}
                          alt="statistics icon"
                          className="size-6 -rotate-90"
                        />
                      </div>

                      {/* item details */}
                      <div className="space-y-1.5">
                        {/* item title */}
                        <h4 className="font-semibold">Reyting</h4>

                        {/* item description */}
                        <p className="opacity-70">
                          O'z mashinangiz reytingini aniqlab oling
                        </p>
                      </div>
                    </NavLink>
                  </li>

                  {/* item */}
                  <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                    <NavLink to="/elon/sharx" className="flex items-start gap-4">
                      {/* item icon */}
                      <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                        <img
                          width={24}
                          height={24}
                          src={commentIcon}
                          alt="comment icon"
                          className="size-6"
                        />
                      </div>

                      {/* item details */}
                      <div className="space-y-1.5">
                        {/* item title */}
                        <h4 className="font-semibold">Sharx qoldirish</h4>

                        {/* item description */}
                        <p className="opacity-70">
                          Siz bilgan mashina bo'yicha sharx qoldiring
                        </p>
                      </div>
                    </NavLink>
                  </li>

                  {/* item */}
                  <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                    <NavLink to="/contact" className="flex items-start gap-4">
                      {/* item icon */}
                      <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                        <img
                          width={24}
                          height={24}
                          src={contactIcon}
                          alt="contact icon"
                          className="size-6"
                        />
                      </div>

                      {/* item details */}
                      <div className="space-y-1.5">
                        {/* item title */}
                        <h4 className="font-semibold">Bog'lanish</h4>

                        {/* item description */}
                        <p className="opacity-70">
                          Muammo bormi? Biz bilan bog'laning
                        </p>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </li>

            {/* extra contact */}
            <li className="space-y-5">
              <h3 className="text-lg font-semibold">Tezkor bog'lanish</h3>

              {/* list */}
              <ul className="space-y-3.5">
                {/* tel */}
                <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                  <a
                    href="tel:+998881690033"
                    className="flex items-start gap-4"
                  >
                    {/* item icon */}
                    <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                      <img
                        width={24}
                        height={24}
                        src={phoneIcon}
                        className="size-6"
                        alt="phone number icon"
                      />
                    </div>

                    {/* item details */}
                    <div className="space-y-1.5">
                      {/* item title */}
                      <h4 className="font-semibold">Telefon raqam</h4>

                      {/* item description */}
                      <p className="opacity-70">
                        Du - shan, 9:00 dan 20:00 gacha ochiq
                      </p>
                    </div>
                  </a>
                </li>

                {/* email */}
                <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                  <a
                    href="mailto:example@gmail.com"
                    className="flex items-start gap-4"
                  >
                    {/* item icon */}
                    <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                      <img
                        width={24}
                        height={24}
                        src={emailIcon}
                        alt="email icon"
                        className="size-6"
                      />
                    </div>

                    {/* item details */}
                    <div className="space-y-1.5">
                      {/* item title */}
                      <h4 className="font-semibold">E-pochta</h4>

                      {/* item description */}
                      <p className="opacity-70">
                        Murojaatingiz 3 ish kuni ichida ko'rib chiqiladi
                      </p>
                    </div>
                  </a>
                </li>

                {/* bot */}
                <li className="py-4 rounded-xl transition-[background-color,padding] duration-300 hover:bg-gray-50 hover:px-4">
                  <a
                    target="_blank"
                    href="https://t.me/Andarov_b"
                    className="flex items-start gap-4"
                  >
                    {/* item icon */}
                    <div className="shrink-0 bg-white border border-111/15 p-2 rounded-lg">
                      <img
                        width={24}
                        height={24}
                        src={telegramIcon}
                        className="size-6"
                        alt="telegram icon"
                      />
                    </div>

                    {/* item details */}
                    <div className="space-y-1.5">
                      {/* item title */}
                      <h4 className="font-semibold">Telegram bot</h4>

                      {/* item description */}
                      <p className="opacity-70">
                        Eng qisqa vaqt ichida muammoingiz hal bo'ladi
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            {/* socials */}
            <li className="md:col-span-2">
              <div className="divider mb-8"></div>

              {/* title */}
              <h3 className="mb-5 text-lg font-semibold">Ijtimoiy tarmoqlar</h3>

              {/* list */}
              <ul className="flex gap-5">
                {/* instagram */}
                <li>
                  <a
                    target="_blank"
                    title="instagram"
                    aria-label="instagram"
                    href="https://instagram.com/"
                    className="inline-block transition-opacity duration-200 hover:opacity-80"
                  >
                    <img
                      width={24}
                      height={24}
                      className="size-10"
                      src={instagramIcon}
                      alt="instagram logo"
                    />
                  </a>
                </li>

                {/* facebook */}
                <li>
                  <a
                    target="_blank"
                    title="facebook"
                    aria-label="facebook"
                    href="https://facebook.com/"
                    className="inline-block transition-opacity duration-200 hover:opacity-80"
                  >
                    <img
                      width={24}
                      height={24}
                      className="size-10"
                      src={facebookIcon}
                      alt="facebook logo"
                    />
                  </a>
                </li>

                {/* telegram */}
                <li>
                  <a
                    target="_blank"
                    title="telegram"
                    href="https://t.me/"
                    aria-label="telegram"
                    className="inline-block transition-opacity duration-200 hover:opacity-80"
                  >
                    <img
                      width={24}
                      height={24}
                      className="size-10"
                      alt="telegram logo"
                      src={telegramMulticolorIcon}
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
