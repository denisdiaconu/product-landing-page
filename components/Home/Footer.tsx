import React from 'react';
import { FaDribbble, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-gray-950 pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-white font-bold text-3xl">LOGO</div>
          <p className="mt-5 font-semibold text-gray-300 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil
            dolorum velit voluptate odit totam!
          </p>
          <div className='text-white flex items-center space-x-4 mt-6'>
            <div className='bg-blue-700 w-8 h-8 flex items-center justify-center flex-col rounded-full'>
                <FaFacebookF />
            </div>
            <div className='bg-sky-500 w-8 h-8 flex items-center justify-center flex-col rounded-full'>
                <FaX />
            </div>
            <div className='bg-pink-700 w-8 h-8 flex items-center justify-center flex-col rounded-full'>
                <FaDribbble/>
            </div>
            <div className='bg-rose-700 w-8 h-8 flex items-center justify-center flex-col rounded-full'>
                <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
