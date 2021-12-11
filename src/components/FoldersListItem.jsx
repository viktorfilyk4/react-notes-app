import React from "react";

export default function FoldersListItem({ IconComponent, title }) {
  return (
    <button className="flex items-center justify-start w-full gap-4 px-6 py-4 transition-all border-b border-gray-200 hover:bg-teal-600 hover:text-white">
      {IconComponent}
      <h3 className="">{title}</h3>
    </button>
  );
}
