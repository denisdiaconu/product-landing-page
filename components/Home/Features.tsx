import React from 'react';
import { FaFingerprint } from 'react-icons/fa';
import { HiOutlineChat } from 'react-icons/hi';
import { IoAppsOutline, IoWifiOutline } from 'react-icons/io5';
import { MdNotifications, MdOutlineTouchApp } from 'react-icons/md';

const featureData = [
  {
    title: 'Touch to buy',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate.',
    icon: <MdOutlineTouchApp className="text-pink-600 mx-auto w-12 h-12" />,
  },
  {
    title: 'Secure Data',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate.',
    icon: <FaFingerprint className="text-pink-600 mx-auto w-12 h-12" />,
  },
  {
    title: 'Instant Chat',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate.',
    icon: <HiOutlineChat className="text-pink-600 mx-auto w-12 h-12" />,
  },
  {
    title: 'Live Notification',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate.',
    icon: <MdNotifications className="text-pink-600 mx-auto w-12 h-12" />,
  },
  {
    title: 'Wifi Support',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate.',
    icon: <IoWifiOutline className="text-pink-600 mx-auto w-12 h-12" />,
  },
  {
    title: 'App Watch',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate.',
    icon: <IoAppsOutline className="text-pink-600 mx-auto w-12 h-12" />,
  },
];

const Features = () => {
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
      cupiditate.
    </div>
  );
};

export default Features;
