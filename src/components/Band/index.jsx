import React from "react";
import Logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
const Band = () => {
  return (
    <div className="h-20 bg-white flex justify-between px-10 py-2">
      <div className="flex flex-col">
        <h1 className="text-black md:text-5xl text-2xl ">Sofiane TIR</h1>
        <NavLink to={"/"} className="cursor-pointer">
          <p className="text-black ">Entraineur - ASJBR - D4</p>
        </NavLink>
      </div>
      <img src={Logo} alt="" />
    </div>
  );
};

export default Band;
