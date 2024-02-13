import React, { useState, useEffect } from "react";
import { cars } from "../data";
import { useLocation } from "react-router-dom";
import { Select } from 'antd';

const { Option } = Select;

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
        size="large"
        defaultValue="Modelni tanlang"
        onChange={value => setSelectedModel(value)}
      >
        <Option value="Modelni tanlang" disabled>Modelni tanlang</Option>
        {renderOptions("model")}
      </Select>
      <Select
        size="large"
        defaultValue="Markani tanlang"
        onChange={value => setSelectedMarka(value)}
      >
        <Option value="Markani tanlang" disabled>Markani tanlang</Option>
        {renderOptions("marka")}
      </Select>
      <Select
        size="large"
        defaultValue="Yilni tanlang"
        onChange={value => setSelectedYear(value)}
      >
        <Option value="Yilni tanlang" disabled>Yilni tanlang</Option>
        {renderOptions("year")}
      </Select>
      <Select
        size="large"
        defaultValue="Viloyatni tanlang"
        onChange={value => setSelectedPlace(value)}
      >
        <Option value="Viloyatni tanlang" disabled>Viloyatni tanlang</Option>
        {renderOptions("place")}
      </Select>
      <Select
        size="large"
        defaultValue="Rangni tanlang"
        onChange={value => setSelectedColor(value)}
      >
        <Option value="Rangni tanlang" disabled>Rangni tanlang</Option>
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
