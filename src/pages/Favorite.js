import React from 'react';

import NavBar from '../components/NavBar'
import FavoriteProductCard from '../components/FavoriteCard'
import Footer from '../components/Footer'

const ProductPage = () => {
  
  return (
    <div>
      <NavBar />
      <FavoriteProductCard />
      <Footer/>
    </div>
  );
}

export default ProductPage;
