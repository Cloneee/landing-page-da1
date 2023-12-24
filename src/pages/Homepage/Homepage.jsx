import React from "react";
import Slogan from "./components/Slogan.jsx";
import Value from "./components/Value.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Life from "./components/Life.jsx";

function Homepage() {
  return (
    <div>
      <Slogan />
      <div className="flex flex-col gap-16 my-32">
        <Value />
        <Portfolio />
        <Life />
      </div>
    </div>
  );
}

export default Homepage;
