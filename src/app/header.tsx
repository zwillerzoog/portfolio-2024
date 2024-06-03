"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Contact from "../components/contact";
import SiteTitle from "../components/SiteTitle";
import usePrevious from "@/hooks/usePrevious";

export default function Header(props: any) {
  const [showInitial, setInitial] = useState(true);
  const [animationClass, setAnimationClass] = useState("");

  const prevShow = usePrevious(showInitial);

  useEffect(() => {
    if (prevShow !== showInitial) {
      setTimeout(() => {
        setInitial(false);
        setAnimationClass("fade-in-box");
      }, 3500);
      setAnimationClass("");
    }
  }, [showInitial, prevShow]);

  const displayMobile = () => {
    const showInitialProps = {
      showInitial: props.showInitial,
    };

    return (
      <>
        <SiteTitle {...showInitialProps} />
        {!showInitial && (
          <div
            className={
              "w-screen fixed box-shadow z-20 bg-greyLight grid md:grid-cols-3 items-center justify-items-center md:justify-items-normal md:min-h-[100px] " +
              animationClass
            }
          >
            <div className="hidden md:block"></div>
            <div className="hidden flex m-auto items-center md:inline-block">
              <Link href="/" className="m-2 color-hover">
                About Me
              </Link>
              <Link href="/experience" className="m-2 color-hover">
                Experience
              </Link>
            </div>
            <div className="right-0 m-2 color-hover ">
              <Contact />
            </div>
          </div>
        )}
      </>
    );
  };

  return displayMobile();
}
