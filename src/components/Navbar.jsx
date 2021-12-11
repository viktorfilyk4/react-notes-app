import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { GrClose } from "react-icons/gr";

function Navbar() {
  return (
    <div className="relative z-20 flex items-center justify-between w-full py-2 pl-2 pr-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <button className="flex items-center gap-6 p-3 lg:-mr-2" onClick={() => {}}>
          <GiHamburgerMenu className={false ? `hidden` : ""} />
          <GrClose className={`${!false ? "hidden" : ""}`} />
          <span className="hidden text-lg leading-4 lg:inline-block">All notes</span>
        </button>
        <button className="p-3">
          <FaSearch />
        </button>
      </div>
      <button className="inline-block h-8 px-3 py-1 transition-all bg-red-500 rounded-sm hover:bg-red-600">
        <MdPostAdd className="w-5 h-5 mx-auto text-white" />
      </button>
    </div>
  );
}

export default Navbar;
