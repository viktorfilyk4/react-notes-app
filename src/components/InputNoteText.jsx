import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function InputNoteText() {

  const [isFavorite, setAsFavorite] = useState(false);

  const handleFavoriteBtnClick = () => {
    setAsFavorite(!isFavorite);
  };
  
  return (
    <div className="h-screen p-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-2">
          <input type="text" placeholder="Your title" className="w-full py-2 text-xl rounded-sm outline-none md:text-3xl focus:ring focus:border-gray-300" />
          <span className="text-lg text-gray-400">1/22/2016</span>
        </div>
        <button className="p-2" onClick={handleFavoriteBtnClick}>
        {isFavorite ? <AiFillStar className="w-7 h-7" /> : <AiOutlineStar className="w-7 h-7" />}
        </button>
      </div>
      <textarea className="w-full h-full mt-4 rounded focus:outline-none focus:ring focus:border-blue-300" placeholder="Note..."></textarea>
    </div>
  );
}
