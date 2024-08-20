import React from "react";
import { Link } from "react-router-dom";

// data
import { cars } from "../data";

const Catalog = () => {
  const modelCounts = {};

  cars.forEach((car) => {
    const model = car.model;
    modelCounts[model] = (modelCounts[model] || 0) + 1;
  });

  return (
    <section className="py-7">
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
          Mavjud avtomashina markalari
        </h2>

        {/* catalog list */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.keys(modelCounts).map((model) => (
            <li key={model}>
              <Link
                to={`/catalog/${model}`}
                className="group flex justify-between items-center relative overflow-hidden p-5 text-base font-medium leading-6 rounded-[10px] border border-[#e0e1e7]"
              >
                {/* overlay */}
                <div className="absolute left-0 w-0 h-full bg-gray-50/70 transition-[width] duration-300 group-hover:w-full"></div>

                {/* details */}
                <div className="flex items-center space-x-2">
                  <img
                    width={48}
                    height={48}
                    alt={`${model} logo`}
                    className="w-12 h-12 object-contain mr-2"
                    src={cars.find((car) => car.model === model)?.logo}
                  />

                  {/* title */}
                  <h3 className="text-111">{model}</h3>
                </div>

                {/* count */}
                <span className="text-[#919395]">{modelCounts[model]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
