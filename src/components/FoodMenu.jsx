import React from 'react';
import FoodCard from './FoodCard';

function FoodMenu({ foodNames }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Food Menu</h1>
      <div className="flex flex-wrap  justify-center">
        {foodNames.map((food, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2">
            <FoodCard
              title={food.name}
              price={food.price}
              ingredients={food.ingredients}
              image={food.image}
            />
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-lg text-orange-500 cursor-pointer">See All Foods</p>
    </div>
  );
}

export default FoodMenu;
