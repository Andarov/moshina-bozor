import React from "react";
import {Link} from 'react-router-dom'

const CarItem = ({id, marka, model, images, year, run, color, place, price}) => {
  return (
    <li key={id}>
      <Link to={`/catalog/${model}/car/${id}`}>
        {/* car image */}
        <div className="relative w-full h-[260px] mb-3">
          <img
            className="w-full h-full bg-gray-400 object-cover rounded-[18px] hover:scale-105 transition-all  duration-300 cursor-pointer"
            height={260}
            src={images[0]}
            alt={marka}
          />
          <span className="absolute top-3 left-2 px-3 py-1 bg-white rounded-[100px] text-sm font-medium leading-5 text-[#313335]">
            {year}
          </span>
        </div>
        {/* car dexcription */}
        <div className="space-y-2">
          <h3 className="text-111 text-[20px] font-bold leading-7">
            {model} {marka}
          </h3>

          <div className="text-base leading-6 text-[#767980]">
            <p>Probeg: {run}</p>
            <p>Rangi: {color}</p>
          </div>

          <div className="p-4 rounded-[10px] bg-[#EFF2F4] text-base font-medium">
            <p>Hudud: {place}</p>
            <p className="text-right">
              Narxi:{" "}
              <span className="text-main">{price.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CarItem;
