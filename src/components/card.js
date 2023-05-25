import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Product = ({ name, price, description, image, isFavorite, onFavoriteChange }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    onFavoriteChange(!favorite);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-[450px] w-[200px]">
      <img className="h-[200px] w-full object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">${price.toFixed(2)}</div>
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            onClick={toggleFavorite}
          >
            {favorite ? (
              <FaHeart className="h-6 w-6 text-red-500" />
              
            ) : (
              <FaRegHeart className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>
        <button className='bg-[#ff583e] text-black rounded px-4 py-2 mt-10 w-full'>Add To Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};

export default Product;




