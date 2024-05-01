import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex text-white flex-col items-center  border border-dashed w-48">
      <h4 className="font-bold text-2xl  p-4 rounded-tl-xl rounded-tr-xl w-full text-center">
        {value}
      </h4>
      <p className="font-normal text-lg  px-4 py-3 w-full rounded-bl-xl rounded-br-xl text-center">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
