import React, { useState } from "react";
import CommonButton from "./CommonButton";
import InputNoteText from "./InputNoteText";
import ListItem from "./ListItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNoteAdd } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Layout() {
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const handleClick = () => {
    setIsNoteOpen(!isNoteOpen);
  };

  return (
    <div className="md:flex">
      {/* Left section */}
      <div className={isNoteOpen && "hidden"}>
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
        <ListItem handleClick={handleClick} />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>

      {/* Right section */}
      <div className={!isNoteOpen && "hidden"}>
        <div className="flex justify-between w-full p-2 shadow">
          <button onClick={handleClick}>
            <IoMdArrowRoundBack className="w-5 h-5" />
          </button>
          <div className="flex justify-end gap-2">
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
