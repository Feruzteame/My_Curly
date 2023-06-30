import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import contactImage from '../images/contact_us.png';
import call from '../icons/call.svg';
import email from '../icons/email.svg';
import location from '../icons/location.svg'
import whiteLogo from '../images/whiteLogo.png'

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgwzrgb");

  if (state.succeeded) {
      return <div className='w-full h-auto lg:h-[500px] flex flex-col justify-center items-center gap-5 text-xl'>
                <img src={whiteLogo} alt="Logo" className="h-14 w-14" />
                <p className='text-2xl'>Thanks for Contact Us !</p>
                <p className='text-lg'>Your email is sent successfully, we will back you soon.</p>
                <Link to="/" className="hover:underline decoration-[#ff583e] decoration-2 text-lg"> Back to website</Link>
                <p className='italic text-[#ff583e] text-lg'>Team MyCurly</p>
            </div>
  }

  return (
    <div className='h-screen'>
      <NavBar  />
      <div className="flex flex-col gap-10 py-10">
        <h1 className='overline decoration-[#ff583e] decoration-2 text-3xl text-center'>Get in touch</h1>
        <p className='self-center text-center text-neutral-500 italic text-md px-5 lg:w-[50%]'>Feel free to reach out to us through our contact page for any inquiries, feedback, or collaboration opportunities.</p>
        <div className=' hidden lg:flex justify-center flex-wrap items-center gap-10'> 
          <div className='flex flex-col justify-center items-center'>
            <img src={call} alt='call'></img>
            <p className='text-neutral-500 italic text-md'>0032467000</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={email} alt='email'></img>
            <p className='text-neutral-500 italic text-md'>MyCurly@hotmail.com</p>
          </div>
          <div className='flex flex-col justify-center items-center text-md'>
            <img src={location} alt='location'></img>
            <p className='text-neutral-500 italic'>Roeselare 8800, centrumstraat 22</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10 w-full'>
          <div className='hidden lg:flex flex-col'>
            <img src={contactImage} alt='mobile' className='w-[400] h-[500px]'></img>
          </div>
          <form
          onSubmit={handleSubmit}
          className='w-[60%] lg:w-[400px]'>
            <div className="mb-4 w-full">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder='Name'
                className="w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder='email'
                className="w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder='Message'
                rows="6"
                className="w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>
            <div className="text-center">
              <button className='bg-[#ff583e] rounded w-full px-10 py-2 border hover:bg-white hover:text-black hover:border-[#ff583e]'> 
                Send
              </button>
            </div>
          </form>
        </div>
        {/* mobile */}
        <div className='flex flex-row flex-wrap lg:hidden justify-center items-center gap-10 p-4'> 
          <div className='flex flex-col justify-center items-center'>
            <img src={call} alt='call'></img>
            <p className='text-neutral-500 italic text-md'>0032467000</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={email} alt='email'></img>
            <p className='text-neutral-500 italic text-md'>MyCurly@hotmail.com</p>
          </div>
          <div className='flex flex-col justify-center items-center text-md'>
            <img src={location} alt='location'></img>
            <p className='text-neutral-500 italic'>Roeselare 8800, centrumstraat 22</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;