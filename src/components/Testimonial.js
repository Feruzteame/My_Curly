import React, { useState } from 'react';

import quote from '../icons/quote.svg'
import Testimonial_data from '../Data/Testimonial'
import rightArrow from '../icons/right.svg';
import leftArrow from '../icons/left.svg'

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
      setActiveIndex(activeIndex === 0 ? Testimonial_data.length - 1 : activeIndex - 1);
    };

    const handleNext = () => {
      setActiveIndex(activeIndex === Testimonial_data.length - 1 ? 0 : activeIndex + 1);
    };

  return (
    <div className=''>
      <div className="flex flex-col lg:gap-0">
        <h1 className='overline decoration-[#ff583e] decoration-2 text-3xl text-center'>Words of Praise</h1>
        <p className='self-center text-center text-neutral-500 italic text-md pt-5 lg:w-[50%]'>Discover what our satisfied customers have to say about their experience with us.</p>
      </div>
      <div className="flex items-center justify-center p-4 lg:p-2">
        <button
          className="flex items-center justify-center transition duration-300 transform hover:scale-125"
          onClick={handlePrev}
        >
          <img src={leftArrow} alt='leftArrow' className='bg-[#ff583e6f] p-2 rounded-full lg:w-10 lg:h-10'/>
        </button>
        <div className="overflow-hidden h-auto w-[660px] ">
          <div
            className="flex transition-transform ease-in-out duration-1000"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Testimonial_data.map((item) => (
              <div key={item.id} className='flex justify-center items-center h-auto lg:m-20 mt-4'>
                <div className='relative flex flex-col justify-center items-center w-[300px] h-auto lg:w-[500px] lg:h-[300px]'>
                  <img src={item.image} alt={'person' + item.id} className='absolute mb-10 top-0 lg:top-[-10%] h-24 w-24 lg:shadow-2xl shadow-black rounded-full border-2 border-solid border-white z-20' ></img>
                  <div className=" bg-white rounded-lg overflow-hidden lg:shadow-2xl shadow-[gray] pt-10 border-2 border-solid border-white h-auto w-full">
                    <div className='flex flex-col justify-start items-start p-12 lg:px-5 lg:pt-14'>
                      <img src={quote} alt='quote' className='h-10 pr-[90%]'></img>
                      <p className='text-justify w-full'>{item.description}</p>
                    </div>
                    <p className='px-10 lg:py-5 text-right font-bold italic text-[#ff583e]'>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="flex items-center justify-center transition duration-300 transform hover:scale-125"
          onClick={handleNext}
        >
          <img  src={rightArrow} alt='rightArrow' className='bg-[#ff583e6f] p-2 rounded-full lg:w-10 lg:h-10'/>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;