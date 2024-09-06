import React from "react";

// components
import Breadcrumbs from "../components/Breadcrumbs";

// images
import imageAddImg from "../img/icon/image-add.svg";
import crossImg from "../img/icon/cross-circle.svg";

const AddCar = () => {
  return (
    <>
      {/* breadcrumbs */}
      <Breadcrumbs items={[{ name: "E'lon joylash" }]} />

      {/* page */}
      <div className="pb-20">
        <div className="container space-y-8">
          {/* page title */}
          <h1 className="mb-8">E'lon joylash</h1>

          {/* divider (line) */}
          <div className="divider" />

          {/* uploaded images */}
          <div
            title="Yuklangan rasmlar"
            className="flex gap-5 items-center justify-between"
          >
            {/* images skeleton */}
            <div className="w-full overflow-x-auto">
              <div className="flex gap-5 shrink-0 min-w-max">
                {/* image example */}
                <div className="relative overflow-hidden size-16 bg-gray-50 border border-111/25 rounded-xl sm:size-20">
                  {/* image */}
                  <img
                    width={80}
                    height={80}
                    alt="car image"
                    className="size-full object-cover filter brightness-95"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYjj94a1EKPObxDQCbqSdwmIbkhQt5Np5lQ&s"
                  />

                  {/* delete image btn */}
                  <button
                    title="Rasmi o'chirish"
                    aria-label="delete image"
                    className="absolute top-0 right-0"
                  >
                    <img
                      width={28}
                      height={28}
                      src={crossImg}
                      alt="cross icon"
                      className="size-7 rounded-full"
                    />
                  </button>
                </div>

                {/* skeleton */}
                <div className="size-16 bg-gray-50 border border-111/25 rounded-xl sm:size-20"></div>
                <div className="size-16 bg-gray-50 border border-111/25 rounded-xl sm:size-20"></div>
                <div className="size-16 bg-gray-50 border border-111/25 rounded-xl sm:size-20"></div>
                <div className="size-16 bg-gray-50 border border-111/25 rounded-xl sm:size-20"></div>
              </div>
            </div>

            {/* delete all images btn */}
            <button
              aria-label="delete all images"
              title="Yuklangan rasmlarni o'chirish"
              className="flex items-center justify-center shrink-0 bg-main rounded-xl size-16 transition-colors hover:bg-main/70"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                className="size-6 sm:size-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z"
                />
                <path
                  fill="#ffffff"
                  d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z"
                />
                <path
                  fill="#e70a32"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z"
                />
                <path
                  fill="#e70a32"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z"
                />
              </svg>
            </button>
          </div>

          {/* form */}
          <form className="grid gap-5 lg:grid-cols-2">
            {/* upload image */}
            <label className="group flex items-center justify-center row-span-5 p-5 py-20 rounded-lg border border-111/25 cursor-pointer transition-colors hover:bg-gray-50 sm:py-24 lg:py0">
              <div className="flex flex-col items-center">
                <img
                  width={112}
                  height={112}
                  alt="image add"
                  src={imageAddImg}
                  className="size-20 mb-3 sm:size-24 md:size-28"
                />

                {/* title */}
                <h3 className="sm:text-lg font-semibold mb-5">
                  Mashina rasmlarini yuklash
                </h3>

                {/* upload btn */}
                <div
                  role="button"
                  className="bg-teal-500 px-5 py-2.5 rounded-lg text-white text-sm transition-colors group-hover:bg-teal-600 sm:text-base"
                >
                  Rasmlarni yuklash
                </div>

                {/* file input */}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </label>

            {/* name */}
            <div className="space-y-3">
              <label htmlFor="name" className="font-medium">
                Ism*
              </label>

              {/* input */}
              <input id="name" type="text" name="name" placeholder="Bektur" />
            </div>

            {/* tel */}
            <div className="space-y-3">
              <label htmlFor="phone-number" className="font-medium">
                Telefon raqam*
              </label>

              {/* input */}
              <input
                type="tel"
                id="phone-number"
                name="phone number"
                placeholder="+998 (__) ___-__-__"
              />
            </div>

            {/* car price */}
            <div className="space-y-3">
              <label htmlFor="car-price" className="font-medium">
                Mashina narxi*
              </label>

              {/* input */}
              <input
                type="number"
                id="car-price"
                name="car price"
                placeholder="150,000,100 so'm"
              />
            </div>

            {/* model */}
            <div className="space-y-3">
              <label htmlFor="car-type" className="font-medium">
                Mashina modeli*
              </label>

              {/* input */}
              <input
                type="text"
                id="car-type"
                name="car type"
                placeholder="Chevrolet"
              />
            </div>

            {/* marka */}
            <div className="space-y-3">
              <label htmlFor="car-marka" className="font-medium">
                Mashina markasi*
              </label>

              {/* input */}
              <input
                type="text"
                id="car-marka"
                name="car marka"
                placeholder="Damas"
              />
            </div>

            {/* year */}
            <div className="space-y-3">
              <label htmlFor="car-year" className="font-medium">
                Mashina yili*
              </label>

              {/* input */}
              <input
                type="number"
                id="car-year"
                name="car year"
                placeholder="2018"
              />
            </div>

            {/* probeg */}
            <div className="space-y-3">
              <label htmlFor="car-probeg" className="font-medium">
                Mashina probegi*
              </label>

              {/* input */}
              <input
                type="number"
                id="car-probeg"
                name="car probeg"
                placeholder="100,000 km"
              />
            </div>

            {/* address */}
            <div className="space-y-3">
              <label htmlFor="address" className="font-medium">
                Manzil*
              </label>

              {/* input */}
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Andijon"
              />
            </div>

            {/* rang */}
            <div className="space-y-3">
              <label htmlFor="car-color" className="font-medium">
                Mashina rangi*
              </label>

              {/* input */}
              <input
                type="text"
                id="car-color"
                name="color"
                placeholder="Qora"
              />
            </div>

            {/* more info */}
            <div className="space-y-3 lg:col-span-2">
              <label htmlFor="car-description" className="font-medium">
                Ko'proq ma'lumotlar*
              </label>

              {/* input */}
              <textarea
                className="min-h-40"
                id="car-description"
                name="car description"
                placeholder="Mashina holati sifati alo va hakazo..."
              ></textarea>
            </div>

            {/* submit btn */}
            <div>
              <button type="submit" className="sm:max-w-80">
                E'lonni joylash
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCar;
