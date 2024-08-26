import React from "react";

// images
import callIcon from "../img/icon/call.svg";
import hourIcon from "../img/icon/hour.svg";
import locationIcon from "../img/icon/location.svg";

const Contact = () => {
  return (
    <div className="pb-12">
      <div className="container space-y-8 sm:space-y-12">
        {/* title ] */}
        <h1 className="text-3xl text-111 font-bold md:text-4xl">Bog'lanish</h1>

        {/* list */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* address */}
          <li className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-111/10">
            {/* icon */}
            <img
              width={24}
              height={24}
              className="size-6"
              src={locationIcon}
              alt="location icon"
            />

            {/* details */}
            <div className="space-y-1.5">
              <h3 className="font-bold sm:text-lg">Manzil</h3>

              {/* description */}
              <address className="not-italic text-sm text-111/70 sm:text-base">
                Andijon shahar, Qo'shariq 22-uy
              </address>
            </div>
          </li>

          {/* phone number */}
          <li className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-111/10">
            {/* icon */}
            <img
              width={24}
              height={24}
              src={callIcon}
              alt="call icon"
              className="size-6"
            />

            {/* details */}
            <div className="space-y-1.5">
              <h3 className="font-bold sm:text-lg">Telefon raqam</h3>

              {/* description */}
              <a
                href="tel:+998881690033"
                className="inline-block text-sm text-111/70 transition-colors hover:text-main sm:text-base"
              >
                +998(88) 169-00-33
              </a>
            </div>
          </li>

          {/* working time */}
          <li className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-111/10 md:col-span-2 lg:col-span-1">
            {/* icon */}
            <img
              width={24}
              height={24}
              src={hourIcon}
              alt="time icon"
              className="size-6"
            />

            {/* details */}
            <div className="space-y-1.5">
              <h3 className="font-bold sm:text-lg">Ish vaqti</h3>

              {/* description */}
              <p className="text-sm text-111/70 sm:text-base">
                9:00 dan 18:00 gacha
              </p>
            </div>
          </li>
        </ul>

        {/* details (main info) */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* details */}
          <div className="space-y-5">
            {/* section title */}
            <h2 className="text-xl font-bold">Umumiy ma'lumotlar:</h2>

            {/* info list */}
            <ul className="space-y-5">
              {/* item */}
              <li className="space-y-1.5">
                <h3 className="text-base text-111/70">Kompaniya nomi</h3>

                {/* description */}
                <p className="text-base font-medium">"Mashina bozor" MCHJ</p>
              </li>

              {/* item */}
              <li className="space-y-1.5">
                <h3 className="text-base text-111/70">To'liq manzil</h3>

                {/* description */}
                <p className="text-base font-medium">
                  Andijon viloyati, Andijon shahar, Qo'shariq daxasi 22-uy
                </p>
              </li>

              {/* item */}
              <li className="space-y-1.5">
                <h3 className="text-base text-111/70">INN:</h3>

                {/* description */}
                <p className="text-base font-medium">540508146785</p>
              </li>

              {/* item */}
              <li className="space-y-1.5">
                <h3 className="text-base text-111/70">Bosh direktor:</h3>

                {/* description */}
                <p className="text-base font-medium">
                  Andarov Bektur Ibroximjon o'g'li
                </p>
              </li>
            </ul>
          </div>

          {/* map */}
          <div className="w-full bg-gray-400">
            <iframe
              loading="lazy"
              className="w-full h-[400px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6497.36229050489!2d72.34037696855025!3d40.808700407126736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1704911053862!5m2!1sen!2s"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
