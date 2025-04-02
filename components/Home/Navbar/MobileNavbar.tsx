import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

const MobileNavbar = () => {
  return (
    <div>
      <div className="bg-black fixed inset-0 z-[1002] transform transition-all duration-500 opacity-70 w-full h-screen"></div>
      <div
        className="text-white bg-pink-600 w-[80%] sm:w-[60%] fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300
        space-y-6 z-[1050]"
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl sm:text-[30px] ml-12 pb-1 border-b-[1.5px] border-white">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default MobileNavbar;
