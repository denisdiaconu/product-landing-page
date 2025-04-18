'use client';
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.screenY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <div className='fixed bottom-4 animate-pulse right-4 cursor-pointer'>ScrollToTop</div>;
};

export default ScrollToTop;
