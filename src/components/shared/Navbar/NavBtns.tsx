import { HiOutlineBolt } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";

const NavBtns = () => {
  return (
    <div className="space-x-6 font-[Kanit] flex ">
      <button className="cursor-pointer uppercase py-2 px-4  rounded-full bg-linear-to-r text-white  from-[#0084FF] to-[#00E560] flex items-center gap-2">
        <HiOutlineBolt size={20} /> Offers
      </button>
      <button className="cursor-pointer uppercase py-2 px-4 rounded-full bg-[#1D2535] text-white ">
        Whistlist
      </button>
      <button className="cursor-pointer uppercase py-2 px-4 rounded-full bg-[#E2E8F0]">
        Login
      </button>
      <button className="cursor-pointer uppercase py-2 px-4 rounded-full bg-primary-500  text-white flex items-center gap-2">
        <RiShoppingBag3Line size={20} /> Bags{" "}
        <span className="bg-white text-primary-500 px-1.5 text-center text-[.8rem] rounded-full">
          5
        </span>
      </button>
    </div>
  );
};

export default NavBtns;
