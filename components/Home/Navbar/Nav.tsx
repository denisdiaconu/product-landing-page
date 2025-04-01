import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className="bg-pink-700 transition-all duration-200 h-[12vh] z-[100] fixed w-full">
      <div className="flex items-center h-full justify-between w-[90%] sm:w-[80%] mx-auto">
        <div className="text-white font-bold text-2xl sm:text-3xl">LOGO</div>
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-white hover:text-green-300 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
