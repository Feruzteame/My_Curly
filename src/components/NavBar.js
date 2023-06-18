import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import whiteLogo from '../images/whiteLogo.png'
import navLogo from '../images/navLogo.png'
import favorite from '../icons/favorite.svg'
import shopping_basket from '../icons/shopping_basket.svg'
import list from '../icons/list.svg'
import cancel from '../icons/cancel.svg'

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative bg-[#ff583e] lg:bg-transparent w-full z-10'>
      <div className=" max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center w-full h-20">
          <div className="flex items-center justify-between lg:hidden w-full">
            <div className="flex lg:hidden items-center flex-shrink-0 text-white mr-6">
              <img src={navLogo} className='h-12 w-12' alt='blackLogo' />
            </div>
            <button
              type="button"
              className="p-2 rounded-md text-white"
              onClick={toggleNavbar}
            >
              <button className={`${isOpen ? 'hidden' : 'block'} h-6 w-10`}>
                <img src={list} alt='list'></img>
              </button>
              <button
                className={`${isOpen ? 'block' : 'hidden'} h-10 w-10`}>
                  <img src={cancel} alt='cancel'></img>
                </button>
            </button>
          </div>
          <div className="hidden lg:flex items-center flex-shrink-0 text-white mr-6">
            <img src={whiteLogo} className='h-12 w-12' alt='blackLogo' />
          </div>
          <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className="text-sm lg:flex-grow">
              <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline decoration-[#ff583e] decoration-2 mr-4">
                Home
              </Link>
              <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline decoration-[#ff583e] decoration-2 mr-4">
                About
              </Link>
              <Link to="/product" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline decoration-[#ff583e] decoration-2 mr-4">
                Our product
              </Link>
              <Link to="/Contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline decoration-[#ff583e] decoration-2 mr-4">
                Contact Us
              </Link>
              {isAuthenticated && (
                <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline decoration-[#ff583e] decoration-2">
                My account
                </Link>
              )}
            </div>
            <div className='flex justify-end items-end gap-4'>
              {isAuthenticated && (
                <Link to="/my_Cart" className="flex flex-col">
                  <p className='flex justify-end items-end text-red-400'>{0}</p>
                  <img
                    src={shopping_basket}
                    alt='shopping_basket'
                    className="mx-2 transition duration-300 transform hover:scale-150"
                  />
                </Link>
              )}
              {isAuthenticated && (
                <Link to="/my_Favorite" className="flex flex-col">
                  <img
                    src={favorite}
                    alt='favorite'
                    className="mx-2 transition duration-300 transform hover:scale-150"
                  />
                </Link>
              )}
              {isAuthenticated ? (
                <div className="flex items-center">
                  <div className='flex flex-col items-center'>
                    <img src={user.picture} alt="Profile" className="h-8 w-8 rounded-full" />
                    <span className="text-black mr-2">{user.name}</span>
                  </div>
                  <button className="ml-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff583e] hover:bg-white hover:text-black hover:border-[#ff583e] focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={() => logout()}>
                    Logout
                  </button>
                </div>
              ) : (
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:black hover:bg-white mt-4 lg:mt-0" onClick={() => loginWithRedirect()}>
                  Sign Up / Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`
      ${isOpen ?
        'overflow-hidden translate-x-0 translate-y-0' : 'translate-x-full -translate-y-full'} 
        absolute top-20 left-0 w-full h-screen sm:hidden transition-transform duration-1000 ease-in-out`
      }>
        <div className="w-screen flex flex-col lg:items-center justify-around lg:w-auto lg:gap-4">
          <div className="flex flex-col lg:flex-grow justify-center items-center text-lg bg-[#ff583e] ">
            <Link to="/" className="text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#ea3d22a5] w-full text-center p-6 text-xl">
              Home
            </Link>
            <Link to="/about" className="text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#bd240c00] w-full text-center p-6 text-xl">
              About
            </Link>
            <Link to="/product" className="text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#ea3d22b1] w-full text-center p-6 text-xl">
              Our product
            </Link>
            <Link to="/Contact" className="text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#bd240c00] w-full text-center p-6 text-xl">
              Contact Us
            </Link>
            {isAuthenticated && (
              <Link to="/profile" className="text-black hover:underline decoration-[#ff583e] decoration-2 bg-[#ea3d22b4] w-full text-center p-6 text-xl">
              My account
              </Link>
            )}
          </div>
          <div className='bg-white flex justify-center items-center gap-5 p-6 text-lg border-[#ea3d22b1] border-b-2'>
            {isAuthenticated && (
              <Link to="/my_Cart" className="flex">
                <p className='flex justify-end items-end text-red-400'>{0}</p>
                <img
                  src={shopping_basket}
                  alt='shopping_basket'
                  className="mx-2 transition duration-300 transform hover:scale-150"
                />
              </Link>
            )}
            {isAuthenticated && (
              <Link to="/my_favorite" className="flex">
                <img
                  src={favorite}
                  alt='favorite'
                  className="mx-2 transition duration-300 transform hover:scale-150"
                />
              </Link>
            )}
            {isAuthenticated ? (
              <div className="flex items-center">
                <button className="ml-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff583e] hover:bg-white hover:text-black hover:border-[#ff583e] focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={() => logout()}>
                  Logout
                </button>
              </div>
            ) : (
              <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-[#ff583e] hover:border-transparent hover:black hover:bg-white mt-4 lg:mt-0" onClick={() => loginWithRedirect()}>
                Sign Up / Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;