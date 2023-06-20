import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import ModuleComponent from './module';

import Alert from './Alert'; // Import the Alert component

const Product = ({ name, price, description, image, isFavorite, onFavoriteChange }) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const { isAuthenticated } = useAuth0();
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);
  const [showModule, setShowModule] = useState(false);

  const closeModule = () => {
    setShowModule(false);
  };

  const toggleFavorite = () => {
    if (!isAuthenticated) {
      setShowLoginMessage(true);
    } else {
      setFavorite(!favorite);
      onFavoriteChange(!favorite);
    }
  };

  const addToCart = () => {
    if (!isAuthenticated) {
      setShowAddToCartMessage(true);
    } else {
      const product = {
        name,
        price,
        description,
        image,
        isFavorite: favorite,
      };
      const existingCart = localStorage.getItem('cart');
      let cart = existingCart ? JSON.parse(existingCart) : [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    setShowModule(true);
  };

  const handleAddToCartConfirmation = () => {
    setShowAddToCartMessage(false);
  };

  const handleLoginConfirmation = () => {
    setShowLoginMessage(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-auto w-[250px]">
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
        <button
          className="bg-[#ff583e] text-black rounded px-4 py-2 mt-10 w-full border hover:bg-white hover:text-black hover:border-[#ff583e]"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
      {showAddToCartMessage && (
        <Alert
          message="Please LogIn/SignUp to buy the product."
          onConfirm={handleAddToCartConfirmation}
        />
      )}
      {showLoginMessage && (
        <Alert
          message="Please LogIn/SignUp for liked and see liked products."
          onConfirm={handleLoginConfirmation}
        />
      )}
      {showModule &&
       <ModuleComponent
       message='product is add to cart successfully'
       onClose={closeModule}
       />}
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