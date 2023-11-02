import React from "react";
import { NavLink } from "react-router-dom";

function Banner2() {
  return (
    <div className="my-20">
      <div className="max-w-[1000px] m-auto flex flex-col-reverse md:flex-row items-start justify-between">
        <div className="md:w-[55% lg:w-[65%] py-5 md:pr-10 text-start md:border-r-2 border-[red] leading-7 xl:leading-8 space-y-5">
          <div>
            To encourage and afford all facilities for cultivating thrift,
            savings habits and to Render all financial assistance to its members
            only by receiving long and short term Deposits.
          </div>
          <div className="flex justify-end">
            <NavLink
              to={"/about/vision"}
              className="p-2 text-sm text-white duration-300 bg-black rounded-md cursor-pointer max-w-max bg-opacity- hover:scale-105"
            >
              READ MORE
            </NavLink>
          </div>
        </div>

        <div className="py-5 xl:py-10 text-[28px] md:text-[30px] xl:text-[30px] font-bold md:w-[33%] border-b-2 md:border-b-0 border-[red]">
          VISION <span className="text-[red]">&</span> MISSION
        </div>
      </div>
    </div>
  );
}

export default Banner2;
