import React from 'react';

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-48">
      <h4 className="font-bold text-3xl text-white p-3 bg-blue-500 rounded-tl-3xl rounded-tr-3xl w-full text-center">{value}</h4>
      <p className="font-normal text-sm text-gray-700 bg-gray-200 px-3 py-2 w-full rounded-bl-3xl rounded-br-3xl text-center">{title}</p>
    </div>
  );
};

export default CountBox;
