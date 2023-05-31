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
    <div>
      <div className="flex flex-col gap-10">
        <h1 className='overline decoration-[#ff583e] decoration-2 text-3xl text-center'>Words of Praise</h1>
        <p className='text-center text-neutral-500 italic text-md'>Discover what our satisfied customers have to say about their experience with us.</p>
      </div>
      <div className="flex items-center justify-center p-2">
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={handlePrev}
        >
          <img src={leftArrow} alt='leftArrow'/>
        </button>
        <div className="overflow-hidden  h-auto w-[660px]">
          <div
            className="flex transition-transform ease-in-out duration-1000"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Testimonial_data.map((item) => (
              <div key={item.id} className='flex justify-center items-center h-auto m-20'>
                <div className='relative flex flex-col justify-center items-center w-[500px] h-[300px]'>
                  <img src={item.image} alt={'person' + item.id} className='absolute top-[-10%] h-24 w-24 shadow-2xl shadow-black rounded-full border-2 border-solid border-white z-20' ></img>
                  <div className=" bg-white rounded-lg overflow-hidden shadow-2xl shadow-[gray] border-2 border-solid border-white h-auto w-auto">
                    <div className='flex justify-start items-start px-5 pt-14'>
                      <img src={quote} alt='quote' className='h-10 w-10'></img>
                      <p>{item.description}</p>
                    </div>
                    <p className='px-10 py-5 text-right font-bold italic text-[#ff583e]'>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={handleNext}
        >
          <img  src={rightArrow} alt='rightArrow'/>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;