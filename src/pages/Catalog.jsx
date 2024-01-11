import React, { useRef, useState } from "react";
import { cars } from "../data";
import { Select, Option, Input } from "@material-tailwind/react";
import CarItem from "../components/CarItem";

const Catalog = () => {
  const catalogRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(cars.length / itemsPerPage);
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

  const alertChiq = (e)=>{
    e.preventDefault();
    alert('Tez orada ishlaydi');
  }

  return (
    <div className="pb-20" ref={catalogRef}>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-4xl leading-10 text-111 font-bold mt-5 mb-10">
          Katalog
        </h1>

        {/* filtr */}
        <form className="grid grid-cols-3 gap-7 mb-10">
          {/* model */}
          <Select color="teal" label="Modelni tanlang" name="Model">
            {cars
              .reduce((uniqueModels, car) => {
                if (!uniqueModels.includes(car.model)) {
                  uniqueModels.push(car.model);
                }
                return uniqueModels;
              }, [])
              .map((model, index) => (
                <Option key={index} value={model}>
                  {model}
                </Option>
              ))}
          </Select>
          {/* marka */}
          <Select color="teal" label="Markani tanlang" name="Marka">
            {cars
              .reduce((uniqueMarkas, car) => {
                if (!uniqueMarkas.includes(car.marka)) {
                  uniqueMarkas.push(car.marka);
                }
                return uniqueMarkas;
              }, [])
              .map((model, index) => (
                <Option key={index} value={model}>
                  {model}
                </Option>
              ))}
          </Select>
          {/* year */}
          <Select color="teal" label="Yilni tanlang" name="Yil">
            {cars
              .reduce((uniqueYears, car) => {
                if (!uniqueYears.includes(car.year)) {
                  uniqueYears.push(car.year);
                }
                return uniqueYears;
              }, [])
              .sort()
              .map((model, index) => (
                <Option key={index} value={model}>
                  {model}
                </Option>
              ))}
          </Select>
          <Input color="teal" label="Summa (so'm)dan" name="Narxdan" />
          <Input color="teal" label="Summa (so'm)gacha" name="Narxgacha" />
          <button onClick={alertChiq} className="bg-teal-500 text-white font-semibold rounded-md">
            Saralash
          </button>
        </form>

        <ul className="grid grid-cols-3 gap-x-7 gap-y-10">
          {cars.slice(startIndex, endIndex).map((car) => (
            <CarItem key={car.id} {...car} />
          ))}
        </ul>

        {/* Pagination buttons */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`${
              currentPage === 1 ? "bg-gray-200 text-gray-700" : "bg-teal-500 text-white"
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
                currentPage === index + 1 ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-700"
              } font-semibold rounded-md px-4 py-2 mx-1`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`${
              currentPage === totalPages ? "bg-gray-200 text-gray-700" : "bg-teal-500 text-white"
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
