import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export default function InputNoteText() {
  return (
    <div className="h-screen p-4">
      <div className="flex justify-between">
        <div className="flex items-end gap-3 ">
          <input type="text" placeholder="Title" className="w-5/12 text-3xl font-bold outline-none" />
          <span className="text-lg text-gray-400">1/22/2016</span>
        </div>
        <button>
          <AiOutlineStar className="w-5 h-5" />
        </button>
      </div>
      <textarea className="w-full h-full mt-4"></textarea>
    </div>
  );
}
