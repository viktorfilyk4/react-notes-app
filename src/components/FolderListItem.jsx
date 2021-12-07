import React from "react";

export default function FolderListItem({ IconComponent, title }) {
  return (
    <button className="flex items-center justify-start w-full gap-4 px-6 py-4 border-b border-gray-200">
      {IconComponent}
      <h3>{title}</h3>
    </button>
  );
}
