import React from "react";

function RightSectionWrapper({ children }) {
  return (
    <div
      className={`absolute w-full z-20 bg-white md:block md:w-8/12 transition-all ease-out duration-700 shadow md:right-0 ${
        !false ? "-right-full" : "right-0"
      }`}
    >
      {children}
    </div>
  );
}

export default RightSectionWrapper;
