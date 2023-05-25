import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image1 from "../images/hero1.jpg";
import Image2 from "../images/hero2.jpg";

function Hero() {
  return (
    <div className="relative">
      <CarouselProvider
        naturalSlideWidth={1200}
        naturalSlideHeight={500}
        totalSlides={2}
        isPlaying={true}
        interval={5000}
        infinite={false}
      >
        <Slider>
          <Slide index={0}>
            <img
              src={Image1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </Slide>
          <Slide index={1}>
            <img
              src={Image2}
              alt="Slide 2"
              className="w-full object-cover"
            />
          </Slide>
        </Slider>
      </CarouselProvider>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-center backdrop-blur-sm bg-black/30 p-6 rounded-2xl">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white mb-4">MyCurly</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 ">"Life is too short to have boring hair. Embrace your curls and let them be your crown."</p>
          <button className="inline-block text-lg px-8 py-4 leading-none rounded border border-transparent text-white bg-[#ff583e] hover:bg-white hover:text-black hover:border-[#ff583e]">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;






