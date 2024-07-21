import React from 'react'
import { Link } from 'react-router-dom'
import { carComments } from '../data'
import CarCommentItem from './CarCommentItem'

const Comments = () => {
  return (
    <section className='bg-gray-200 py-14'>
      <div className='w-full max-w-base mx-auto px-5'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-2xl leading-7 text-111 font-bold sm:text-3xl md:leading-9'>Moshinalar haqida sharxlar</h2>

          <Link to='/rating' className='underline underline-offset-4'>Barcha sharxlar</Link>
        </div>

        <ul className="grid grid-cols-1 gap-7 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {carComments.slice(0,6).map((car) => (
            <CarCommentItem key={car.id} {...car} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Comments
