import React from 'react';
import { useParams } from 'react-router-dom';
import { cars } from '../data';

const CarDetail = () => {
  const { id } = useParams();
  const carItem = cars.find((car) => car.id === id);

  return (
    <div>
      {carItem ? (
        <div>
          <h2>{carItem.marka}</h2>
          {/* Display other car details */}
        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default CarDetail;
