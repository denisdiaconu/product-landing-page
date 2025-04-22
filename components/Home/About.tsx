import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
};

const About = ({ imageOrder, textOrder, title, linkText }: Props) => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div className={`${textOrder}`}>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          <div className="mt-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="bg-pink-600 text-white w-6 h-6 flex flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">
                High-Resolution Audio compatible
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="bg-pink-600 text-white w-6 h-6 flex flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">
                High quality wireless audio
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="bg-pink-600 text-white w-6 h-6 flex flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">
                Smart listening experience
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="bg-pink-600 text-white w-6 h-6 flex flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">
                Ergonomic, enfolding design earpads
              </p>
            </div>
            <p className="font-semibold text-pink-600 cursor-pointer hover:underline w-fit">
              {linkText}
            </p>
          </div>
        </div>
        <div
          className={`${imageOrder}`}
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
        >
          <Image src="/images/h1.png" alt="image" width={380} height={380} />
        </div>
      </div>
    </div>
  );
};

export default About;
