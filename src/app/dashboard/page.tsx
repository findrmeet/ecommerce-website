"use client";

import { useState } from "react";
import {
  Box,
  BoxIcon,
  CircleCheck,
  CircleX,
  LayoutDashboardIcon,
  LogOut,
  ShoppingCart,
  UserRound,
} from "lucide-react";

const Page = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="container-custom grid grid-cols-12 gap-2.5 ">
      {/* sidebar */}
      <ul className="space-y-4 col-span-2 hidden sm:block">
        <li
          onClick={() => setActive("dashboard")}
          className={`flex gap-2 cursor-pointer hover:text-[#03C855] ${
            active === "dashboard" && "text-[#03C855]"
          }`}
        >
          <LayoutDashboardIcon /> Dashboard
        </li>

        <li
          onClick={() => setActive("orders")}
          className={`flex gap-2 cursor-pointer hover:text-[#03C855] ${
            active === "orders" && "text-[#03C855]"
          }`}
        >
          <ShoppingCart /> Orders
        </li>

        <li
          onClick={() => setActive("account")}
          className={`flex gap-2 cursor-pointer hover:text-[#03C855] ${
            active === "account" && "text-[#03C855]"
          }`}
        >
          <UserRound /> Account
        </li>

        <li className="flex gap-2 cursor-pointer hover:text-[#03C855]">
          <LogOut /> Logout
        </li>
      </ul>

      {/* content */}
      <div className="sm:col-span-10 col-span-12">
        {active === "dashboard" && (
          <div className="grid sm:grid-cols-3 gap-2.5 self-start">
            <div className="bg-white rounded-2xl flex p-4 ">
              <div className="flex gap-3 items-center">
                <span className="p-3 bg-[#935AF552] block rounded-full">
                  <Box />
                </span>
                <div>
                  <p>Total Orders</p>
                  <div className="text-4xl">0</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl flex p-4">
              <div className="flex gap-3 items-center">
                <span className="p-3 bg-[#32D58352] block rounded-full text-[#12B76A]">
                  <CircleCheck />
                </span>
                <div>
                  <p>Completed</p>
                  <div className="text-4xl">0</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl flex p-4">
              <div className="flex gap-3 items-center">
                <span className="p-3 bg-[#FB545452] block rounded-full text-[#D34A3E]">
                  <CircleX />
                </span>
                <div>
                  <p>Cancelled</p>
                  <div className="text-4xl">0</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {active === "orders" && (
          <div className="flex flex-col items-center justify-center py-4 gap-4">
            <div className="w-fit">
              <span className="bg-[#FF42341F]  p-2 flex justify-center items-center rounded-full">
                <span className="bg-[#FF423433] inline-block p-2 rounded-full">
                  <BoxIcon />
                </span>
              </span>
            </div>
            You don’t have any previous orders.
            <button className=" bg-[#03C855] text-white py-2 px-4 rounded-lg font-medium cursor-pointer">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
