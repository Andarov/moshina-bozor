import React from 'react'

const AddCar = () => {
  return (
    <div className='w-full max-w-base mx-auto px-5 pb-20'>
      <h1 className="text-3xl leading-7 text-111 font-bold mb-7 md:text-4xl md:leading-8 md:mb-8">E'lon joylash</h1>
      <hr className='mb-14' />

      <form className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {/* ism */}
        <input className='px-6 py-3 border-2 rounded-lg' type="text" name="Ismingiz" placeholder='Ismingiz' />
        {/* tel */}
        <input className='px-6 py-3 border-2 rounded-lg' type="tel" placeholder='Telefon raqamingiz' name='Telefon raqamingiz' />
        {/* narx */}
        <input className='px-6 py-3 border-2 rounded-lg' type="number" name="Moshina narxi" placeholder='Moshina narxi' />
        {/* marka */}
        <input className='px-6 py-3 border-2 rounded-lg' type="text" name="Moshina markasi" placeholder='Moshina markasi' />
        {/* model */}
        <input className='px-6 py-3 border-2 rounded-lg' type="text" name="Moshina modeli" placeholder='Moshina modeli' />
        {/* yil */}
        <input className='px-6 py-3 border-2 rounded-lg' type="number" name="Moshina yili" placeholder='Moshina yili' />
        {/* probeg */}
        <input className='px-6 py-3 border-2 rounded-lg' type="number" name="Moshina probegi" placeholder='Moshina probegi' />
        {/* manzil */}
        <input className='px-6 py-3 border-2 rounded-lg' type="text" name="Manzil" placeholder='Manzil' />
        {/* rang */}
        <input className='px-6 py-3 border-2 rounded-lg' type="text" name="Rangi" placeholder='Rangi' />
        {/* rasm */}
        <label className="px-6 py-3 border-2 rounded-lg col-span-1 text-center md:col-span-2 lg:col-span-3" htmlFor="image-input">Mashina rasmlarini joylang</label>
        <input id="image-input" className="hidden" type="file" name="mashina rasmlari" accept=".jpg, .jpeg, .png" multiple=""></input>
        {/* extra */}
        <textarea className='min-h-40 px-6 py-3 border-2 rounded-lg resize-none col-span-1 md:col-span-2 lg:col-span-3' name="Qoshimcha malumotlar" placeholder="Qo'shimcha malumotlar"></textarea>
      </form>
    </div>
  )
}

export default AddCar