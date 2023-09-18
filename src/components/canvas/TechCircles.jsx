import React from "react";

const TechCircles = ({ technology }) => {
  return (
    <li className='flex items-center flex-col'>
      <div className='relative border-white bg drop-shadow-[0_0_2px_#000] border-2 rounded-full p-2 bg-[#ffffff] backdrop-blur-[2.5px]'>
        <img
          src={technology.icon}
          alt={technology.name}
          className='rounded-full w-16 h-16 object-cover hover:'
        />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
          <p className='text-white text-xs text-center bg-black bg-opacity-50 p-2 rounded'>
            {technology.name}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TechCircles;
