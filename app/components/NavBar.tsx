"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex_center justify-between py-4 px-10 2xl:max-w-[90vw] mx-auto">
      <Link href="" className="flex_center gap-2">
        <Image src="/assets/icons/logo.svg" width={30} height={30} alt="logo" />
        <span className="text-xl font-medium">UseForm</span>
      </Link>

      <ul
        className={`${
          toggle ? "block" : "hidden"
        } absolute top-[4.5rem] left-0 bg-white pb-3 px-10 border-b w-full md:flex md:sticky md:w-auto md:border-none gap-3 md:bg-transparent md:pb-0 md:px-0`}
      >
        <li className="font-normal text-md pb-2 md:pb-0 text-slate-800 hover:text-slate-500 transition-all">
          <Link href="#About" onClick={() => setToggle(false)}>
            About
          </Link>
        </li>
        <li className="font-normal text-md pb-2 md:pb-0 text-slate-800 hover:text-slate-500">
          <Link href="#Pricing" onClick={() => setToggle(false)}>
            Pricing
          </Link>
        </li>
      </ul>
      <button
        className="hamburger border rounded py-3 px-2 my-auto shadow cursor-pointer md:hidden"
        onClick={() => setToggle((prev) => !prev)}
      >
        <span className="w-6 h-0.5 bg-black block mb-1.5"></span>
        <span className="w-6 h-0.5 bg-black block mb-1.5"></span>
        <span className="w-6 h-0.5 bg-black block"></span>
      </button>
    </nav>
  );
};

export default NavBar;
