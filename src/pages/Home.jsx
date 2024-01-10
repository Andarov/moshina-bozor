import React from 'react'
import Catalog from '../components/Catalog'
import Hero from '../components/Hero'
import New from '../components/NewCars'
import News from '../components/News'

const Home = () => {
  return (
    <>
        <Hero/>
        <Catalog/>
        <New/>
        <div className='py-14 bg-[#F2F4F6]'>
          <News/>
        </div>
    </>
  )
}

export default Home