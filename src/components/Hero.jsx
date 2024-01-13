import React from 'react'
import Filter from './Filter'

const Hero = () => {
  return (
    <div className='bg-heroBg bg-no-repeat bg-gray-400 bg-cover w-full py-12 bg-111/40'>
        <div className="w-full max-w-base mx-auto px-5">
            <p className='text-4xl leading-[52px] font-bold text-white mb-10'>Moshina bozor bilan hammasi oson.
            <br />
            Oson soting va sotib oling !</p>

            <Filter/>
        </div>
    </div>
  )
}

export default Hero