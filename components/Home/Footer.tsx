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
          <div className="text-white flex items-center space-x-4 mt-6">
            <div className="bg-blue-700 w-8 h-8 flex items-center justify-center flex-col rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-sky-500 w-8 h-8 flex items-center justify-center flex-col rounded-full">
              <FaX />
            </div>
            <div className="bg-pink-700 w-8 h-8 flex items-center justify-center flex-col rounded-full">
              <FaDribbble />
            </div>
            <div className="bg-rose-700 w-8 h-8 flex items-center justify-center flex-col rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-white text-lg font-bold">Company</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            About Us
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Services
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Our Customer
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Portfolio
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Blogs
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-white text-lg font-bold">Support</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Legal Information
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Terms & Conditions
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Report Abuse
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Privacy Police
          </p>
        </div>
        <div>
          <h1 className="text-white text-lg font-bold">Get In Touch</h1>
          <div className="mt-6">
            <h1 className="text-white text-sm">Our Mobile Number</h1>
            <h1 className="text-white text-base font-bold mt-1">
              +1 555 237-8490
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-white text-sm">Our Address</h1>
            <h1 className="text-white text-base font-bold mt-1">
              Rovigo, Italy
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 w-[80%] mx-auto border-t flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 Product. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social :</span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaFacebookF />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaX />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
