"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import About from "../components/About";
import Work from "../components/work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./page.css";
import "./about/about.css";

export default function Home(props: any) {
  const [showIntiial, setInitial] = useState(true);
  const router = usePathname();
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 3500);
  });

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      {!showIntiial && (
        <>
          <div className="fade-in m-auto w-full absolute md:top-[100px] top-[125px] md:bottom-[95px] bottom-[70px] overflow-y-auto pr-5 pl-5">
            <About />
            <a
              href="#experience"
              className="center m-auto inline-block md:hidden w-full overflow-hidden"
            >
              <FontAwesomeIcon
                icon={faAngleDown}
                size="lg"
                className="center m-auto w-full fa-beat-hover overflow-hidden"
              />
            </a>
            <Work />
          </div>
          {/* <div id="content" className="fade-in" /> */}
        </>
      )}
    </div>
  );
}
