import React from 'react'
import BestCars from '../components/BestCars'
import Catalog from '../components/Catalog'
import Count from '../components/Count'
import Filter from '../components/Filter'
import Hero from '../components/Hero'
import New from '../components/NewCars'
import News from '../components/News'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
        <Hero/>
        <Count/>
        <div className="w-full max-w-base mx-auto px-5 pt-6">
          <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
            Kerakli avtomobilni tanlang
          </h2>
          <Filter/>
        </div>
        <Catalog/>
        <New/>
        <CTA/>
        <div className='pt-6 pb-14 bg-[#F2F4F6] sm:pt-12'>
          <BestCars/>
          <News/>
        </div>
    </>
  )
}

export default Home