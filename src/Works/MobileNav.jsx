import { BtnContext, BtnContextProvider } from "@/context/MobileBtn";
import React, { useContext } from "react";

function MobileNav() {
  const { isToggled, setIsToggled } = useContext(BtnContext);
  return <div></div>;
}

export default MobileNav;
