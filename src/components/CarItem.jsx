import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({
  id,
  run,
  year,
  model,
  marka,
  color,
  place,
  price,
  images,
}) => {
  return (
    <li key={id}>
      <Link to={`/catalog/${model}/car/${id}`}>
        {/* car image */}
        <div className="relative w-full h-[260px] mb-3 overflow-hidden rounded-[18px]">
          <img
            alt={marka}
            height={260}
            src={images[0]}
            className="w-full h-full bg-gray-400 object-cover transition-transform duration-300 hover:scale-110"
          />

          {/* badges */}
          <div className="flex flex-wrap gap-3.5 absolute top-4 left-4">
            {/* top */}
            <span className="px-3 py-1 bg-main rounded-[100px] text-sm font-medium text-white">
              Top
            </span>

            {/* year */}
            <span className="px-3 py-1 bg-white rounded-[100px] text-sm font-medium">
              {year}
            </span>
          </div>
        </div>

        {/* car details */}
        <div className="space-y-3">
          {/* title */}
          <h3 className="text-111 text-[20px] font-bold leading-7">
            {model} {marka}
          </h3>

          {/* description */}
          <div className="space-y-1.5 text-base text-111/70">
            <p className="flex items-center gap-1">
              <span>Probeg</span>
              <span className="grow pt-2 border-b-2 border-dotted border-111/50"></span>
              <span>{run}</span>
            </p>

            {/* color */}
            <p className="flex items-center gap-1">
              <span>Rangi</span>
              <span className="grow pt-2 border-b-2 border-dotted border-111/50"></span>
              <span>{color}</span>
            </p>
          </div>

          {/* address & car price */}
          <div className="p-4 rounded-[10px] bg-[#EFF2F4] text-base font-medium">
            <p>Hudud: {place}</p>

            {/* price */}
            <p className="text-right">
              Narxi: <span className="text-main">{price.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CarItem;
