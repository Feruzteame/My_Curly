import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ConfirmationModal from '../components/ConfirmationModal';
import ModuleComponent from '../components/module';

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [total, setTotal] = useState(0);
  const [firstTotal, setFirstTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(5);
  const [showAlert, setShowAlert] = useState(false);

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.name] = 1;
      return acc;
    }, {})
  );

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => {
      const quantity = quantities[item.name];
      const price = item.price;
      return acc + quantity * price;
    }, 0);

    const formattedTotal = newTotal.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      maximumSignificantDigits: 10,
    });

    setFirstTotal(formattedTotal);
  }, [quantities, cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => {
      const quantity = quantities[item.name];
      const price = item.price;
      return acc + quantity * price;
    }, 0);

    let discount = 0;
    if (cartItems.length >= 2 && cartItems.length < 5) {
      discount = newTotal * 0.05; // 5% discount
    } else if (cartItems.length >= 5 && cartItems.length < 10) {
      discount = newTotal * 0.1; // 10% discount
    } else if (cartItems.length >= 10) {
      discount = newTotal * 0.15; // 15% discount
    }

    const minimizedNumber = discount.toFixed(2);
    setDiscount(minimizedNumber);

    const discountedTotal = newTotal - discount + shipping;

    const formattedTotal = discountedTotal.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      maximumSignificantDigits: 10,
    });

    setTotal(formattedTotal);
  }, [quantities, cartItems]);

  const handleQuantityChange = (name, event) => {
    const newQuantities = { ...quantities, [name]: event.target.value };
    setQuantities(newQuantities);

    const updatedCartItems = cartItems.map((item) => {
      if (item.name === name) {
        return { ...item, quantity: event.target.value };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (name) => {
    setItemToDelete(name);
    setShowConfirmation(true);
  };

  const handleConfirmRemove = () => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemToDelete);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setShowConfirmation(false);
  };

  const handleCancelRemove = () => {
    setShowConfirmation(false);
    setItemToDelete(null);
  };

  const handleCheckout = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setShowAlert(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <p className="overline decoration-[#ff583e] decoration-2 text-3xl text-center pt-10">Happy shopping!</p>
      <p className="text-center text-neutral-500 italic text-md px-5 pt-5">
        Once you're satisfied with your choices, you can proceed to checkout and complete your purchase.
      </p>
      {cartItems.length === 0 ? (
        <div className="flex flex-col gap-10 h-[200px] p-10">
          <p>Your cart is empty.</p>
          <Link
            to="/product"
            className="bg-[#ff583e] rounded w-full px-10 py-2 border hover:bg-white hover:text-black hover:border-[#ff583e]"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:items-start items-center w-full p-8">
          <ul className="hidden lg:flex flex-col flex-wrap justify-left items-left w-auto gap-10 p-20">
            {cartItems.map((item, index) => (
              <li key={index} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md h-36 w-auto px-2">
                <img className="h-full w-36 object-cover" src={item.image} alt={item.name} />
                <div className="flex flex-col gap-4 px-4 py-2">
                  <h2 className="text-l font-bold">{item.name}</h2>
                  <p className="text-gray-700 text-base">{item.description}</p>
                  <div className="flex items-center justify-between gap-10">
                    <input
                      type="number"
                      min="1"
                      value={quantities[item.name]}
                      onChange={(event) => handleQuantityChange(item.name, event)}
                      placeholder="Quantity"
                      className="w-10 border border-gray-100 p-1 rounded bg-slate-100"
                    />
                    <div className="font-bold text-lg text-[blue]">${item.price.toFixed(2)}</div>
                    <button
                      className="bg-[#ff583e] text-black rounded px-4 py-2 w-[80%]"
                      onClick={() => handleRemoveItem(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* mobile version */}
          <ul className="flex lg:hidden flex-col flex-wrap justify-left items-left w-auto h-auto gap-10">
            {cartItems.map((item, index) => (
              <li key={index} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md h-full w-auto px-2">
               <div className="flex flex-col gap-4 px-4 py-2">
                  <div className='flex gap-4'>
                    <img className="w-20 h-20 object-cover" src={item.image} alt={item.name} />
                    <div className='flex flex-col'>
                      <h2 className="text-l font-bold">{item.name}</h2>
                      <p className="text-gray-700 text-base">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-10">
                    <input
                      type="number"
                      min="1"
                      value={quantities[item.name]}
                      onChange={(event) => handleQuantityChange(item.name, event)}
                      placeholder="Quantity"
                      className="w-10 border border-gray-100 p-1 rounded bg-slate-100"
                    />
                    <div className="font-bold text-lg">${item.price.toFixed(2)}</div>
                    <button
                      className="bg-[#ff583e] text-black rounded px-4 py-2 w-[80%]"
                      onClick={() => handleRemoveItem(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className=" flex flex-col justify-left items-left gap-5 my-10 lg:my-20 pb-5 bg-white overflow-hidden shadow-md rounded-lg">
            <div className="w-[300px]">
              <div className="bg-slate-100 p-5">
                <p className="underline font-bold italic">Discount</p>
                <p>5% for 2 type product</p>
                <p>10% for 5 type product</p>
                <p>15% for 10 type product</p>
              </div>
              <div className="flex flex-col justify-center p-2 ">
                <p className="underline font-bold italic">Order Summary</p>
                <div className="flex justify-between gap-10 p-2">
                  <p>Items Total:</p>
                  <p>${firstTotal}</p>
                </div>
                <div className="flex justify-between gap-10 p-2">
                  <p>Discount:</p>
                  <p>- ${discount}</p>
                </div>
                <div className="flex justify-between gap-10 p-2">
                  <p>Shipping:</p>
                  <p>+ ${shipping}</p>
                </div>
                <div className="flex justify-between gap-10 p-2 border-t border-black">
                  <p className="font-bold">Total:</p>
                  <p className="font-bold">${total}</p>
                </div>
                <button
                  className="bg-[#ff583e] rounded w-full px-10 py-2 mt-4 border hover:bg-white hover:text-black hover:border-[#ff583e]"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
      {showConfirmation && (
        <ConfirmationModal
          message='Are You Sure You Need To Remove This Item From The Cart ?'
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
      {showAlert && (
        <ModuleComponent
          type="success"
          message="Checkout successful Done!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default Cart;


