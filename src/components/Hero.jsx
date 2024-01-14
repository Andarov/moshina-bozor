import React from 'react'
import Filter from './Filter'

const Hero = () => {
  return (
    <div className='bg-heroBg bg-no-repeat bg-gray-400 bg-cover w-full py-12 bg-111/40'>
        <div className="w-full max-w-base mx-auto px-5">
            <p className='text-2xl leading-9 font-bold text-white mb-5 sm:text-3xl sm:leading-10 sm:mb-7 md:text-4xl md:leading-[52px] md:mb-10'>Moshina bozor bilan hammasi oson.
            <br />
            Oson soting va sotib oling !</p>

            <Filter/>
        </div>
    </div>
  )
}

export default Hero