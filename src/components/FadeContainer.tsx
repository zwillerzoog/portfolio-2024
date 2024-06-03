"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import headshot from "../../public/headshot_2024.jpg";
import "../styles/About.css";

export default function AboutMe({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [showIntiial, setInitial] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 2400);
  });

  let assignedClass = showIntiial ? "hidden" : "fade-in";

  return <div className={assignedClass + " w-full"}>{children}</div>;
}
