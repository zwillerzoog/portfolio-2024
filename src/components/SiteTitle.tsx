"use client";
import { useEffect, useState } from "react";

export default function SiteTitle(props: any) {
  const [showInitial, setInitial] = useState(true);
  const [newClassName, setClassName] = useState(" center-large");

  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 500);
  });

  useEffect(() => {
    console.log("initial", props.showInitial);
    creatWrapperClassName();
  }, [showInitial]);

  const creatWrapperClassName = () => {
    if (!showInitial) {
      setClassName(" absolute move-top-left top-0 bottom-0 left-0 right-0 z-50");
    }
  };
  return (
    <div className={"m-4 text-center w-fit h-fit inline-block" + newClassName}>
      <h1 className="text-4xl font-semibold w-fit m-auto">HEIDI MARSH</h1>
      <h2 className="text-lg font-medium uppercase">Frontend Engineer</h2>
    </div>
  );
}
