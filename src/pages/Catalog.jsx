import React, { useRef, useState } from "react";
import { cars } from "../data";
import CarItem from "../components/CarItem";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/Filter";

const Catalog = () => {
  const { model, marka } = useParams();
  const carsOfModel = cars.filter((car) => car.model === model);
  const carsOfMarka = cars.filter((car) => car.marka === marka);
  const targetArray = carsOfModel.length > 0 ? carsOfModel : cars;
  const markaArray = carsOfMarka.length > 0 ? carsOfMarka : targetArray;

  // const isModelPage = !!model;
  // console.log(isModelPage);

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
        <Filter/>

        <ul className="grid grid-cols-3 gap-x-7 gap-y-10">
          {markaArray.slice(startIndex, endIndex).map((car) => (
            <CarItem key={car.id} {...car} />
          ))}
        </ul>

        {/* Pagination buttons */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`${
              currentPage === 1
                ? "bg-gray-200 text-gray-700"
                : "bg-teal-500 text-white"
            }  font-semibold rounded-md px-4 py-2 mx-1`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } font-semibold rounded-md px-4 py-2 mx-1`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-700"
                : "bg-teal-500 text-white"
            } font-semibold rounded-md px-4 py-2 mx-1`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
