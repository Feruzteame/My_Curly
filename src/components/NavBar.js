import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import whiteLogo from '../images/whiteLogo.png';
import favorite from '../icons/favorite.svg';
import shoppingBasket from '../icons/shopping_basket.svg';
import list from '../icons/list.svg';
import cancel from '../icons/cancel.svg';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavoritesItems] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Length of products in the cart
  const cartItemCount = cartItems.length;

  // Length of products in favorites
  const favoritesItemCount = favorites.length;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full z-10'>
      <div className='max-w-7xl mx-auto px-10 py-4 flex items-center justify-between'>
        <Link to='/'>
          <img src={whiteLogo} alt='Logo' className='h-14 w-14 lg:hidden' />
          <img src={whiteLogo} alt='Logo' className='h-14 w-14 hidden lg:block' />
        </Link>
        <div className='lg:hidden'>
          <button
            type='button'
            className='p-2 rounded-md text-white'
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <img src={cancel} alt='Cancel' className='h-10 w-10' />
            ) : (
              <img src={list} alt='List' className='h-10 w-10' />
            )}
          </button>
        </div>
        <div className='hidden lg:flex gap-4'>
          <Link to='/' className='text-black hover:underline underline-offset-8 decoration-[#ff583e] decoration-2 mr-4'>
            Home
          </Link>
          <Link to='/about' className='text-black hover:underline underline-offset-8 decoration-[#ff583e] decoration-2 mr-4'>
            About
          </Link>
          <Link to='/product' className='text-black hover:underline underline-offset-8 decoration-[#ff583e] decoration-2 mr-4'>
            Our Product
          </Link>
          <Link to='/contact' className='text-black hover:underline underline-offset-8 decoration-[#ff583e] decoration-2'>
            Contact Us
          </Link>
          {isAuthenticated && (
            <Link to='/profile' className='text-black hover:underline underline-offset-8 decoration-[#ff583e] decoration-2 ml-4'>
              My Account
            </Link>
          )}
        </div>
        <div className='hidden lg:flex items-center gap-4'>
          {isAuthenticated && (
            <Link to='/my_Cart' className='flex items-center'>
              <p className='mb-5 text-xs text-red-400  font-semibold'>{cartItemCount}</p>
              <img
                src={shoppingBasket}
                alt='Shopping Basket'
                className='w-6 h-6 transition duration-300 transform hover:scale-125'
              />
            </Link>
          )}
          {isAuthenticated && (
            <Link to='/my_Favorite' className='flex items-center'>
              <p className='mb-5 text-xs text-red-400 font-semibold'>{favoritesItemCount}</p>
              <img
                src={favorite}
                alt='Favorite'
                className='w-6 h-6 transition duration-300 transform hover:scale-125'
              />
            </Link>
          )}
          {isAuthenticated && (
            <div className='flex flex-col items-center ml-4'>
              <img src={user.picture} alt='Profile' className='w-8 h-8 rounded-full' />
              <span className='text-black ml-2'>{user.name}</span>
            </div>
          )}
          {isAuthenticated ? (
            <button
              className='ml-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff583e] hover:bg-white hover:text-black hover:border-[#ff583e] focus:outline-none focus:ring-2 focus:ring-offset-2'
              onClick={() => logout()}
            >
              Logout
            </button>
          ) : (
            <button
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:black hover:bg-white ml-4'
              onClick={() => loginWithRedirect()}
            >
              Sign Up / Login
            </button>
          )}
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-[#ff583e] text-white overflow-y-auto transition-transform duration-1000 ease-in-out ${
          isOpen ? 'translate-x-0 translate-y-0 shadow-2xl shadow-black' : 'translate-x-full -translate-y-full'
        }`}
      >
        <div className=''>
          <div className='flex flex-col justify-between'>
            <Link to='/' className='text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#ea3d22a5] w-full text-center p-6 text-xl'>
              Home
            </Link>
            <Link to='/about' className='text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#bd240c00] w-full text-center p-6 text-xl'>
              About
            </Link>
            <Link to='/product' className='text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#ea3d22b1] w-full text-center p-6 text-xl'>
              Our product
            </Link>
            <Link to='/Contact' className='text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#bd240c00] w-full text-center p-6 text-xl'>
              Contact Us
            </Link>
            <div className='w-full bg-white flex justify-between items-center gap-10 p-6 text-lg border-[#ea3d22b1] border-b-4 px-10'>
              {isAuthenticated && (
                <Link to='/profile' className='flex items-center '>
                  <img src={user.picture} alt='Profile' className='w-8 h-8 rounded-full' />
                </Link>
              )}
              {isAuthenticated && (
                <Link to='/my_Cart' className='flex items-center'>
                  <p className='mb-5 text-xs text-red-400 font-semibold'>{cartItemCount}</p>
                  <img src={shoppingBasket} alt='shopping_basket' className='w-6 h-6' />
                </Link>
              )}
              {isAuthenticated && (
                <Link to='/my_favorite' className='flex items-center'>
                  <p className='mb-5 text-xs text-red-400 font-semibold'>{favoritesItemCount}</p>
                  <img src={favorite} alt='favorite' className='w-6 h-6' />
                </Link>
              )}
              {isAuthenticated ? (
                <button
                  className='text-lg font-semibold py-2 px-4 bg-[#ff583e] text-black rounded-md'
                  onClick={() => logout()}
                >
                  Logout
                </button>
              ) : (
                <button
                  className='text-lg font-semibold py-2 px-4 bg-[#ff583e] text-white rounded-md'
                  onClick={() => loginWithRedirect()}
                >
                  Sign Up / Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
