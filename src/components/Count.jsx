import React from 'react'
import CountUp from 'react-countup'
import { cars } from '../data'

const Count = () => {
  const uniqueModels = [...new Set(cars.map(car => car.model))];
  const uniqueBrands = [...new Set(cars.map(car => car.marka))];

  return (
    <div className='py-12'>
        <div className="w-full max-w-base mx-auto px-5">
            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {/* models */}
                <li className='px-5 py-8 rounded-lg shadow-md text-center bg-white border border-main'>
                    <CountUp className='text-2xl text-main font-bold mb-2 inline-block' start={0} end={uniqueModels.length} duration={4}/>
                    <h3 className="text-gray-700 font-medium">Mavjud modellar</h3>
                </li>
                {/* markas */}
                <li className='px-5 py-8 rounded-lg shadow-md text-center bg-white border border-main'>
                    <CountUp className='text-2xl text-main font-bold mb-2 inline-block' start={0} end={uniqueBrands.length} duration={4}/>
                    <h3 className="text-gray-700 font-medium">Mavjud markalar</h3>
                </li>
                {/* cars */}
                <li className='px-5 py-8 rounded-lg shadow-md text-center bg-white border border-main'>
                    <CountUp className='text-2xl text-main font-bold mb-2 inline-block' start={0} end={cars.length} duration={4}/>
                    <h3 className="text-gray-700 font-medium">Mashinalar</h3>
                </li>
                {/* users */}
                <li className='px-5 py-8 rounded-lg shadow-md text-center bg-white border border-main'>
                    <CountUp className='text-2xl text-main font-bold mb-2 inline-block' start={0} end={200} duration={4}/>
                    <h3 className="text-gray-700 font-medium">Foydalanuvchilar</h3>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Count
