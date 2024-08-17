import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  // ref & states
  const heroContentRef = useRef(null);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    if (heroContentRef.current) {
      setTopPosition(heroContentRef.current.getBoundingClientRect().top);
    }
  }, []);

  return (
    <div
      ref={heroContentRef}
      style={{ height: `calc(100vh - ${topPosition}px)` }}
      className="min-h-sm max-h-lg bg-hero bg-cover bg-right lg:bg-center bg-no-repeat"
    >
      <div className="flex items-end h-full container">
        <div className="flex items-end justify-between w-full pb-28 text-white">
          {/* content left */}
          <div>
            <h1 className="mb-5 text-lg font-medium sm:text-xl">
              Mashina bozor
            </h1>

            {/* description */}
            <strong className="block mb-9 text-3xl font-semibold leading-normal sm:!leading-relaxed sm:mb-16 sm:text-4xl lg:text-5xl">
              O'zbekistondagi №1 <br /> mashina bozor sayti!
            </strong>

            {/* catalog link */}
            <Link
              to="/catalog"
              className="bg-main px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-white hover:text-main sm:px-10 sm:py-3.5"
            >
              Mashinalarni ko'rsatish
            </Link>
          </div>

          {/* content right */}
          <div className="hidden space-y-5 lg:block">
            <ul className="space-y-8">
              {/* item */}
              <li className="space-y-3.5 max-w-72">
                {/* item title */}
                <h3 className="text-xl font-semibold">Keng imkoniyatlar</h3>

                {/* item description */}
                <p className="text-gray-300">
                  Keng tanlov va imkoniyatlar faqatgina bizda!
                </p>
              </li>

              {/* item */}
              <li className="space-y-3.5 max-w-72">
                {/* item title */}
                <h3 className="text-xl font-semibold">Tezkor</h3>

                {/* item description */}
                <p className="text-gray-300">
                  Mashinalarni tezkorlik bilan soting va sotib oling!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
