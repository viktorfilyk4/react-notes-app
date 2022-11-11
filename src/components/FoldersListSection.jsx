import React, {useContext} from "react";
import { FiFolder } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import FoldersListItem from "./FoldersListItem";
import { FoldersContext } from "../context";
import folderNames from "../folderNames";

function FoldersListSection({}) {
  const [isFoldersSectionOpen] = useContext(FoldersContext);
  
  return (
    <div
      className={`absolute flex flex-col items-start w-full h-full transition-all ease-out shadow duration-700 bg-white z-10 ${
        isFoldersSectionOpen ? "left-0" : "-left-full"
      }`}
    >
      <FoldersListItem title={folderNames.all} IconComponent={<FiFolder className="w-5 h-5" />} />
      <FoldersListItem title={folderNames.favorites} IconComponent={<AiOutlineStar className="w-5 h-5" />} />
    </div>
  );
}

export default FoldersListSection;
