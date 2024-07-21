import React, { useState } from "react";
import { Link } from "react-router-dom";
import { carComments } from "../data";
import { getUniqueCars } from "../utils";

const Comments = () => {
  const [filterRate, setFilterRate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("all");

  const handleRateFilter = (rate) => {
    setFilterRate(rate);
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
    .filter((car) => !filterRate || Math.round(car.averageRate) === filterRate);

  const sortedCars = () => {
    if (sortOption === "all") {
      return filteredCars; // No additional sorting
    }

    return filteredCars.sort((a, b) => {
      if (sortOption === "few") return a.count - b.count;
      if (sortOption === "more") return b.count - a.count;
      if (sortOption === "best") return b.averageRate - a.averageRate;
      if (sortOption === "worst") return a.averageRate - b.averageRate;
      return 0;
    });
  };

  return (
    <div className="py-14 bg-gray-300">
      <div className="w-full max-w-7xl mx-auto px-5 grid items-start grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full bg-white p-5 rounded-md shadow-md">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleRateFilter(rate)}
                  className={`py-2 px-4 rounded-full border ${
                    filterRate === rate ? "bg-blue-500 text-white" : "bg-white"
                  }`}
                >
                  {rate}
                </button>
              ))}
              {filterRate && (
                <button
                  onClick={() => setFilterRate(null)}
                  className="py-2 px-4 rounded-full border bg-gray-500 text-white"
                >
                  Clear
                </button>
              )}
            </div>
            <div>
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

        <div>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-semibold">Barcha moshinalar</h2>
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
                      to={`/comments/${car.model}/${car.marka}`}
                      className="text-blue-500"
                    >
                      Ko'proq
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comments;
