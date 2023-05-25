import React, { useState } from 'react';
import Product from './card';
import allProducts from '../Data/product';

const ProductsCard = ({setCounterFavorite}) => {
  const [products, setProducts] = useState(allProducts);
  

  const handleFavoriteChange = (productId, isFavorite) => {
    setCounterFavorite(count_favorite => isFavorite ? count_favorite + 1 : count_favorite - 1)
   
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, isFavorite } : product
      )
    );
  };
  
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 p-20">
      {products.map((product) => (
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
  );
};

export default ProductsCard;

