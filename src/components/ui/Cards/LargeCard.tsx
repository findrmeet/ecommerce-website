import React from "react";

const LargeCard = () => {
  return (
    <div className="h-[386px] bg-[url(/lg-card-bg.png)] relative">
      <span className="absolute inset-0 bg-linear-to-b from-white/50 via-white to-gray-400 flex flex-col justify-around items-center  ">
        <div>
          <img src="ele-2.png" alt="ele" />
        </div>
        <div>
          <img src="lg-phone.png" alt="lg-phone" />
        </div>
        <div>
          <img src="ele-1.png" alt="ele" />
        </div>
      </span>
    </div>
  );
};

export default LargeCard;
