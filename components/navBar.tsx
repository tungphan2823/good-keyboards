"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  items-center  p-8  text-black  top-0  sticky font-Cairo border-b-2 border-slate-800 backdrop-blur-lg z-10">
      <div className="block md:hidden ml-auto pl-4 my-auto cursor-pointer">
        <div
          className={isOpen ? "group peer open" : "group peer"}
          id="mobile-menu-button "
          onClick={toggleMenu}
        >
          {" "}
          <div className="bg-black rounded-full w-8 h-1 group-open:rotate-45 group-open:top-2 relative transition-all top-0"></div>
          <div className="bg-black rounded-full w-8 h-1 mt-1 group-open:opacity-0 opacity-100 transition-all"></div>
          <div className="bg-black rounded-full w-8 h-1 mt-1 group-open:-rotate-45 transition-all group-open:-top-2 relative top-0"></div>
        </div>
        <div className="absolute top-[100px] bg-zinc-900 w-full left-0 peer-open:block hidden">
          <div className="relative flex justify-center h-full cursor-pointer items-center p-4 font font-Cairo text-white hover:bg-zinc-800">
            <span>
              <Link href="/">Home</Link>
            </span>
          </div>
          <div className="relative flex justify-center h-full cursor-pointer items-center p-4 font font-Cairo text-white hover:bg-zinc-800">
            <span><Link href="/keyboards">Keyboards</Link></span>
          </div>
          <div className="relative flex justify-center h-full cursor-pointer items-center p-4 font font-Cairo text-white hover:bg-zinc-800">
            <span>Accessories</span>
          </div>
          <div className="relative flex justify-center h-full cursor-pointer items-center p-4 font font-Cairo text-white hover:bg-zinc-800">
            <span>About</span>
          </div>
        </div>
      </div>
      <div className="md:flex hidden gap-8 text-xl cursor-pointer">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/keyboards">Keyboards</Link>
        </div>
        <div>Accessories</div>
        <div>About</div>
      </div>
      <div className="flex justify-end flex-1 text-3xl">GoodSwitch * </div>
    </div>
  );
}
