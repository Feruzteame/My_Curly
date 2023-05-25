import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Logo from '../images/whiteLogo.png'

const About = () => {
  return (
    <div>
      <NavBar />
      <div className='flex justify-center items-center gap-20 mx-20 py-10'>
        <div>
          <img src={Logo} className='w-[200px] h-[200px]'></img>
        </div>
        <div className='flex flex-col gap-4 w-6/12 text-justify mb-10'>
          <p className='overline decoration-[#ff583e] decoration-2 text-3xl mb-4'>About Us</p>
          <p className='pb-4 border-b-2 border-solid border-[#f5f3f3]'>
            Welcome to MyCurly your ultimate destination for all things curly hair!
            We are passionate about celebrating and embracing the natural beauty of curls, and we're here 
            to provide you with top-notch services and exceptional products tailored specifically for your curly hair needs.
          </p>
          <p className='pb-4 border-b-2 border-solid border-[#f5f3f3]'> 
            At MyCurly, our highly skilled and experienced stylists are dedicated to delivering 
            personalized and customized services to help you achieve the gorgeous, healthy curls you've always dreamed of. We understand 
            that curly hair requires specialized care, and we're here to ensure you receive the individualized attention your curls deserve.
          </p>
          <p>
            In addition to our outstanding curly hair services, we offer a curated selection 
            of premium products designed to enhance and maintain the beauty of your curls. Our range includes 
            nourishing shampoos, conditioners, and styling products, all carefully chosen for their commitment to 
            quality and natural ingredients. Book an appointment today and let us unleash 
            the full potential of your beautiful curls. Get ready to fall in love with your hair all over again!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;