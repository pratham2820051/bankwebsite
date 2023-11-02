import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SchemeOption({ img, title, desc }) {
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 cursor-pointer">
      <div
        className="relative"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img src={img} className="w-full" alt="" />
        <div
          className={`px-3 max-w-[342px] w-full text-center h-[200px bg-gradient-to-b from-neutral-600 to-black text-white flex flex-col items-center justify-center absolute bottom-0 ${
            show ? "opacity-90" : "opacity-0"
          } ${show ? "h-[200px]" : "h-0"} duration-300`}
        >
          {desc}
        </div>
      </div>
      <div className="py-1 font-semibold text-center uppercase ">{title}</div>
    </div>
  );
}

export default SchemeOption;
