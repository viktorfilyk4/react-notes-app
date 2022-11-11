import React, { useState, useContext, useEffect } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { getCurrentDateString } from "../utils";
import { ActiveNoteContext, LayoutContext } from "../context";

export default function NoteInputsSection() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [dateString, setDateString] = useState(getCurrentDateString());

  const [activeNote] = useContext(ActiveNoteContext);
  const [, [isSomeNoteItemClicked]] = useContext(LayoutContext);

  useEffect(() => {
    console.log("NoteInputsSection log");
    setIsFavorite(activeNote.isFavorite);
    setTitle(activeNote.title);
    setNoteText(activeNote.text);
  }, []);

  const handleFavoriteBtnClick = () => {};

  const handleTitleChange = (e) => {};

  const handleNoteTextChange = (e) => {};

  return (
    <div>
      {!isSomeNoteItemClicked ? (
        <div className="h-screen flex justify-center items-start pt-80">
          <h5 className="text-6xl font-bold text-gray-400">Note</h5>
        </div>
      ) : (
        <div className="h-screen p-4 overflow-y-scroll pb-20">
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
              <input
                type="text"
                placeholder="Your title"
                className="w-full py-2 overflow-hidden text-xl rounded-sm outline-none md:text-3xl focus:ring whitespace-nowrap overflow-ellipsis md:w-6/12"
                value={activeNote.title}
                onChange={handleTitleChange}
              />
              <span className="text-lg text-gray-400">{activeNote.dateModified}</span>
            </div>
            <button className="p-2" onClick={handleFavoriteBtnClick}>
              {activeNote.isFavorite ? (
                <AiFillStar className="w-7 h-7" />
              ) : (
                <AiOutlineStar className="w-7 h-7" />
              )}
            </button>
          </div>
          <textarea
            className="w-full h-full mt-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Note..."
            value={activeNote.text}
            onChange={handleNoteTextChange}
          ></textarea>
        </div>
      )}
    </div>
  );
}
