import React, { useState } from "react";
import CarCommentItem from "../components/CarCommentItem";
import { carComments } from "../data";

const Comments = () => {
  const [filterRate, setFilterRate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("new");

  const handleRateFilter = (rate) => {
    setFilterRate(rate);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredComments = carComments
    .filter((car) => !filterRate || car.rate === filterRate)
    .filter(
      (car) =>
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.marka.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "new") return new Date(b.date) - new Date(a.date);
      if (sortOption === "old") return new Date(a.date) - new Date(b.date);
      if (sortOption === "best") return b.rate - a.rate;
      if (sortOption === "worst") return a.rate - b.rate;
      return 0;
    });

  return (
    <div className="py-14 bg-gray-300">
      <div className="w-full max-w-7xl mx-auto px-5 grid items-start grid-cols-1 md:grid-cols-3 gap-5">
        {/* Filtr */}
        <div className="bg-white p-5 rounded-md shadow-md">
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
              {/* Clear filter button */}
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

        {/* Comments */}
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-semibold">Barcha sharxlar</h2>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="p-2 border rounded-md"
            >
              <option value="new">Yangi sharxlar</option>
              <option value="old">Eski sharxlar</option>
              <option value="best">Eng yaxshi sharxlar</option>
              <option value="worst">Eng yomon sharxlar</option>
            </select>
          </div>

          <ul className="flex flex-col space-y-5">
            {filteredComments.map((car) => (
              <CarCommentItem key={car.id} {...car} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comments;
