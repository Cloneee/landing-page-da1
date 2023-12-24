import React from "react";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <div className="bg-black h-24 text-white flex p-8 items-center">
      <div className="flex-1">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-8 items-center">
        <a href="#" className="h-fit">
          Service
        </a>
        <a href="#" className="h-fit">
          Portfolio
        </a>
        <a href="#" className="h-fit">
          Contact
        </a>
        <a href="#" className="h-fit">
          About
        </a>
        <button
          className="py-2 px-8 rounded-tl-lg rounded-tr-none font-bold text-black"
          style={{
            borderRadius: "12px 0px",
            background:
              "linear-gradient(132deg, #33BFFD 6.64%, #D7F51B 84.47%)",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
