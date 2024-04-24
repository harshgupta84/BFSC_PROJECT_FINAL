import React from 'react';

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-blue-500 rounded-tl-[10px] rounded-tr-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal text-[16px] text-[#4B5563] bg-gray-200 px-3 py-2 w-full rounded-bl-[10px] rounded-br-[10px] text-center">{title}</p>
    </div>
  );
};

export default CountBox;
