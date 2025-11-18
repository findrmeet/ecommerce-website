"use client";

import { useState } from "react";
import Logo from "../Logo/Logo";
import NavBtns from "./NavBtns";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center py-3 lg:gap-12 flex-col lg:flex-row gap-2 px-4 lg:px-2">
      <Logo />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <NavBtns />
    </div>
  );
};

export default Navbar;
