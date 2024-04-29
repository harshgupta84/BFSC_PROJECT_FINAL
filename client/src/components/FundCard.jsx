import React from 'react';
import { thirdweb, menu, dashboard } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  return (
    <div className="w-full rounded-lg bg-gray-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105" onClick={handleClick}>
      <img src={image} alt="fund" className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src={menu} alt="tag" className="w-4 h-4 mr-1" />
          <p className="text-sm text-gray-400">Charity</p>
        </div>
        <h3 className="text-lg font-semibold text-white mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 truncate">{description}</p>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-gray-400">{amountCollected}</h4>
            <p className="text-xs text-gray-500">Raised of {target}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-gray-400">{deadline}</h4>
            <p className="text-xs text-gray-500">Days Left</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-700 mr-2">
            <img src={dashboard} alt="user" className="w-4 h-4" />
          </div>
          <p className="text-xs text-gray-500">by <span className="text-gray-400">{owner}</span></p>
        </div>
      </div>
    </div>
  )
}

export default FundCard;
