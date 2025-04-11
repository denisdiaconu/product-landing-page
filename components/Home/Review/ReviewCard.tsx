import Image from 'next/image';
import React from 'react';
import { BsQuote } from 'react-icons/bs';

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div>
      <BsQuote className="text-pink-500 w-14 h-14" />
      <p className="text-gray-800 dark:text-gray-200 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius libero
        alias ipsa architecto qui eos officiis vero nemo error quam, numquam
        enim sit minus assumenda veritatis dignissimos debitis, ducimus
        temporibus! A, ducimus tenetur?
      </p>
      <div className="mt-6">
        <Image
          src={image}
          alt="image"
          width={100}
          height={100}
          className="object-center mx-auto rounded-full"
        />
        <h1 className='text-lg font-bold text-center mt-4'>{name}</h1>
        <h1 className='text-gray-500 text-center'>{role}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
