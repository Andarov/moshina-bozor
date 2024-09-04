import React, { useState } from "react";
import { carModels, carBrands } from "../data";
import Checkbox from "../components/Checkbox";

const AddComment = () => {
  const [formData, setFormData] = useState({
    name: "",
    carBrand: "",
    carModel: "",
    rating: "",
    comment: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Update car models based on selected brand
    if (name === "carBrand") {
      setFormData({
        ...formData,
        carBrand: value,
        carModel: "", // Reset car model when brand changes
      });
    }
  };

  const handleRating = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="pb-20">
      <div className="container space-y-8">
        {/* page title */}
        <h1>Mashina haqida sharx qoldirish</h1>

        {/* divider (line) */}
        <div className="divider" />

        {/* form */}
        <form
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {/* name */}
          <div className="space-y-3">
            <label htmlFor="name" className="font-medium">
              Ism*
            </label>

            {/* input */}
            <input id="name" type="text" name="name" placeholder="Bektur" />
          </div>

          {/* type */}
          <div className="space-y-3">
            <label htmlFor="car-type" className="font-medium">
              Mashina modeli*
            </label>

            {/* input */}
            <input
              type="text"
              id="car-type"
              name="car type"
              placeholder="Chevrolet"
            />
          </div>

          {/* marka */}
          <div className="space-y-3">
            <label htmlFor="car-marka" className="font-medium">
              Mashina markasi*
            </label>

            {/* input */}
            <input
              type="text"
              id="car-marka"
              name="car marka"
              placeholder="Damas"
            />
          </div>

          {/* rating */}
          <div className="space-y-3">
            <label htmlFor="rate" className="font-medium">
              Baholash*
            </label>

            {/* input */}
            <input id="rate" type="text" name="rate" placeholder="A'lo" />
          </div>

          {/* comment */}
          <div className="space-y-3 lg:col-span-2">
            <label htmlFor="comment" className="font-medium">
              Sharx*
            </label>

            {/* input */}
            <textarea
              id="comment"
              name="comment"
              className="min-h-40"
              placeholder="Mashinaga gap yo'q..."
            ></textarea>
          </div>

          <div className="space-y-5">
            {/* checkbox */}
            <label className="flex items-center gap-2.5">
              {/* checkbox */}
              <Checkbox />

              {/* text */}
              <span>Anonim yuborish</span>
            </label>

            {/* submit btn */}
            <button type="submit" className="sm:max-w-80">
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComment;
