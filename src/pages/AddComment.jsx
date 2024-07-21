import React, { useState } from "react";
import {carModels, carBrands} from '../data'

const AddComment = () => {
  const [formData, setFormData] = useState({
    name: '',
    carBrand: '',
    carModel: '',
    rating: '',
    comment: '',
    anonymous: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Update car models based on selected brand
    if (name === 'carBrand') {
      setFormData({
        ...formData,
        carBrand: value,
        carModel: '' // Reset car model when brand changes
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
    <div className="w-full max-w-base mx-auto px-5 pb-20">
      <h1 className="text-3xl leading-7 text-111 font-bold mb-7 md:text-4xl md:leading-8 md:mb-8">
        Moshina haqida sharx qoldirish
      </h1>  
      <hr className="mb-14" />

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ism */}
          <div>
            <label htmlFor="name" className="sr-only">Ismingiz</label>
            <input
              id="name"
              className="w-full px-6 py-3 border-2 rounded-lg"
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* moshina markasi */}
          <div>
            <label htmlFor="carBrand" className="sr-only">Moshina Markasi</label>
            <select
              id="carBrand"
              name="carBrand"
              className="w-full px-6 py-3 border-2 rounded-lg"
              value={formData.carBrand}
              onChange={handleChange}
            >
              <option value="">Moshina Markasini Tanlang</option>
              {carBrands.map((brand) => (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </select>
          </div>
          {/* moshina modeli */}
          <div>
            <label htmlFor="carModel" className="sr-only">Moshina Modeli</label>
            <select
              id="carModel"
              name="carModel"
              className="w-full px-6 py-3 border-2 rounded-lg"
              value={formData.carModel}
              onChange={handleChange}
              disabled={!formData.carBrand}
            >
              <option value="">Moshina Modelini Tanlang</option>
              {formData.carBrand &&
                carModels[formData.carBrand].map((model) => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))
              }
            </select>
          </div>
          {/* rating yulduzcha bilan tanlansin 1-5gacha */}
          <div className="flex items-center space-x-3">
            <label htmlFor="rating" className="font-medium text-lg">Baxolang</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  className={`star ${formData.rating >= star ? 'filled' : ''}`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* extra */}
        <div>
          <label htmlFor="comment" className="sr-only">Sharx</label>
          <textarea
            id="comment"
            className="w-full min-h-40 px-6 py-3 border-2 rounded-lg resize-none col-span-3"
            name="comment"
            placeholder="Sharx"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <input
              className="w-5 h-5"
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
            />
            <span className="text-sm md:text-base">Anonim yuborish</span>
          </label>

          <button
            type="submit"
            className="bg-main px-8 py-2 rounded-md text-white font-medium"
          >
            Yuborish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;