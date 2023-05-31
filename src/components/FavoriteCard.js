import React, { useState, useEffect } from 'react';
import Product from './card';
import allProducts from '../Data/product';

const FavoriteProductCard = () => {
  const [products, setProducts] = useState(allProducts);

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
    <div className='pt-10'>
      <div className="flex flex-wrap justify-center items-center w-full gap-10 p-20">
        {favoriteProducts.map((product) => (
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
        ))}
      </div>
    </div>
  );
};

export default FavoriteProductCard;