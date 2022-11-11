import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import CommonButton from "./CommonButton";
import { LayoutContext } from "../context";

function NoteNavbar() {
  const [[isNoteWindowOpen, setNoteWindowOpen], [isSomeNoteItemClicked, setSomeNoteItemClicked]] =
    useContext(LayoutContext);

  return (
    <div
      className={`flex justify-between w-full p-2 pr-4 shadow md:justify-end md:relative md:transition-all`}
    >
      <button onClick={() => setNoteWindowOpen(!isNoteWindowOpen)} className="p-2 md:hidden">
        <IoMdArrowRoundBack className="w-5 h-5" />
      </button>
      <div className={`flex justify-end gap-2 ${!isSomeNoteItemClicked && "md:invisible"}`}>
        <CommonButton IconComponent={<MdDelete />} title="delete" />
        <CommonButton IconComponent={<IoSettingsSharp />} title="settings" />
      </div>
    </div>
  );
}

export default NoteNavbar;
