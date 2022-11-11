import React, { useContext } from "react";
import { NotesContext, FoldersContext } from "../context";

export default function FoldersListItem({ IconComponent, title }) {
  const [showNotesOfFolder, setShowNotesOfFolder] = useContext(NotesContext);
  const [isFoldersSectionOpen, setFoldersSectionOpen] = useContext(FoldersContext);

  const handleClick = (title) => {
    setShowNotesOfFolder(title);
    setFoldersSectionOpen(!isFoldersSectionOpen);
  };

  return (
    <button
      className="flex items-center justify-start w-full gap-4 px-6 py-4 transition-all border-b border-gray-200 hover:bg-teal-600 hover:text-white"
      onClick={() => handleClick(title)}
    >
      {IconComponent}
      <h3>{title}</h3>
    </button>
  );
}
