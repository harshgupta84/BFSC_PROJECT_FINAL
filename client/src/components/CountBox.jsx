import React from 'react';

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-48">
      <h4 className="font-bold text-2xl text-blue-900 p-4 bg-blue-200 rounded-tl-xl rounded-tr-xl w-full text-center">{value}</h4>
      <p className="font-normal text-lg text-gray-900 bg-gray-100 px-4 py-3 w-full rounded-bl-xl rounded-br-xl text-center">{title}</p>
    </div>
  );
};

export default CountBox;
