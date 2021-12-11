import React from "react";

export default function Layout({ children }) {
  return (
    <div
      className={`relative flex w-screen h-screen overflow-hidden md:flex ${
        false ? "overflow-y-hidden" : ""
      }`}
    >
      {children}
    </div>
  );
}
