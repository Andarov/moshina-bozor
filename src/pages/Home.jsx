import React from 'react'
import BestCars from '../components/BestCars'
import Catalog from '../components/Catalog'
import Filter from '../components/Filter'
import Hero from '../components/Hero'
import New from '../components/NewCars'
import News from '../components/News'

const Home = () => {
  return (
    <>
        <Hero/>
        <div className="w-full max-w-base mx-auto px-5 pt-14">
          <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
            Kerakli avtomobilni tanlang
          </h2>
          <Filter/>
        </div>
        <Catalog/>
        <New/>
        <div className='pt-7 pb-14 bg-[#F2F4F6] sm:pt-14'>
          <BestCars/>
          <News/>
        </div>
    </>
  )
}

export default Home