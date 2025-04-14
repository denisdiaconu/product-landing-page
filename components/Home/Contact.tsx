import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-gray-800 dark:text-white text-2xl sm:text-3xl text-center font-bold">
        Get In Touch
      </h1>
      <span className="bg-pink-600 block w-16 h-1 mx-auto mt-3"></span>
      <p className="text-gray-700 dark:text-gray-200 mt-4 text-center text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <p className="text-gray-700 dark:text-gray-200 text-center text-sm sm:text-base">
        Consequatur pariatur molestias odio.
      </p>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16">
        <div className="h-full">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-200 text-black px-6 py-3.5 mb-4 w-full block shadow-md outline-none rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200 text-black px-6 py-3.5 mb-4 w-full block shadow-md outline-none rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-200 text-black px-6 py-3.5 w-full block shadow-md outline-none rounded-md"
          />
        </div>
        <div className='h-full'>
            <textarea placeholder='Message' className="bg-gray-200 text-black px-6 py-3.5 w-full h-full block shadow-md outline-none rounded-md mb-4"></textarea>
        </div>
      </div>
      <button className='bg-pink-800 text-white mt-8 flex items-center gap-2 px-6 py-4 rounded-md shadow-md hover:bg-pink-900 transition mx-auto cursor-pointer'>
        <FaPaperPlane size={18}/> Send Message
      </button>
    </div>
  );
};

export default Contact;
