import React from "react";

// components
import CTA from "../components/CTA";
import News from "../components/News";
import New from "../components/NewCars";
import Count from "../components/Count";
import Catalog from "../components/Catalog";
import BestCars from "../components/BestCars";
import Comments from "../components/Comments";

const Home = () => {
  return (
    <>
      <Count />
      <Catalog />
      <New />
      <Comments />
      <CTA />
      <div className="pt-6 pb-14 bg-[#F2F4F6] sm:pt-12">
        <BestCars />
        <News />
      </div>
    </>
  );
};

export default Home;
