import React from 'react';
import ExploreFood from './ExploreFood';
import pizzaImage from '../assets/pizza.jpg';
import burgerImage from '../assets/burger.jpg';
import momoImage from '../assets/memo.jpg';

function ExploreFoodList() {
    const foods = [
    { name: 'Pizza', image: pizzaImage },
    { name: 'Burger', image: burgerImage },
    { name: 'Momo', image: momoImage },
  ];

  return (
    <ExploreFood foods={foods}/>
  );
}

export default ExploreFoodList;