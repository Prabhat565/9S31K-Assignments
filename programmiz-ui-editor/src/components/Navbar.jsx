import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

function Navbar() {
  return (
    <div className="flex bg-gray-400">
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
}

export default Navbar;
