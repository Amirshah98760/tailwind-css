import React from 'react';

function ExploreFood({ foods }) {
  return (
    <div className='text-center py-10 px-5'>
      <h1 className='text-4xl mb-10 text-gray-800'>Explore Foods</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {foods.map((food, index) => (
          <div
            key={index}
            className='relative w-80 h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110'
          >
            <img
              src={food.image}
              alt={food.name}
              className='w-full h-full object-cover'
            />
            <p className='absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xl font-bold text-white shadow-md'>
              {food.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreFood;
