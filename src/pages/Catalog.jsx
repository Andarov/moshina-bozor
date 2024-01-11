import React from "react";
import { cars } from "../data";
import { Select, Option, Input, Button } from "@material-tailwind/react";

const Catalog = () => {
  return (
    <div className="pb-20">
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-4xl leading-10 text-111 font-bold mt-5 mb-10">
          Katalog
        </h1>

        {/* filtr */}
        <form className="grid grid-cols-3 gap-7">
          {/* model */}
          <Select color="teal" label="Modelni tanlang" name="Model">
            {cars
              .reduce((uniqueModels, car) => {
                if (!uniqueModels.includes(car.model)) {
                  uniqueModels.push(car.model);
                }
                return uniqueModels;
              }, [])
              .map((model, index) => (
                <Option key={index} value={model}>
                  {model}
                </Option>
              ))}
          </Select>
          {/* marka */}
          <Select color="teal" label="Markani tanlang" name="Marka">
            {cars
              .reduce((uniqueMarkas, car) => {
                if (!uniqueMarkas.includes(car.marka)) {
                  uniqueMarkas.push(car.marka);
                }
                return uniqueMarkas;
              }, [])
              .map((model, index) => (
                <Option key={index} value={model}>
                  {model}
                </Option>
              ))}
          </Select>
          {/* year */}
          <Select color="teal" label="Yilni tanlang" name="Yil">
            {cars
              .reduce((uniqueYears, car) => {
                if (!uniqueYears.includes(car.year)) {
                  uniqueYears.push(car.year);
                }
                return uniqueYears;
              }, [])
              .sort()
              .map((model, index) => (
                <Option key={index} value={model}>
                  {model}
                </Option>
              ))}
          </Select>
          <Input color="teal" label="Summa (so'm)dan" name="Narxdan" />
          <Input color="teal" label="Summa (so'm)gacha" name="Narxgacha" />
          <button className="bg-teal-500 text-white font-semibold rounded-md">Saralash</button>
        </form>

        
      </div>
    </div>
  );
};

export default Catalog;
