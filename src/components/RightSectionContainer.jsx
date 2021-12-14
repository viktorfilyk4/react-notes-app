import React from "react";
import { useContext } from "react";
import { LayoutContext } from "../context";

function RightSectionWrapper({ children }) {
  const [isNoteWindowOpen] = useContext(LayoutContext);
  
  return (
    <div
      className={`absolute w-full z-20 bg-white md:block md:w-8/12 transition-all ease-out duration-700 shadow md:right-0 ${
        isNoteWindowOpen ? "right-0" : "-right-full"
      }`}
    >
      {children}
    </div>
  );
}

export default RightSectionWrapper;
