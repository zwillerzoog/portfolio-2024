"use client";
import About from "../components/About";
import Work from "../components/work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./page.css";

export default function Home() {
  return (
    <div className="absolute bottom-1/3 left-0 right-0">
      <div className="m-auto w-full pr-5 pl-5">
        <About />
      </div>
    </div>
  );
}
