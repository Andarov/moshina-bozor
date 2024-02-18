import React from 'react'
import BestCars from '../components/BestCars'
import Catalog from '../components/Catalog'
import Count from '../components/Count'
import Filter from '../components/Filter'
import Hero from '../components/Hero'
import New from '../components/NewCars'
import News from '../components/News'
import CTA from '../components/CTA'
import Comments from '../components/Comments'

const Home = () => {
  return (
    <>
        <Hero/>
        <Count/>
        <Catalog/>
        <New/>
        <Comments/>
        <CTA/>
        <div className='pt-6 pb-14 bg-[#F2F4F6] sm:pt-12'>
          <BestCars/>
          <News/>
        </div>
    </>
  )
}

export default Home