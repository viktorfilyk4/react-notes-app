import React from "react";

export default function CommonButton({ IconComponent, title }) {
  return (
    <button
      className={`flex items-center justify-between gap-2 px-2 py-2 bg-gray-100 rounded transition-all ${
        title === "delete" ? "hover:bg-red-600 hover:text-white" : "hover:bg-gray-300"
      }`}
    >
      {IconComponent}
      <span className="capitalize">{title}</span>
    </button>
  );
}
