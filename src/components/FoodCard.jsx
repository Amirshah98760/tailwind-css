import React from 'react';

function FoodCard({ title, price, ingredients, image }) {
  return (
    <div className="flex items-center border border-gray-300 p-5 m-4 bg-white shadow-lg rounded-lg flex-basis-45% hover:translate-x-2 transition-transform duration-300 ease-in-out">
      <div className="w-36">
        <img src={image} alt={title} className="w-full h-36 rounded-lg object-cover" />
      </div>
      <div className="ml-5 flex flex-col justify-center">
        <h1 className="text-xl text-gray-800 mb-2">{title}</h1>
        <h2 className="text-lg text-gray-600 mb-2">${price}</h2>
        <p className="text-sm text-gray-500 mb-5">{ingredients}</p>
        <button className="py-2 px-4 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300">Order Now</button>
      </div>
    </div>
  );
}

export default FoodCard;
