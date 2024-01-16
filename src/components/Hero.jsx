import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-heroBg bg-no-repeat bg-gray-400 bg-cover w-full py-20 bg-111/40'>
        <div className="w-full max-w-base mx-auto px-5">
          <div className="w-full max-w-xl mx-auto text-center text-white">
            <h1 className='font-bold text-3xl mb-5 sm:text-4xl md:text-5xl'>Moshina bozor</h1>
            <p className='text-base font-medium mb-9 sm:text-lg md:text-xl'>Har xil markadagi moshinalarni hamyonbop narxda <br /> Oson soting va sotib oling !</p>
            <Link to='/catalog' className='text-base border-2 border-main bg-main w-56 inline-block text-center py-2 rounded-lg font-semibold hover:bg-white hover:text-main transition-all duration-300 md:py-3'>Katalog</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero