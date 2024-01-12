// Catalog.jsx

import React, { useRef, useState } from "react";
import { cars } from "../data";
import CarItem from "../components/CarItem";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const Catalog = () => {
  const { model, marka } = useParams();
  const carsOfModel = cars.filter((car) => car.model === model);
  const carsOfMarka = cars.filter((car) => car.marka === marka);
  const targetArray = carsOfModel.length > 0 ? carsOfModel : cars;
  const markaArray = carsOfMarka.length > 0 ? carsOfMarka : targetArray;

  const catalogRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(markaArray.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setTimeout(() => {
        scrollToTop();
      }, 0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: catalogRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="pb-20" ref={catalogRef}>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-4xl leading-10 text-111 font-bold mt-5 mb-10">
          {model ? model : "Katalog"}
        </h1>

        {model && (
          <ul className="w-full max-w-5xl grid grid-cols-5 mb-10">
            {carsOfModel.map((modelCar) => {
              return (
                <li
                  key={modelCar.id}
                  className="w-full h-16 border-2 border-teal-500 transition-all duration-300 hover:bg-teal-500 hover:text-white relative"
                >
                  <Link
                    className="w-full h-full inline-flex justify-center items-center absolute inset-0 text-lg font-medium"
                    to={`/catalog/${model}/${modelCar.marka}`}
                  >
                    {modelCar.marka}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* filtr */}
        <Filter markaArray={markaArray} />

        <ul className="grid grid-cols-3 gap-x-7 gap-y-10">
          {markaArray.slice(startIndex, endIndex).map((car) => (
            <CarItem key={car.id} {...car} />
          ))}
        </ul>

        {/* Pagination buttons */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Catalog;
