import React, { useState, useEffect} from 'react';
import Product from './card';
import allProducts from '../Data/product';

const ProductsCard = () => {
  const [products, setProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFavoriteChange = (productId, isFavorite) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: isFavorite && !product.isFavorite }
          : product
        )
      );
  };

  const isFavorite = (product_id => {
    const favorite_products = localStorage.getItem('favorites');
    if (favorite_products) {
      const product_ids = JSON.parse(favorite_products);

      return product_ids.includes(product_id);
    }
    return false
  });

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);

    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setProducts(filteredProducts);
  };

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
      <div className='flex flex-col justify-center items-center gap-10 m-4'>
        <p className='overline decoration-[#ff583e] decoration-2 text-3xl text-center'>Our Product Collection</p>
        <p className='text-center text-neutral-500 italic text-md'>Explore our wide range of high-quality products, designed to enhance your everyday life and exceed your expectations.</p>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search By Name..."
          className="w-[80%] lg:w-[400px] py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff583e]"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center w-full gap-10 p-4">
        {products.map((product) => (
          <div key={product.id}>
            <Product
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              isFavorite={isFavorite(product.id)} 
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

export default ProductsCard;


