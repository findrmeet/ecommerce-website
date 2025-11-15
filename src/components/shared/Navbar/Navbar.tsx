import React from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <div className="space-x-6 font-[Kanit] flex ">
        <button className="uppercase py-2 px-4  rounded-full bg-linear-to-r text-white  from-[#0084FF] to-[#00E560] flex items-center gap-2">
          <HiOutlineBolt size={20} /> Offers
        </button>
        <button className="uppercase py-2 px-4 rounded-full bg-[#1D2535] text-white ">
          Whistlist
        </button>
        <button className="uppercase py-2 px-4 rounded-full bg-[#E2E8F0]">
          Login
        </button>
        <button className="uppercase py-2 px-4 rounded-full bg-[#03C855]  text-white flex items-center gap-2">
          <RiShoppingBag3Line size={20} /> Bags{" "}
          <span className="bg-white text-[#03C855] px-1.5 text-center text-[.8rem] rounded-full">
            5
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
