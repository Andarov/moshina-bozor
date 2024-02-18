import React, { useState, useEffect } from "react";
import { cars } from "../data";
import { Select } from "antd";

const { Option } = Select;

const Filter = ({ markaArray, setFilteredCars }) => {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedMarka, setSelectedMarka] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [filteredCarCount, setFilteredCarCount] = useState(null);

  const filterCars = () => {
    return cars.filter((car) => {
      return (
        (selectedModel === "" || car.model === selectedModel) &&
        (selectedMarka === "" || car.marka === selectedMarka) &&
        (selectedYear === "" || car.year === selectedYear) &&
        (selectedPlace === "" || car.place === selectedPlace) &&
        (selectedColor === "" || car.color === selectedColor)
      );
    });
  };

  const updateFilteredCars = () => {
    const filteredCars = filterCars();
    setFilteredCars(filteredCars);
    setFilteredCarCount(filteredCars.length);
  };

  useEffect(() => {
    updateFilteredCars();
  }, [
    selectedModel,
    selectedMarka,
    selectedYear,
    selectedPlace,
    selectedColor,
  ]);

  const handleFilter = (e) => {
    e.preventDefault();
    updateFilteredCars();
  };

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
    const filteredOptions = filterCars().map(car => car[key]);
    const uniqueValues = Array.from(new Set(filteredOptions));
    
    return uniqueValues.map((value, index) => (
      <Option key={index} value={value}>
        {value}
      </Option>
    ));
  };
  
  return (
    <form className="grid grid-cols-1 gap-5 pb-10 md:gap-7 sm:grid-cols-2 md:grid-cols-3">
      <Select
        size="large"
        defaultValue="Modelni tanlang"
        onChange={(value) => setSelectedModel(value)}
      >
        <Option value="Modelni tanlang" disabled>
          Modelni tanlang
        </Option>
        {renderOptions("model")}
      </Select>
      <Select
        size="large"
        defaultValue="Markani tanlang"
        onChange={(value) => setSelectedMarka(value)}
      >
        <Option value="Markani tanlang" disabled>
          Markani tanlang
        </Option>
        {renderOptions("marka")}
      </Select>
      <Select
        size="large"
        defaultValue="Yilni tanlang"
        onChange={(value) => setSelectedYear(value)}
      >
        <Option value="Yilni tanlang" disabled>
          Yilni tanlang
        </Option>
        {renderOptions("year")}
      </Select>
      <Select
        size="large"
        defaultValue="Viloyatni tanlang"
        onChange={(value) => setSelectedPlace(value)}
      >
        <Option value="Viloyatni tanlang" disabled>
          Viloyatni tanlang
        </Option>
        {renderOptions("place")}
      </Select>
      <Select
        size="large"
        defaultValue="Rangni tanlang"
        onChange={(value) => setSelectedColor(value)}
      >
        <Option value="Rangni tanlang" disabled>
          Rangni tanlang
        </Option>
        {renderOptions("color")}
      </Select>
      <button
        onClick={handleFilter}
        className={"bg-teal-500 text-white font-semibold rounded-md py-2"}
      >
        {filteredCarCount !== cars.length
          ? `${filteredCarCount} ta moshina`
          : "Qidirish"}
      </button>
    </form>
  );
};

export default Filter;
