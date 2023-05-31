import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import blackLogo from '../images/blackLogo.png'
import facebook from '../icons/facebook.svg'
import instagram from '../icons/instagram.svg'
import youtube from '../icons/youtube.svg'

function Footer() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10 bg-black p-10 h-auto w-full">
      {/* opening hours */}
      <div className='flex flex-col justify-center items-center gap-4 text-white'>
        <p className='text-center text-neutral-500 italic text-xl'>Business hours</p>
        <div className='flex flex-col justify-center items-center'>
          <p>Monday - Friday</p>
          <p className='text-base'>09 am - 17 pm</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p>Saturday</p>
          <p className='text-base'>09 am - 12 pm</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p>Sunday</p>
          <p className='text-base'> Closed </p>
        </div>
      </div>
      <hr className='border border-[gray] lg:h-48 w-1/2 lg:w-0'/>
      {/* social Media */}
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={blackLogo} alt='blackLogo' className='w-20 h-20' />
        <p className='text-white'>Follow Us & Connect</p>
        <div className='flex gap-1'>
          <a href='google.com'>
            <img
              src={facebook}
              alt='facebook'
              className="w-8 h-8 mx-2 transition duration-300 transform hover:scale-150"
            />
          </a>
          <a href='google.com'>
            <img
              src={instagram}
              alt='instagram'
              className="w-8 h-8 mx-2 transition duration-300 transform hover:scale-150"
            />
          </a>
          <a href='google.com'>
            <img
              src={youtube}
              alt='youtube'
              className="w-8 h-8 mx-2 transition duration-300 transform hover:scale-150"
            />
          </a>
        </div>
        <div className="text-gray-400 text-xs">
          © 2023 MyCurly. All rights reserved.
        </div>
      </div>
      <hr className='border border-[gray] lg:h-48 lg:w-0 w-1/2'/>
      {/* links */}
      <div className="flex lg:flex-col flex-row flex-wrap justify-center gap-6 text-white">
        <Link to="/" className="hover:underline decoration-[#ff583e] decoration-2">
          Home
        </Link>
        <Link to="/about" className="hover:underline decoration-[#ff583e] decoration-2">
          About
        </Link>
        <Link to="/product" className="hover:underline decoration-[#ff583e] decoration-2">
          Our product
        </Link>
        <Link to="/Contact" className=" hover:underline decoration-[#ff583e] decoration-2">
          Contact Us
        </Link>
        {isAuthenticated && (
          <Link to="/profile" className="hover:underline decoration-[#ff583e] decoration-2">
          My account
          </Link>
        )}
      </div>
    </div>
  );
}

export default Footer;