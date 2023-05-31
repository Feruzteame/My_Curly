
import React, { useState } from 'react';

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ConfirmationModal from '../components/ConfirmationModal';

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.name] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (name, event) => {
    const newQuantities = { ...quantities, [name]: event.target.value };
    setQuantities(newQuantities);
  };

   const handleRemoveItem = (name) => {
    setItemToDelete(name);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    const newCartItems = cartItems.filter((item) => item.name !== itemToDelete);
    setCartItems(newCartItems);
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[itemToDelete];
      return newQuantities;
    });
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    setShowConfirmation(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setItemToDelete(null);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <NavBar/>
      <p className='overline decoration-[#ff583e] decoration-2 text-3xl text-center pt-10'>Happy shopping!</p>
      <p className='text-neutral-500 italic text-md w-[60%] text-center pt-10'>
        Once you're satisfied with your choices, you can proceed to checkout and complete your purchase.
      </p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="flex flex-wrap justify-center items-center w-full gap-10 p-20">
          {cartItems.map((item, index) => (
            <li key={index} className="bg-white rounded-lg overflow-hidden shadow-md h-[450px] w-[250px]">
              <img className="h-[200px] w-full object-cover" src={item.image} alt={item.name} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-700 text-base mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg">${item.price.toFixed(2)}</div>
                </div>
                <input
                type="number"
                min="1"
                value={quantities[item.name]}
                onChange={(event) => handleQuantityChange(item.name, event)}
                placeholder="Quantity"
                />
              </div>
              <button 
              className='bg-[#ff583e] text-black rounded px-4 py-2 ml-[10%] w-[80%]'
              onClick={() => handleRemoveItem(item.name)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {showConfirmation && (
        <ConfirmationModal
          message="Are you sure you want to remove this item from the cart?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      <Footer/>
    </div>
  );
};

{/* <div className="bg-white rounded-lg overflow-hidden shadow-md h-[450px] w-[250px]">
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
          className='bg-[#ff583e] text-black rounded px-4 py-2 mt-10 w-full'
          onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div> */}

export default Cart;
