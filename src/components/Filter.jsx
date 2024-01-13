import React from "react";
import { Select, Option } from "@material-tailwind/react";
import {cars} from '../data'
import { useLocation } from "react-router-dom";

const Filter = ({markaArray}) => {
  const location = useLocation();
  const isHome = location.pathname === '/'
  
  const alertChiq = (e) => {
    e.preventDefault();
    alert("Tez orada ishlaydi");
  };

  return (
    <form className="grid grid-cols-3 gap-7 mb-10">
      {/* model */}
      <Select className={`${isHome && 'bg-white'}`} color="teal" label="Modelni tanlang" name="Model">
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
      <Select className={`${isHome && 'bg-white'}`} color="teal" label="Markani tanlang" name="Marka">
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
      <Select className={`${isHome && 'bg-white'}`} color="teal" label="Yilni tanlang" name="Yil">
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
      {/* place */}
      <Select className={`${isHome && 'bg-white'}`} color="teal" label="Viloyatni tanlang" name="Viloyat">
        {cars
          .reduce((uniquePlaces, car) => {
            if (!uniquePlaces.includes(car.place)) {
              uniquePlaces.push(car.place);
            }
            return uniquePlaces;
          }, [])
          .sort()
          .map((model, index) => (
            <Option key={index} value={model}>
              {model}
            </Option>
          ))}
      </Select>
      {/* colour */}
      <Select className={`${isHome && 'bg-white'}`} color="teal" label="Rangni tanlang" name="Moshina rangi">
        {cars
          .reduce((uniqueColors, car) => {
            if (!uniqueColors.includes(car.color)) {
              uniqueColors.push(car.color);
            }
            return uniqueColors;
          }, [])
          .sort()
          .map((model, index) => (
            <Option key={index} value={model}>
              {model}
            </Option>
          ))}
      </Select>
      <button
        onClick={alertChiq}
        className={`${isHome ? 'bg-main' : 'bg-teal-500'} text-white font-semibold rounded-md`}
      >
        Qidirish
      </button>
    </form>
  );
};

export default Filter;
