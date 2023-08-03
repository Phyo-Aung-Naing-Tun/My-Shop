import React from "react";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
const BouncingArrow = () => {
  return (
    <div
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      className=" z-[9000] fixed bottom-16 right-3 inline-block text-4xl text-blue-400 animate-bounce  "
    >
      <PiArrowFatLinesUpFill />
    </div>
  );
};

export default BouncingArrow;
