import React, { useState } from 'react';

import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const ProductPage = () => {
   const [count_favorite, setCounterFavorite] = useState(0)

  return (
    <div>
      <NavBar count_favorite={count_favorite}/>
      <ProductCard setCounterFavorite={setCounterFavorite}/>
      <Footer/>
    </div>
  );
}

export default ProductPage;