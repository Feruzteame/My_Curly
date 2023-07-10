import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming the 'Link' component is imported from react-router-dom
import Product from './card';
import allProducts from '../Data/product';

const FavoriteProductCard = () => {
  const [products, setProducts] = useState(allProducts);
 
  // Function to handle changes in favorite status
  const handleFavoriteChange = (productId, isFavorite) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, isFavorite } : product
      )
    );
  };

  // Filter products based on isFavorite property
  const favoriteProducts = products.filter((product) => product.isFavorite);

  useEffect(() => {
    // Retrieve favorited products from local storage
    const storedFavorites = localStorage.getItem('favorites');
    
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          parsedFavorites.includes(product.id)
            ? { ...product, isFavorite: true }
            : product
        )
      );
    }
  }, []);

  useEffect(() => {
    // Update local storage when favorited products change
    const favoriteIds = products
      .filter((product) => product.isFavorite)
      .map((product) => product.id);
    localStorage.setItem('favorites', JSON.stringify(favoriteIds));
  }, [products]);

  return (
    <div>
      <div className='flex flex-col justify-center items-center w-full pt-10'>
        <p className='overline decoration-[#ff583e] decoration-2 text-3xl'>Your Wish List</p>
        <p className='text-center text-neutral-500 italic text-md pt-5 m-5 lg:w-[60%]'>
          This is where you can save and keep track of all your favorite products as a valued customer. Here, you can create a personalized collection of your most-loved items.
        </p>
      </div>
      <div className='flex flex-wrap justify-center items-center w-full gap-10 p-10'>
        {favoriteProducts.length <= 0 ? (
          <div className='flex flex-col gap-10 h-[200px]'>
            <p>You do not have any favorite product.</p>
            <Link to="/product" className='bg-[#ff583e] rounded w-full px-20 py-2 border hover:bg-white hover:text-black hover:border-[#ff583e]'>
              Check Our Product
            </Link>
          </div>
        ) : (
          favoriteProducts.map((product) => (
            <div key={product.id}>
              <Product
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                isFavorite={product.isFavorite}
                onFavoriteChange={(isFavorite) =>
                  handleFavoriteChange(product.id, isFavorite)
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoriteProductCard;

