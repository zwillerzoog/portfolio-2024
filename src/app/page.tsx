"use client";
import { useState, useEffect } from "react";
import About from "../components/About";
import Work from "../components/work";
import "./page.css";
import "./about/about.css";
export default function Home(props: any) {
  const [showIntiial, setInitial] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 2000);
  });
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      {!showIntiial && (
        <>
          <div className="fade-in m-auto w-full absolute top-[98px] bottom-[95px] overflow-y-auto pr-5 pl-5">
            <About />
            <Work />
          </div>
          {/* <div id="content" className="fade-in" /> */}
        </>
      )}
    </div>
  );
}
