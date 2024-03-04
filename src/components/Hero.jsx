import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex items-center pb-14 pt-24 sm:py-28">
      <div className="w-full max-w-base mx-auto px-5">
        {/* contents */}
        <div className="flex flex-col items-start space-y-3.5 text-white text-start sm:items-center sm:text-center">
          <h1 className="text-lg max-w-56 leading-5 sm:text-xl sm:max-w-max">
            Mashina bozor - sizlagan izlagan moshina bizda bor
          </h1>
          <p className="hidden text-4xl font-bold sm:block">
            O'zbekistondagi #1 mashina bozor sayti!
          </p>
          <p className="block font-bold text-3xl sm:hidden">
            O'zbekistondagi <br /> #1 mashina bozor sayti!
          </p>
          <p className="max-w-lg font-medium text-xl leading-6 sm:max-w-2xl sm:text-2xl">
            Har xil markadagi moshinalarni hamyonbop narxda Oson soting va sotib
            oling!
          </p>
          <Link
            to="/catalog"
            className="text-base border-2 border-main bg-main w-56 inline-block text-center py-2 rounded-lg font-semibold hover:bg-white hover:text-main transition-all duration-300 md:py-3"
          >
            Katalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
