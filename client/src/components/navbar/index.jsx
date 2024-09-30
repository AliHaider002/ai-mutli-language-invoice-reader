import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="w-[13rem]">
        <img src="/assets/images/logo.png" alt="logo" />
      </div>
      <div className="flex justify-normal items-center gap-[2rem]">
        <div className="border-b-[2px] border-transparent hover:border-black transition-all duration-500 px-[0.2rem] cursor-pointer">
          Home
        </div>
        <div
          className="border-b-[2px] border-transparent hover:border-black transition-all duration-500 px-[0.2rem] cursor-pointer"
          onClick={() => navigate("/invoice/reader")}
        >
          Invoice Reader
        </div>
        <div className="border-b-[2px] border-transparent hover:border-black transition-all duration-500 px-[0.2rem] cursor-pointer">
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
