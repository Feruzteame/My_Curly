import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import contactImage from '../images/contact_us.png';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="py-10">
        <h1 className='overline decoration-[#ff583e] decoration-2 text-3xl text-center'>Contact Us</h1>
        <div className='flex justify-center items-center gap-10 w-full'>
          <div className=''>
            <img src={contactImage} className='w-[400] h-[500px]'></img>
          </div>
          <form className='w-[400px]'>
            <div className="mb-4 w-full">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                className="w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                className="w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                required
                id="message"
                rows="4"
                className="w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              ></textarea>
            </div>
            <div className="text-center">
              <button className='bg-[#ff583e] rounded w-auto px-10 py-2'> Send </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;