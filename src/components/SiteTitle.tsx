"use client";
import { useEffect, useState, useCallback } from "react";

export default function SiteTitle(props: any) {
  const [newClassName, setClassName] = useState(" center-large");

  const creatWrapperClassName = useCallback(() => {
    if (!props.showInitial) {
      setClassName(
        " md:absolute move-top-left top-0 bottom-0 left-4 right-0 z-50"
      );
    }
  }, [props.showInitial]);

  useEffect(() => {
    creatWrapperClassName();
  }, [creatWrapperClassName]);

  return (
    <div
      className={
        "md:my-4 mt-4 text-center md:w-fit w-full h-fit inline-block md:min-w-[240px] " +
        newClassName
      }
    >
      <h1 className="text-4xl font-semibold w-fit m-auto">HEIDI MARSH</h1>
      <h2 className="text-lg font-medium uppercase">Frontend Engineer</h2>
    </div>
  );
}
