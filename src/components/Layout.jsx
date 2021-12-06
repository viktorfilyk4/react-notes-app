import React from "react";
import CommonButton from "./CommonButton";
import InputNoteText from "./InputNoteText";
import ListItem from "./ListItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNoteAdd } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

export default function Layout() {
  return (
    <div className="md:flex">
      {/* Left section */}
      <div>
        <div className="flex justify-between px-4 py-3 shadow">
          <div className="flex items-center space-x-8">
            <button className="lg:-mr-4">
              <GiHamburgerMenu />
            </button>
            <span className="hidden lg:inline-block">All notes</span>
            <button>
              <FaSearch className="" />
            </button>
          </div>
          <button className="px-2 py-1 bg-red-500 rounded-sm hover:bg-red-600">
            <MdOutlineNoteAdd className="w-5 h-5 mx-auto text-white" />
          </button>
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>

      {/* Right section */}
      <div className="hidden">
        <div className="flex">
          <div className="flex justify-end w-full gap-2 p-2 shadow">
            <CommonButton IconComponent={<BsFillPencilFill />} title="edit" />
            <CommonButton IconComponent={<MdDelete />} title="delete" />
            <CommonButton IconComponent={<IoSettingsSharp />} title="settings" />
          </div>
        </div>
        <InputNoteText />
      </div>
    </div>
  );
}
