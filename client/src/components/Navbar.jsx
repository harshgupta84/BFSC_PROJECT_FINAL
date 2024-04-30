import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo, search, menu } from "../assets";
import { navlinks } from "../constants";
import Logo from '../assets/DreamFund.png';
const Icon = ({ name, isActive, disabled, handleClick }) => (
  <div
    className={`w-full h-12 flex justify-center items-center ${
      isActive === name
        ? "bg-blue-500 text-white"
        : "bg-gray-900 hover:bg-blue-600"
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
    <div className="flex md:flex-row flex-col-reverse justify-between mb-8 gap-4">
      <Link to="/" ><img src={Logo} className=" max-w-14" /></Link>
      <div className="flex text-white justify-center items-center border border-dashed w-full">
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

      <div className="sm:flex hidden border border-dotted flex-row justify-end gap-4 items-center">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect your wallet"}
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
      </div>
    </div>
  );
};

export default Navbar;
