import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export default function ListItem({ handleClick }) {
  const [isFavorite, setAsFavorite] = useState(false);

  const handleFavoriteBtnClick = (e) => {
    e.stopPropagation();
    setAsFavorite(!isFavorite);
  };

  return (
    <div
      className="flex items-baseline justify-between w-full px-5 pt-5 pb-3 pr-3 transition-all border-b border-gray-200 cursor-pointer hover:bg-teal-600 group"
      onClick={handleClick}
    >
      <div className="w-11/12 text-left">
        <h4 className="text-xl font-medium group-hover:text-white">Tasks for this week</h4>
        <p className="inline-block w-11/12 overflow-hidden text-gray-600 whitespace-nowrap overflow-ellipsis hover:text-current group-hover:text-white">
          #home ### Sunday * [] Go to the gr #home ### Sunday * [] Go to the gr
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
