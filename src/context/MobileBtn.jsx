"use client"; // Mark this file as a client component
import React, { createContext, useState } from "react";

export const BtnContext = createContext(); // Create the context

const MobileBtn = ({ children }) => {
  // Ensure children prop is defined
  const [isToggled, setIsToggled] = useState(false); // Default state
  return (
    <BtnContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </BtnContext.Provider>
  );
};

export default MobileBtn;
