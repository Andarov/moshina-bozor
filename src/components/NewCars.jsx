import React from "react";
import { cars } from "../data";
import CarItem from "./CarItem";

const NewCars = () => {
  const sortedCars = cars.sort((a, b) => new Date(b.year) - new Date(a.year));
  const newestCars = sortedCars.slice(0, 6);

  return (
    <section className="pt-7 pb-14">
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
          Yangi avtomobillar
        </h2>

        <ul className="grid grid-cols-1 gap-7 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {newestCars.map((car) => (
            <CarItem key={car.id} {...car}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewCars;
