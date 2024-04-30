"use client";
import React, {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";

const TimerContext = createContext(true);

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export default function Timer({ children, ...props }: Props) {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  });

  // return (
  //   <TimerContext.Provider value={timer}>
  //     <Timer />
  //   </TimerContext.Provider>
  // );

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        setTimer,
      });
    } else {
      return child;
    }
  });

  return <>{childrenWithProps}</>;
}
