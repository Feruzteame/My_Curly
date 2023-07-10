import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import quote from '../icons/quote.svg';
import TestimonialData from '../Data/Testimonial';
import rightArrow from '../icons/right.svg';
import leftArrow from '../icons/left.svg';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? TestimonialData.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === TestimonialData.length - 1 ? 0 : activeIndex + 1);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=''>
      <div className='flex flex-col lg:gap-0'>
        <h1 className='overline decoration-[#ff583e] decoration-2 text-3xl text-center'>Words of Praise</h1>
        <p className='self-center text-center text-neutral-500 italic text-md pt-5 lg:w-[50%]'>Discover what our satisfied customers have to say about their experience with us.</p>
      </div>
      <div className='flex items-center justify-center p-4 lg:p-2'>
        <button
          className='hidden lg:flex items-center justify-center transition duration-300 transform hover:scale-125'
          onClick={handlePrev}
        >
          <img src={leftArrow} alt='leftArrow' className='bg-[#ff583e6f] p-2 rounded-full lg:w-10 lg:h-10' />
        </button>
        <div className='overflow-hidden h-auto w-[660px]'>
          <div
            className='flex transition-transform ease-in-out duration-1000'
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {TestimonialData.map((item) => (
              <div key={item.id} className='hidden lg:flex justify-center items-center h-auto p-20'>
                <div className='relative flex flex-col justify-center items-center w-[500px] h-auto p-6'>
                  <img src={item.image} alt={'person' + item.id} className='absolute mb-10 top-[-10%] h-32 w-32 shadow-2xl shadow-[gray] rounded-full border-2 border-solid border-[gray] z-20'></img>
                  <div className='bg-white rounded-lg overflow-hidden shadow-2xl shadow-[gray] pt-10 border-2 border-solid border-white h-auto w-full'>
                    <div className='flex flex-col justify-start items-start px-5 pt-14'>
                      <img src={quote} alt='quote' className='h-10 pr-[90%]' />
                      <p className='text-justify w-full'>{item.description}</p>
                    </div>
                    <p className='px-10 py-5 text-right font-bold italic text-[#ff583e]'>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className='hidden lg:flex items-center justify-center transition duration-300 transform hover:scale-125'
          onClick={handleNext}
        >
          <img src={rightArrow} alt='rightArrow' className='bg-[#ff583e6f] p-2 rounded-full lg:w-10 lg:h-10' />
        </button>
      </div>

      <div className='block lg:hidden overflow-hidden'>
        <Slider {...settings}>
          {TestimonialData.map((item) => (
            <div key={item.id} className='p-6'>
              <div className='flex flex-col justify-center items-center bg-white rounded-lg shadow-lg w-full'>
                <img src={item.image} alt={item.id} className='w-32 h-32 rounded-full' />
                <div className='bg-white rounded-lg border-2 border-solid border-white h-auto w-full'>
                  <div className='flex flex-col justify-start items-start p-5'>
                    <img src={quote} alt='quote' className='h-10 pr-[90%]' />
                    <p className='text-justify w-full'>{item.description}</p>
                  </div>
                  <p className='px-10 pb-5 text-right font-bold italic text-[#ff583e]'>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
