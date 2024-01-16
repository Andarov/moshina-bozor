import React, { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import { cars } from "../data";
import { useLocation } from "react-router-dom";

const Filter = ({ markaArray }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [selectedModel, setSelectedModel] = useState("");
  const [selectedMarka, setSelectedMarka] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const getUniqueValues = (key) => {
    if (!markaArray || markaArray.length === 0) {
      return [];
    }

    return markaArray
      .reduce((uniqueValues, car) => {
        if (!uniqueValues.includes(car[key])) {
          uniqueValues.push(car[key]);
        }
        return uniqueValues;
      }, [])
      .sort();
  };

  const renderOptions = (key) => {
    return (
      (getUniqueValues(key) || []).length > 0
        ? getUniqueValues(key)
        : Array.from(new Set(cars.map((car) => car[key])))
    ).map((value, index) => (
      <Option key={index} value={value}>
        {value}
      </Option>
    ));
  };

  useEffect(() => {
    setSelectedModel("");
    setSelectedMarka("");
    setSelectedYear("");
    setSelectedPlace("");
    setSelectedColor("");
  }, [markaArray]);

  return (
    <form className="grid grid-cols-1 gap-5 pb-10 md:gap-7 sm:grid-cols-2 md:grid-cols-3">
      <Select
        className={`${isHome && "bg-white"}`}
        color="red"
        label="Modelni tanlang"
        name="Model"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {renderOptions("model")}
      </Select>
      <Select
        className={`${isHome && "bg-white"}`}
        color="red"
        label="Markani tanlang"
        name="Marka"
        value={selectedMarka}
        onChange={(e) => setSelectedMarka(e.target.value)}
      >
        {renderOptions("marka")}
      </Select>
      <Select
        className={`${isHome && "bg-white"}`}
        color="red"
        label="Yilni tanlang"
        name="Yil"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {renderOptions("year")}
      </Select>
      <Select
        className={`${isHome && "bg-white"}`}
        color="red"
        label="Viloyatni tanlang"
        name="Viloyat"
        value={selectedPlace}
        onChange={(e) => setSelectedPlace(e.target.value)}
      >
        {renderOptions("place")}
      </Select>
      <Select
        className={`${isHome && "bg-white"}`}
        color="red"
        label="Rangni tanlang"
        name="Moshina rangi"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {renderOptions("color")}
      </Select>
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("Tez orada ishlaydi");
        }}
        className={`${
          isHome ? "bg-main" : "bg-teal-500"
        } text-white font-semibold rounded-md py-2`}
      >
        Qidirish
      </button>
    </form>
  );
};

export default Filter;
