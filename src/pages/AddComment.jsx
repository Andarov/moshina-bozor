import React from "react";

const AddComment = () => {
  return (
    <div className="w-full max-w-base mx-auto px-5 pb-20">
      <h1 className="text-3xl leading-7 text-111 font-bold mb-7 md:text-4xl md:leading-8 md:mb-8">
        Sharx qoldirish
      </h1>
      <hr className="mb-14" />

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* ism */}
          <input
            className="px-6 py-3 border-2 rounded-lg"
            type="text"
            name="Ismingiz"
            placeholder="Ismingiz"
          />
          {/* tel */}
          <input
            className="px-6 py-3 border-2 rounded-lg"
            type="tel"
            placeholder="Telefon raqamingiz"
            name="Telefon raqamingiz"
          />
        </div>
        {/* extra */}
        <textarea
          className="w-full px-6 py-3 border-2 rounded-lg resize-none col-span-3"
          name="Qoshimcha malumotlar"
          placeholder="Qo'shimcha malumotlar"
        ></textarea>

        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-5">
            <input className="w-5 h-5" type="checkbox" />
            <span>Sharxni anonim yuborish</span>
          </label>

          <button className="bg-main px-8 py-2 rounded-md text-white font-medium">Yuborish</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
