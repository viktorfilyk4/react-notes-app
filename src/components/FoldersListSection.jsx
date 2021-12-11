import React from "react";
import { FiFolder } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import FoldersListItem from "./FoldersListItem";

function FoldersListSection() {
  return (
    <div
      className={`absolute flex flex-col items-start w-full h-full transition-all ease-out shadow duration-700 bg-white z-10 ${
        !false ? "-left-full" : "left-0"
      }`}
    >
      <FoldersListItem title="All notes" IconComponent={<FiFolder className="w-5 h-5" />} />
      <FoldersListItem title="Favorites" IconComponent={<AiOutlineStar className="w-5 h-5" />} />
    </div>
  );
}

export default FoldersListSection;
