import React from "react";
import Logo from "../Logo/Logo";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LogoAndCategory = () => {
  return (
    <div>
      <Logo />
      <div className="text-white flex flex-col gap-3 pt-4 text-sm">
        <div className="uppercase cursor-pointer">about us</div>
        <div className="uppercase cursor-pointer">terms & condition</div>
        <div className="uppercase cursor-pointer">privacy policy</div>
        <div className="uppercase cursor-pointer">
          cancellation & refund policy
        </div>
        <div className="uppercase cursor-pointer">contact us</div>
        <div className="uppercase cursor-pointer">faqs</div>
        <div className="uppercase cursor-pointer">store location</div>
        <div className="py-4">
          <h3 className="uppercase text-sm border-b pb-2">share your love</h3>
          <div className="pt-4 flex gap-2">
            <FaFacebookF className="border p-1 text-3xl rounded-full cursor-pointer hover:bg-white hover:text-black" />
            <FaYoutube className="border p-1 text-3xl rounded-full cursor-pointer hover:bg-white hover:text-black" />
            <FaXTwitter className="border p-1 text-3xl rounded-full cursor-pointer hover:bg-white hover:text-black" />
            <FaInstagramSquare className="border p-1 text-3xl rounded-full cursor-pointer hover:bg-white hover:text-black" />
            <FaTiktok className="border p-1 text-3xl rounded-full cursor-pointer hover:bg-white hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAndCategory;
