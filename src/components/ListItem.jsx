import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export default function ListItem({ handleClick }) {
  return (
    <button className="flex justify-between w-screen px-4 pt-6 pb-3 border-gray-300" onClick={handleClick}>
      <div className="w-11/12 text-left">
        <h4 className="text-xl font-bold">Tasks for this week</h4>
        <p className="inline-block w-11/12 overflow-hidden whitespace-nowrap overflow-ellipsis">#home ### Sunday * [] Go to the gr #home ### Sunday * [] Go to the gr</p>
      </div>
      <button className="flex justify-end w-1/12">
        <AiOutlineStar className="w-5 h-5" />
      </button>
    </button>
  );
}
