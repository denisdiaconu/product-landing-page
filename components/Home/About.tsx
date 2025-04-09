import React from 'react';

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
};

const About = ({ imageOrder, textOrder, title, linkText }: Props) => {
  return <div className='pt-16 pb-16'>
    <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className={`${textOrder}`}>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{title}</h1>
        </div>
    </div>
  </div>;
};

export default About;
