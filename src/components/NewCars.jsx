import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data";

const NewCars = () => {
  const sortedCars = cars.sort((a, b) => new Date(b.year) - new Date(a.year));
  const newestCars = sortedCars.slice(0, 6);

  return (
    <section className="pt-7 pb-14">
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-4xl leading-10 text-111 font-bold mb-9">
          Yangi avtomobillar
        </h2>

        <ul className="grid grid-cols-3 gap-x-7 gap-y-10">
          {newestCars.map((car) => (
            <li key={car.id}>
              <Link to={`cars/${car.marka}`}>
                {/* car image */}
                <div className="relative w-full h-[260px] mb-3">
                  <img
                    className="w-full h-full object-cover rounded-[18px] hover:scale-105 transition-all  duration-300 cursor-pointer"
                    height={260}
                    src={car.images[0]}
                    alt={car.marka}
                  />
                  <span className="absolute top-3 left-2 px-3 py-1 bg-white rounded-[100px] text-sm font-medium leading-5 text-[#313335]">
                    {car.year}
                  </span>
                </div>
                {/* car dexcription */}
                <div className="space-y-2">
                  <h3 className="text-111 text-[20px] font-bold leading-7">
                    {car.model} {car.marka}
                  </h3>

                  <div className="text-base leading-6 text-[#767980]">
                    <p>Probeg: {car.run}</p>
                    <p>Rangi: {car.color}</p>
                  </div>

                  <div className="p-4 rounded-[10px] bg-[#EFF2F4] text-base font-medium">
                    <p>Hudud: {car.place}</p>
                    <p className="text-right">
                      Narxi:{" "}
                      <span className="text-main">
                        {car.price.toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewCars;
