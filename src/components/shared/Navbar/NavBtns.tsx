import Link from "next/link";
import { HiOutlineBolt } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";

const NavBtns = () => {
  return (
    <div className="space-x-6 font-[Kanit]  hidden lg:flex ">
      <button className="cursor-pointer uppercase py-2 px-4  rounded-full bg-linear-to-r text-white  from-[#0084FF] to-[#00E560] flex items-center gap-2 font-medium">
        <HiOutlineBolt size={26} /> Offers
      </button>
      <Link
        href={"/whistlist"}
        className="cursor-pointer uppercase py-2 px-4 rounded-full bg-[#1D2535] text-white font-medium"
      >
        Whistlist
      </Link>
      <button className="cursor-pointer uppercase py-2 px-4 rounded-full bg-[#E2E8F0] font-medium">
        Login
      </button>
      <button className="cursor-pointer uppercase py-2 px-4 rounded-full bg-primary-500  text-white flex items-center gap-2 font-medium">
        <RiShoppingBag3Line size={26} /> Bags{" "}
        <span className="bg-white text-primary-500 px-2 text-center text-base rounded-full">
          5
        </span>
      </button>
    </div>
  );
};

export default NavBtns;
