import React, { useState, useContext } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { LayoutContext, ActiveNoteContext } from "../context";

export default function NotesListItem({ data }) {
  const { title, text, isFavorite } = data;

  const [[isNoteWindowOpen, setNoteWindowOpen], [isSomeNoteItemClicked, setSomeNoteItemClicked]] =
    useContext(LayoutContext);
  const [, setActiveNote] = useContext(ActiveNoteContext);

  const handleFavoriteBtnClick = (e) => {
    e.stopPropagation();
  };

  const handleClick = (noteData) => {
    console.log(noteData);
    setActiveNote(noteData);
    setNoteWindowOpen(!isNoteWindowOpen);
    if (!isSomeNoteItemClicked) setSomeNoteItemClicked(true);
  };

  return (
    <div
      className="flex items-baseline justify-between w-full px-5 pt-5 pb-3 pr-3 transition-all border-b border-gray-200 cursor-pointer hover:bg-teal-600 group"
      onClick={() => handleClick(data)}
    >
      <div className="w-11/12 text-left">
        <h4 className="text-xl font-medium group-hover:text-white">{title}</h4>
        <p className="inline-block w-11/12 overflow-hidden text-gray-600 whitespace-nowrap overflow-ellipsis hover:text-current group-hover:text-white">
          {text}
        </p>
      </div>
      <div className="flex justify-end w-1/12">
        <button className="p-2 group-hover:text-white" onClick={handleFavoriteBtnClick}>
          {isFavorite ? <AiFillStar className="w-5 h-5" /> : <AiOutlineStar className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
