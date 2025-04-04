import React from 'react';

const Hero = () => {
  return (
    <div className="bg-pink-800 flex flex-col justify-center relative w-full h-screen bg_clip">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mt-6 mb-6 leading-[2.5rem] md:leading-[3.5rem]">
            Superior sound, tangible quality
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium">
            Sit back, relax and prepare to experience a new level of audio
            excellence. These headphones combine cutting-edge technology with
            the finest craftsmanship, for the ultimate listening experience.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
