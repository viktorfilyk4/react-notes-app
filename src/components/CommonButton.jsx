import React from "react";
import { BsFillPencilFill } from "react-icons/bs";

export default function CommonButton({ IconComponent, title }) {
  return (
    <button className="flex items-center justify-between gap-2 px-2 py-2 bg-gray-100 rounded">
      {IconComponent}
      <span>{title}</span>
    </button>
  );
}
