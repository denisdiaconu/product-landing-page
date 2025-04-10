import React from 'react';
import ReviewSlider from './ReviewSlider';

const Review = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-gray-800 dark:text-white text-2xl sm:text-3xl text-center font-bold'>Trusted by 10,000+ Happy Customers</h1>
        <span className='bg-pink-600 w-16 h-1 mx-auto mt-3 block'></span>
        <div className='w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16'>
            <ReviewSlider />
        </div>
    </div>
  )
}

export default Review