import React from "react";
import Logo from "../Logo/Logo";

const LogoAndCategory = () => {
  return (
    <div>
      <Logo />
      <div className="text-white space-y-3 py-4">
        <div className="uppercase cursor-pointer">about us</div>
        <div className="uppercase cursor-pointer">terms & condition</div>
        <div className="uppercase cursor-pointer">privacy policy</div>
        <div className="uppercase cursor-pointer">
          cancellation & refund policy
        </div>
        <div className="uppercase cursor-pointer">contact us</div>
        <div className="uppercase cursor-pointer">faqs</div>
        <div className="uppercase cursor-pointer">store location</div>
      </div>
    </div>
  );
};

export default LogoAndCategory;
