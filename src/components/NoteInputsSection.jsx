import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { getCurrentDateString } from "../utils";

export default function NoteInputsSection() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [dateString, setDateString] = useState(getCurrentDateString());

  const handleFavoriteBtnClick = () => {
    setIsFavorite(!isFavorite);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value);
  }

  return (
    <div className="h-screen p-4 overflow-y-scroll pb-20">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Your title"
            className="w-full py-2 overflow-hidden text-xl rounded-sm outline-none md:text-3xl focus:ring whitespace-nowrap overflow-ellipsis md:w-6/12"
            value={title}
            onChange={handleTitleChange}
          />
          <span className="text-lg text-gray-400">{dateString}</span>
        </div>
        <button className="p-2" onClick={handleFavoriteBtnClick}>
          {isFavorite ? <AiFillStar className="w-7 h-7" /> : <AiOutlineStar className="w-7 h-7" />}
        </button>
      </div>
      <textarea
        className="w-full h-full mt-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Note..."
        value={noteText}
        onChange={handleNoteTextChange}
      ></textarea>
    </div>
  );
}
