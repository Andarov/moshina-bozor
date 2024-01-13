import React from 'react'
import { useParams } from 'react-router-dom'

const CarDetail = () => {
  const {marka} = useParams();
  console.log(marka);
  
  return (
    <div>CarDetail</div>
  )
}

export default CarDetail