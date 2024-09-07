import React from 'react';
import FoodMenu from './FoodMenu';
import pizzaImage from '../assets/pizza.jpg';
import burgerImage from '../assets/burger.jpg';
import momoImage from '../assets/memo.jpg';
import risotto from "../assets/Risotto.jpeg";
import pastaImage from '../assets/pasta.jpg'; 
import sandwichImage from '../assets/sandwich.jpg'; 

function FoodMenuList() {
  const foodNames = [
    { name: 'Pizza', image: pizzaImage, price: '20', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Burger', image: burgerImage, price: '15', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Momo', image: momoImage, price: '10', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Risotto', image: risotto, price: '5', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." },
    { name: 'Pasta', image: pastaImage, price: '12', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." }, // New card
    { name: 'Sandwich', image: sandwichImage, price: '8', ingredients: "Made with Italian Sauce, Chicken, and organic vegetables." } // New card
  ];

  return <FoodMenu foodNames={foodNames} />;
}

export default FoodMenuList;
