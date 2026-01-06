import {
  Box,
  Check,
  CircleCheck,
  CircleX,
  LayoutDashboardIcon,
  LogOut,
  ShoppingCart,
  UserRound,
} from "lucide-react";

const page = () => {
  return (
    <div className="container-custom  grid grid-cols-12 gap-2.5">
      {/* sidebar */}
      <ul className="space-y-4 col-span-2 ">
        <li className="flex gap-2 hover:text-[#03C855] cursor-pointer">
          <LayoutDashboardIcon /> Dashboard
        </li>
        <li className="flex gap-2 hover:text-[#03C855] cursor-pointer">
          <ShoppingCart /> Orders
        </li>
        <li className="flex gap-2 hover:text-[#03C855] cursor-pointer">
          <UserRound /> Account
        </li>
        <li className="flex gap-2 hover:text-[#03C855] cursor-pointer">
          <LogOut /> Logout
        </li>
      </ul>

      {/* content */}
      <div className="col-span-10 grid grid-cols-3 gap-2.5 self-start">
        <div className="bg-white rounded-2xl flex p-4">
          <div className="flex gap-3 items-center">
            <div>
              <span className="p-3 bg-[#935AF552] block rounded-full">
                <Box />
              </span>
            </div>
            <div>
              <p>Total Orders</p>
              <div className="text-4xl">0</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl flex p-4">
          <div className="flex gap-3 items-center">
            <div>
              <span className="p-3 bg-[#32D58352] block rounded-full text-[#12B76A]">
                <CircleCheck />
              </span>
            </div>
            <div>
              <p>Completed</p>
              <div className="text-4xl">0</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl flex p-4">
          <div className="flex gap-3 items-center">
            <div>
              <span className="p-3 bg-[#FB545452] block rounded-full text-[#D34A3E]">
                <CircleX />
              </span>
            </div>
            <div>
              <p>Cancelled</p>
              <div className="text-4xl">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
