import React from "react";

function LeftSectionWrapper({ children }) {
  console.log('LeftSectionWrapper is rendering');
  return <div className={`md:w-4/12 w-full ${false ? "" : ""}`}>{children}</div>;
}

export default LeftSectionWrapper;
