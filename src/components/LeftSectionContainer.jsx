import React from "react";

function LeftSectionWrapper({ children }) {
  return <div className={`md:w-4/12 w-full ${false ? "" : ""}`}>{children}</div>;
}

export default LeftSectionWrapper;
