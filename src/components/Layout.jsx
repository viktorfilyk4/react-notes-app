import React, { useState } from "react";
import CommonButton from "./CommonButton";
import InputNoteText from "./InputNoteText";
import ListItem from "./ListItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiFolder } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import FolderListItem from "./FolderListItem";

export default function Layout() {
  const [isNoteOpen, setNoteIsOpen] = useState(false);
  const [isFoldersSectionOpen, setFoldersSectionIsOpen] = useState(false);

  const handleListItemClick = () => {
    setNoteIsOpen(!isNoteOpen);
  };

  const handleBurgerBtnClick = () => {
    setFoldersSectionIsOpen(!isFoldersSectionOpen);
  };

  return (
    <div className="flex w-screen h-screen md:flex">
      {/* Left section */}
      <div className={`z-10 md:w-4/12 w-full h-screen ${isNoteOpen ? "" : ""}`}>
        <div className="fixed left-0 z-50 items-center justify-between block py-2 pl-2 pr-4 bg-white shadow top-6">
          <div className="flex items-center space-x-4 ">
            <button className="p-3 lg:-mr-2" onClick={handleBurgerBtnClick}>
              <GiHamburgerMenu className={isFoldersSectionOpen ? `hidden` : ""} />
              <GrClose className={`${!isFoldersSectionOpen ? "hidden" : ""}`} />
            </button>
            <span className="hidden lg:inline-block">All notes</span>
            <button className="p-3">
              <FaSearch />
            </button>
          </div>
          <button className="inline-block h-8 px-3 py-1 bg-red-500 rounded-sm hover:bg-red-600">
            <MdPostAdd className="w-5 h-5 mx-auto text-white" />
          </button>
        </div>

        <div className="z-20 h-screen border-gray-200 md:border-r">
          {/* Folders section */}
          <div
            className={`absolute flex flex-col items-start w-full h-full transition-all ease-out shadow duration-700 bg-white z-10 overflow-y-hidden ${
              !isFoldersSectionOpen ? "-left-full" : "left-0"
            }`}
          >
            <FolderListItem title="All notes" IconComponent={<FiFolder className="w-5 h-5" />} />
            <FolderListItem title="Favorites" IconComponent={<AiOutlineStar className="w-5 h-5" />} />
          </div>

          {/* List items section */}
          <div className={`h-full ${isFoldersSectionOpen ? "opacity-50 bg-grey-800" : ""}`}>
            <ListItem handleClick={handleListItemClick} />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className={`absolute w-full z-40 bg-white md:block md:w-8/12 transition-all ease-out duration-700 ${!isNoteOpen ? "-right-full" : "right-0"}`}>
        <div className="flex justify-between w-full p-2 pr-4 shadow md:justify-end">
          <button onClick={handleListItemClick} className="p-2 md:hidden">
            <IoMdArrowRoundBack className="w-5 h-5" />
          </button>
          <div className="flex justify-end gap-2">
            <CommonButton IconComponent={<MdDelete />} title="delete" />
            <CommonButton IconComponent={<IoSettingsSharp />} title="settings" />
          </div>
        </div>
        <InputNoteText />
      </div>
    </div>
  );
}
