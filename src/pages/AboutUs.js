import React from 'react';

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Team from '../images/ourTeam.png'
import Testimonial from '../components/Testimonial'

const About = () => {

  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <p className='overline decoration-[#ff583e] decoration-2 text-3xl mb-4 pt-10 text-center'>Discover Our mission</p>
      <p className='self-center text-center text-neutral-500 italic text-md px-5 pt-5 lg:w-[50%]'>Discover our passion for excellence and commitment to delivering exceptional products and services.</p>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 p-6 lg:p-10'>
        <div>
          <img src={Team} alt='team' className='lg:w-[400px] lg:h-[400px]'></img>
        </div>
        <div className='flex flex-col gap-4 lg:w-[40%] text-justify mb-10'>
          <p className='pb-4 lg:border-b-2 border-solid border-[#f5f3f3]'>
            Welcome to MyCurly your ultimate destination for all things curly hair!
            We are passionate about celebrating and embracing the natural beauty of curls, and we're here 
            to provide you with top-notch services and exceptional products tailored specifically for your curly hair needs.
          </p>
          <p className='pb-4 lg:border-b-2 border-solid border-[#f5f3f3]'> 
            At MyCurly, our highly skilled and experienced stylists are dedicated to delivering 
            personalized and customized services to help you achieve the gorgeous, healthy curls you've always dreamed of. We understand 
            that curly hair requires specialized care, and we're here to ensure you receive the individualized attention your curls deserve.
          </p>
        </div>
      </div>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default About;