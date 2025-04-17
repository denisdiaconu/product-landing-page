'use client';
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.screenY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
  }, []);
  return <div>ScrollToTop</div>;
};

export default ScrollToTop;
