import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo, search, thirdweb, menu } from "../assets";
import { navlinks } from "../constants";

const Icon = ({ name, isActive, disabled, handleClick }) => (
  <div
    className={`w-full h-12 flex justify-center items-center ${
      isActive === name
        ? "bg-blue-500 text-white"
        : "bg-gray-900 hover:bg-gray-800"
    } ${!disabled && "cursor-pointer"}`}
    onClick={handleClick}
  >
    <span className={`${isActive !== name && "opacity-50"}`}>{name}</span>
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const { connect, address } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-8 gap-6">
      <div className="flex text-white justify-center items-center space-y-4 w-full">
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

      <div className="sm:flex hidden flex-row justify-end gap-4 items-center">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={{
            backgroundColor: address ? "#1dc071" : "#8c6dfd",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
          }} // Modify button styles
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />

        <Link to="/profile" className="text-white">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={menu}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
