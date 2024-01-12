import React from "react";
import { Select, Option, Input } from "@material-tailwind/react";
import {cars} from '../data'

const Filter = () => {
  const alertChiq = (e) => {
    e.preventDefault();
    alert("Tez orada ishlaydi");
  };
  
  return (
    <form className="grid grid-cols-3 gap-7 mb-10">
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
      <button
        onClick={alertChiq}
        className="bg-teal-500 text-white font-semibold rounded-md"
      >
        Saralash
      </button>
    </form>
  );
};

export default Filter;
