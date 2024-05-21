import React from 'react';
import { FaSignal, FaWifi, FaBatteryFull } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-6 mt-2'>
      <p>{new Date().toLocaleTimeString([], {hour12: false})}</p>
      <div className='flex gap-1'>
        <FaSignal />
        <FaWifi />
        <FaBatteryFull />
      </div>
    </div>
  );
};

export default NavBar;
