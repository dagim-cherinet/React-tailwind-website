import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleBtn = () => setDropdown(!dropdown);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full ">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign in
          </button>
          <button className="px-6 py-2">Sign up</button>
        </div>
        {/* dropdown menu */}
        <div className="md:hidden" onClick={toggleBtn}>
          {!dropdown ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={!dropdown ? "hidden" : " absolute bg-inherit px-8  w-full"}
      >
        <li className="border-b-2 border-zinc-300 w-full ">Home</li>
        <li className="border-b-2 border-zinc-300 w-full ">About</li>
        <li className="border-b-2 border-zinc-300 w-full ">Support</li>
        <li className="border-b-2 border-zinc-300 w-full ">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full ">Pricing</li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-black px-6 py-2 mb-4">
            Sign in
          </button>
          <button className="px-6 py-2">Sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
