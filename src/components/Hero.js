import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image1 from '../images/hero1.jpg';
import Image2 from '../images/hero2.jpg';
import Image3 from '../images/hero3.jpg';

function Hero() {
  function scrollDown() {
    window.scrollTo({
      top: window.pageYOffset + 750,
      behavior: 'smooth',
    });
  }
  return (
    <div className='relative '>
      <CarouselProvider
        naturalSlideWidth={1200}
        naturalSlideHeight={600}
        totalSlides={3}
        isPlaying={true}
        interval={3000}
        infinite={true}
      >
        <Slider>
          <Slide index={0}>
            <img
              src={Image1}
              alt='Slide 1'
              className='w-full h-full object-cover '
            />
          </Slide>
          <Slide index={1}>
            <img
              src={Image2}
              alt='Slide 2'
              className='w-full object-cover'
            />
          </Slide>
          <Slide index={3}>
            <img
              src={Image3}
              alt='Slide 3'
              className='w-full object-cover'
            />
          </Slide>
        </Slider>
      </CarouselProvider>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center lg:gap-6 text-center w-[90%] lg:w-[50%] h-auto rounded-md lg:backdrop-blur-sm bg-black/30 lg:rounded-2xl p-4'>
          <p className='text-lg sm:text-md md:text-2xl text-white'>"Life is too short to have boring hair. Embrace your curls and let them be your crown."</p>
          <button className='hidden lg:inline-block text-lg px-8 py-4 leading-none rounded border border-transparent text-white bg-[#ff583e] hover:bg-white hover:text-black hover:border-[#ff583e]' onClick={scrollDown}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;







