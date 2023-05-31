import React, { useState } from 'react';

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import services from '../images/vedio.mp4'

const Public = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='flex flex-col gap-0' >
      <NavBar />
      <Hero />
      <p className='overline decoration-[#ff583e] decoration-2 text-3xl mb-4 p-10 text-center'>How it works ?</p>
      <div className='my-20 px-20'>
        <div className="flex items-center justify-center gap-10 h-[300px]">
          <div className="flex flex-col justify-center items-center gap-6 bg-gray-300 p-6 h-[400px] w-full shadow-md shadow-gray-500 rounded">
            <p className='flex items-center justify-center text-xl font-bold p-2 bg-[#ff583e] text-black w-12 h-12 rounded-full'>1</p>
            <p className='text-xl font-bold p-2' >DISCOVER OUR SERVICES</p>
            <p className='text-justify'>
              Discover our exceptional hair services designed to enhance your natural beauty. 
              Our skilled team of stylists offers precision cuts, vibrant coloring, revitalizing
              treatments, and exquisite styling. Experience the transformative power of our personalized care,
              and indulge in the ultimate hair care experience for stunning, healthy locks.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 bg-gray-300 p-6 h-[400px] w-full shadow-md shadow-gray-500 rounded">
            <p className='flex items-center justify-center text-xl font-bold p-2 bg-[#ff583e] text-black w-12 h-12 rounded-full'>2</p>
            <p className='text-xl font-bold p-2' >GET TO KNOW YOU</p>
            <p className='text-justify'>
              Get to know your hair like never before with our personalized hair analysis.
              Our experienced stylists will assess your hair type, texture, and condition,
              and provide expert recommendations tailored to your unique needs. Unlock the secrets to
              healthy, beautiful hair and embark on a transformative journey of self-discovery with us.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 bg-gray-300 p-6 h-[400px] w-full shadow-md shadow-gray-500 rounded">
            <p className='flex items-center justify-center text-xl font-bold p-2 bg-[#ff583e] text-black w-12 h-12 rounded-full'>3</p>
            <p className='text-xl font-bold p-2' >BOOK ONLINE</p>
            <p className='text-justify'>
              Conveniently book your appointments online and enjoy a hassle-free scheduling experience.
              With our easy-to-use online booking platform, you can secure your preferred time slot for our exceptional 
              services with just a few clicks. Take control of your schedule and book your next appointment with us effortlessly
              and conveniently online.
            </p>
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