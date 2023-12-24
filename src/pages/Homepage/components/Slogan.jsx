import React from "react";
import img from "./assets/img.png";
function Slogan() {
  return (
    <div className="relative">
      <img src={img} alt="" className="w-screen h-fit" />
      <div className="text-white text-7xl font-extrabold tracking-wide absolute bottom-1/2 ml-8">
        Ideate
        <br />
        Design & Build
        <br />
        Get Things Done
      </div>
    </div>
  );
}

export default Slogan;
