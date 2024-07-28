import React, { useState } from "react";
import { Link } from "react-router-dom";
import { carComments } from "../data";
import { getUniqueCars } from "../utils";

const Comments = () => {
  const [filterRate, setFilterRate] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("all");

  const handleRateFilter = (rate) => {
    setFilterRate((prev) =>
      prev.includes(rate) ? prev.filter((r) => r !== rate) : [...prev, rate]
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const uniqueCars = getUniqueCars(carComments);

  const filteredCars = uniqueCars
    .filter(
      (car) =>
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.marka.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (car) =>
        !filterRate.length || filterRate.includes(Math.round(car.averageRate))
    );

  const sortedCars = () => {
    if (sortOption === "all") {
      return filteredCars;
    }

    return filteredCars.sort((a, b) => {
      if (sortOption === "few") return a.count - b.count;
      if (sortOption === "more") return b.count - a.count;
      if (sortOption === "best") return b.averageRate - a.averageRate;
      if (sortOption === "worst") return a.averageRate - b.averageRate;
      return 0;
    });
  };

  const choosedCars = ['Malibu', 'Crown', 'Matiz'];
  const recomendedCars = filteredCars.filter((car)=> choosedCars.includes(car.marka));

  return (
    <div className="py-14 bg-gray-100">
      <div className="w-full max-w-base mx-auto px-5 grid items-start grid-cols-1 md:grid-cols-3 gap-5">
        {/* filter sidebar */}
        <div className="w-full bg-white p-5 rounded-md shadow-md">
          <div className="flex flex-col">
            {/* reyting */}
            <h1 className="font-semibold mb-3">Reyting</h1>
            <div className="flex items-center space-x-3 pb-5 border-b">
              {[1, 2, 3, 4, 5].map((rate) => {
                let bgColor;
                let textColor = "text-black"; // default text color

                if (filterRate.includes(rate)) {
                  if (rate === 1) {
                    bgColor = "bg-red-500";
                  } else if (rate === 2) {
                    bgColor = "bg-red-400";
                  } else if (rate === 3) {
                    bgColor = "bg-yellow-400";
                  } else if (rate === 4) {
                    bgColor = "bg-cyan-400";
                  } else {
                    bgColor = "bg-green-400";
                  }
                  textColor = "text-white";
                } else {
                  if (rate === 1) {
                    bgColor = "bg-red-200";
                  } else if (rate === 2) {
                    bgColor = "bg-red-100";
                  } else if (rate === 3) {
                    bgColor = "bg-yellow-100";
                  } else if (rate === 4) {
                    bgColor = "bg-cyan-100";
                  } else {
                    bgColor = "bg-green-100";
                  }
                }

                return (
                  <button
                    key={rate}
                    onClick={() => handleRateFilter(rate)}
                    className={`w-12 h-10 rounded-full border font-semibold ${bgColor} ${textColor}`}
                  >
                    {rate}
                  </button>
                );
              })}
            </div>

            {/* search with model and marka */}
            <div className="pt-5">
              <h3 className="text-lg font-medium mb-2">Moshina nomi</h3>
              <input
                type="search"
                placeholder="Moshina nomi yoki markasi"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 pt-3 space-y-10">
          <div>
            <h3 className="mb-5 font-semibold text-xl">Moshina bozor tavsiyasi</h3>
            <ul className="grid grid-cols-3 gap-3">
              {
                recomendedCars.map((car)=>{
                  return(
                    <li className="flex flex-col gap-1 justify-center items-center p-5 bg-white rounded-lg">
                      <h3 className="font-semibold">{car.model} {car.marka}</h3>
                      <div className="flex flex-col items-center">
                        <p><span className="font-medium">Rate:</span> {car.averageRate.toFixed(1)}</p>
                        <p><span className="font-medium">Sharxlar soni:</span> {car.count}ta</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* all cars with rating */}
          <div>
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-semibold">Barcha moshinalar</h3>
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="p-2 border rounded-md"
              >
                <option value="all">Hammasi</option>
                <option value="few">Eng kam sharx</option>
                <option value="more">Eng kop sharx</option>
                <option value="best">Eng yuqori reyting</option>
                <option value="worst">Eng past reyting</option>
              </select>
            </div>

            {sortedCars().length > 0 ? (
              <ul className="flex flex-col space-y-5">
                {sortedCars().map((car, index) => (
                  <li
                    key={index}
                    className="cursor-pointer p-4 bg-white rounded-md shadow-md"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {car.model} {car.marka}
                        </h3>
                        <p>Sharhlar soni: {car.count}</p>
                        <p>O'rtacha reyting: {car.averageRate.toFixed(1)}</p>
                      </div>
                      <div className="flex items-center">
                        <Link
                          to={`/rating/${car.model}/${car.marka}`}
                          className="text-blue-500"
                        >
                          Ko'proq
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-xl font-medium">Natija topilmadi</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
