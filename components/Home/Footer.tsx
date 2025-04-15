import React from 'react';

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
        </div>
      </div>
    </div>
  );
};

export default Footer;
