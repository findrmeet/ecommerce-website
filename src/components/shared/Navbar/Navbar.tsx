"use client";

import { useState } from "react";
import Logo from "../Logo/Logo";
import NavBtns from "./NavBtns";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-red-400">
      <div className="flex justify-between items-center py-3 md:gap-6 lg:gap-12 flex-col md:flex-row gap-2 px-4 lg:px-2 container-custom">
        <Logo />
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <NavBtns />
      </div>
    </div>
  );
};

export default Navbar;
