import React from "react";

// data
import { cars } from "../data";

// counter
import CountUp from "react-countup";

// images
import carIcon from "../img/icon/car.svg";
import userIcon from "../img/icon/user-plus.svg";
import fontIcon from "../img/icon/font-square.svg";
import starIcon from "../img/icon/star-rectangle.svg";

const Count = () => {
  const uniqueModels = [...new Set(cars.map((car) => car.model))];
  const uniqueBrands = [...new Set(cars.map((car) => car.marka))];

  return (
    <div className="py-12">
      <div className="w-full max-w-base mx-auto px-5">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* models */}
          <li className="rounded-lg border border-111/5">
            {/* item top */}
            <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-t-lg border-b border-111/5">
              {/* item icon */}
              <div className="shrink-0 bg-white border border-111/15 p-2 rounded-full">
                <img
                  width={24}
                  height={24}
                  src={starIcon}
                  alt="star icon"
                  className="size-6"
                />
              </div>

              {/* item title */}
              <h3 className="font-medium">Modellar</h3>
            </div>

            <div className="p-4">
              <CountUp
                start={0}
                duration={4}
                end={uniqueModels.length}
                className="text-2xl text-main font-bold inline-block"
              />
            </div>
          </li>

          {/* markas */}
          <li className="rounded-lg border border-111/5">
            {/* item top */}
            <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-t-lg border-b border-111/5">
              {/* item icon */}
              <div className="shrink-0 bg-white border border-111/15 p-2 rounded-full">
                <img
                  width={24}
                  height={24}
                  src={fontIcon}
                  className="size-6"
                  alt="font square icon"
                />
              </div>

              {/* item title */}
              <h3 className="font-medium">Markalar</h3>
            </div>

            <div className="p-4">
              <CountUp
                start={0}
                duration={4}
                end={uniqueBrands.length}
                className="text-2xl text-main font-bold inline-block"
              />
            </div>
          </li>

          {/* cars */}
          <li className="rounded-lg border border-111/5">
            {/* item top */}
            <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-t-lg border-b border-111/5">
              {/* item icon */}
              <div className="shrink-0 bg-white border border-111/15 p-2 rounded-full">
                <img
                  width={24}
                  height={24}
                  src={carIcon}
                  alt="car icon"
                  className="size-6"
                />
              </div>

              {/* item title */}
              <h3 className="font-medium">Mashinalar</h3>
            </div>

            <div className="p-4">
              <CountUp
                start={0}
                duration={4}
                end={cars.length}
                className="text-2xl text-main font-bold inline-block"
              />
            </div>
          </li>

          {/* users */}
          <li className="rounded-lg border border-111/5">
            {/* item top */}
            <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-t-lg border-b border-111/5">
              {/* item icon */}
              <div className="shrink-0 bg-white border border-111/15 p-2 rounded-full">
                <img
                  width={24}
                  height={24}
                  src={userIcon}
                  alt="user icon"
                  className="size-6"
                />
              </div>

              {/* item title */}
              <h3 className="font-medium">Foydalanuvchilar</h3>
            </div>

            <div className="p-4">
              <CountUp
                start={0}
                end={56200}
                duration={4}
                className="text-2xl text-main font-bold inline-block"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Count;
