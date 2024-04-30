import { useEffect, useState } from "react";

import headshot from "../assets/headshot_pic.jpeg";

export default function AboutMe() {
  const [showIntiial, setInitial] = useState(true);
  const [newClassName, setClassName] = useState(" center-large");

  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 2000);
  });

  let assignedClass = showIntiial ? "hidden" : "fade-in";

  return (
    <div
       className={"m-auto w-full" + assignedClass}
      id="about"
    >
      <div className="max-w-xl m-auto">
        <img className="headshot" src={headshot.src} alt="Heidi headshot" />
        <p className="about">
          Hi! I'm Heidi. I'm a Frontend Engineer with a passion for frontend and
          design. I have 6 years of experience in the government space where I
          make accessible, and user-friendly React websites. <br /> <br />
          In my freetime, you can find me taking a walk in a cool neighborhood
          or trying a new restaurant. I have a dog named Dr. McTodd and 2
          rabbits, Tully and Suki.
        </p>
        <p className="about2"></p>
      </div>
    </div>
  );
}
