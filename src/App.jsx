import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import FoodMenuList from './components/FoodMenuList';
import ExploreFoodList from './components/ExploreFoodList';

const App = () => {
  return (
   <>
<Navbar />
<Home />
<ExploreFoodList />
<FoodMenuList />
<Footer />

   </>
  )
}

export default App