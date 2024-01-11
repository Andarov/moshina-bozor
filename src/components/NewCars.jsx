import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data";
import CarItem from "./CarItem";

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
            <CarItem key={car.id} {...car}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewCars;
