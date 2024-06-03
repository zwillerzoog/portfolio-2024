"use client";
import React from "react";

import Link from "next/link";
import Contact from "../components/contact";

export default function Header() {
  return (
    <>
     
      <div className="w-screen md:fixed box-shadow z-20 md:bg-greyLight grid md:grid-cols-3 md:items-center items-end justify-items-center md:justify-items-normal md:min-h-[100px] top-0 h-[80px]">
        <div className=" md:block"></div>
        <div className=" flex m-auto items-center md:inline-block">
          <Link href="/" className="m-2 color-hover w-[85px]">
            About Me
          </Link>
          <Link href="/experience" className="m-2 color-hover  w-[85px]">
            Experience
          </Link>
          {/* ToDo: Add Resume page <Link href="/resume" className="m-2 color-hover">
            Resume
          </Link> */}
        </div>
        <div className="right-0 m-2 color-hover ">
          <Contact />
        </div>
      </div>
    </>
  );
}
