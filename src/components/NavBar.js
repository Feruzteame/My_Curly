import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import whiteLogo from '../images/whiteLogo.png'
import favorite from '../icons/favorite.svg'
import shopping_basket from '../icons/shopping_basket.svg'

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={whiteLogo} className='h-12 w-12' alt='blackLogo' />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4">
            Home
          </Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4">
            About
          </Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400">
              Dashboard
            </Link>
          )}
        </div>
        <div className='flex justify-end items-end gap-4'>
          <Link to="/" className="flex flex-col">
            <img
              src={shopping_basket}
              alt='shopping_basket'
              className="mx-2 transition duration-300 transform hover:scale-150"
            />
          </Link>
          <Link to="/" className="flex flex-col">
            <p className='flex justify-end items-end text-red-400'>0</p>
            <img
              src={favorite}
              alt='favorite'
              className="mx-2 transition duration-300 transform hover:scale-150"
            />
          </Link>
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
    </nav>
  );
}

export default Navbar;
