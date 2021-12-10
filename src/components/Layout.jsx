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
  const [isNavbarClicked, setNavbarClicked] = useState(false);

  const handleListItemClick = () => {
    setNoteIsOpen(!isNoteOpen);
  };

  const handleBurgerBtnClick = () => {
    setFoldersSectionIsOpen(!isFoldersSectionOpen);
  };

  return (
    <div
      className={`relative flex w-screen h-screen overflow-hidden md:flex ${
        isFoldersSectionOpen ? "overflow-y-hidden" : ""
      }`}
    >
      {/* Left section */}
      <div className={`md:w-4/12 w-full ${isNoteOpen ? "" : ""}`}>
        {/* Navbar */}
        <div className="relative z-20 flex items-center justify-between w-full py-2 pl-2 pr-4 bg-white shadow">
          <div className="flex items-center space-x-4">
            <button className="flex items-center gap-6 p-3 lg:-mr-2" onClick={handleBurgerBtnClick}>
              <GiHamburgerMenu className={isFoldersSectionOpen ? `hidden` : ""} />
              <GrClose className={`${!isFoldersSectionOpen ? "hidden" : ""}`} />
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

        {/* Under navbar section */}
        <div className="relative w-full h-full border-gray-200 md:border-r ">
          {/* Folders section */}
          <div
            className={`absolute flex flex-col items-start w-full h-full transition-all ease-out shadow duration-700 bg-white z-10 ${
              !isFoldersSectionOpen ? "-left-full" : "left-0"
            }`}
          >
            <FolderListItem title="All notes" IconComponent={<FiFolder className="w-5 h-5" />} />
            <FolderListItem
              title="Favorites"
              IconComponent={<AiOutlineStar className="w-5 h-5" />}
            />
          </div>

          {/* List items section */}
          <div
            className={`h-full overflow-y-scroll pb-20 ${
              isFoldersSectionOpen ? "opacity-50 bg-grey-800" : ""
            }`}
          >
            <ListItem handleClick={handleListItemClick} />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div
        className={`absolute w-full z-20 bg-white md:block md:w-8/12 transition-all ease-out duration-700 shadow md:right-0 ${
          !isNoteOpen ? "-right-full" : "right-0"
        }`}
      >
        <div
          className={`flex justify-between w-full p-2 pr-4 shadow md:justify-end md:relative md:transition-all ${
            isNavbarClicked ? "md:-right-0" : ""
          }`}
        >
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
