import React from "react";

// components
import Breadcrumbs from "../components/Breadcrumbs";

// images
import emptyDataImage from "../img/icon/empty-data.svg";

const Favorites = () => {
  return (
    <>
      {/* breadcrumbs */}
      <Breadcrumbs items={[{ name: "Yoqtirilgan mashinalar" }]} />

      {/* page */}
      <div className="pb-20">
        <div className="container">
          {/* title */}
          <h1 className="mb-8 md:mb-10">Yoqtirilgan mashinalar</h1>

          {/* empty data */}
          <div className="flex flex-col items-center">
            <img
              width="384"
              height="384"
              alt="empty data"
              src={emptyDataImage}
              aria-label="empty data"
              title="Ma'lumotlar mavjud emas!"
              class="w-full h-auto aspect-square sm:size-96"
            />
            {/* empty data title */}
            <h2 className="text-center">Yoqtirilgan mashinalar yo'q</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
