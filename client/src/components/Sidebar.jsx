import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { navlinks } from '../constants';

const Icon = ({ name, isActive, disabled, handleClick }) => (
  <div
    className={`w-full h-12 flex justify-center items-center ${isActive === name ? 'bg-blue-500 text-white' : 'bg-gray-900 hover:bg-gray-800'
      } ${!disabled && 'cursor-pointer'}`}
    onClick={handleClick}
  >
    <span className={`${isActive !== name && 'opacity-50'}`}>{name}</span>
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-8">

      <div className="flex flex-col justify-center items-center space-y-4 w-full">
        {navlinks.map((link) => (
          <Icon
            key={link.name}
            {...link}
            isActive={isActive}
            handleClick={() => {
              if (!link.disabled) {
                setIsActive(link.name);
                navigate(link.link);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
