import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import services from '../images/vedio.mp4'

const Public = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [count_favorite, setCounterFavorite] = useState(0)

   useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <div className='flex flex-col gap-0' >
      <NavBar count_favorite={count_favorite}/>
      <Hero />
      <div className='px-20 py-10'>
        <p className='overline decoration-[#ff583e] decoration-2 text-3xl mb-4'>How it works ?</p>
        <div className="flex items-center justify-center gap-10 h-[300px]">
          <div className="flex flex-col justify-center items-center bg-gray-300 py-10 px-4 h-full w-full shadow-md shadow-gray-500 rounded">
            <p className='flex items-center justify-center text-xl font-bold p-2 bg-[#ff583e] text-black w-12 h-12 rounded-full'>1</p>
            <p className='text-xl font-bold p-6' >DISCOVER OUR SERVICES</p>
            <p>First discover we recommended our work and service.</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-300 py-10 px-4 h-full w-full shadow-md shadow-gray-500 rounded">
            <p className='flex items-center justify-center text-xl font-bold p-2 bg-[#ff583e] text-black w-12 h-12 rounded-full'>2</p>
            <p className='text-xl font-bold p-6' >GET TO KNOW YOU</p>
            <p>Fill the service request to understand you hair</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-300 py-10 px-4 h-full w-full shadow-md shadow-gray-500 rounded">
            <p className='flex items-center justify-center text-xl font-bold p-2 bg-[#ff583e] text-black w-12 h-12 rounded-full'>3</p>
            <p className='text-xl font-bold p-6' >BOOK ONLINE</p>
            <p>You will be able to book an appointment online once your form has been checked out by our team.</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-10 px-20 py-10'>
        <div className="relative w-[500px] h-[300px] border shadow-lg shadow-gray-500">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={services}
            muted
            loop
            autoPlay={isPlaying}
          />
          <div className="relative z-10 flex items-end justify-center w-full h-full p-4">
            <p className="text-4xl font-bold">Request to our services</p>
          </div>
        </div>
        <div className='w-[50%] flex flex-col gap-4'>
          <p>MyCurly offers you a range of services and individual lessons to care for your curly hair.</p>
          <p>Thanks to our expertise, you will get a unique and custom service for your curly hair, from the recommendation of products to the right cut for your hair texture.</p>
          <p>Our mission, help you understand and rock your curls.</p>
          <button className='bg-[#ff583e] px-8 py-4 mt-10 rounded w-auto'>Request Here</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Public;