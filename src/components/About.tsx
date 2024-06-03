"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import headshot from "../../public/headshot_2024.jpg";
import "../styles/About.css";

export default function AboutMe() {
  const [showIntiial, setInitial] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 3000);
  });

  let assignedClass = showIntiial ? "hidden" : "fade-in";

  return (
    <div className={"m-auto w-full mt-12 "} id="about">
      <div className="max-w-xl m-auto">
        <Image
          className="headshot circular m-auto mb-10"
          src={headshot.src}
          alt="Heidi headshot"
          width="100"
          height="100"
        />
        <p className="about text-sm md:text-base">
          Hi! I'm Heidi. I'm a Frontend Engineer with a passion for frontend and
          design. I have 6 years of experience in the government space where I
          make accessible, and user-friendly React websites. <br /> <br /> In my
          freetime, you can find me taking a walk in a cool neighborhood or
          trying a new restaurant. I have a dog named Dr. McTodd and 2 rabbits,
          Tully and Suki.
        </p>
        <p className="about2"></p>
      </div>
    </div>
  );
}
