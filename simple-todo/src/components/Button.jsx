import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ state, children, onClick, className }) {
  const [bgColorCode, setBgColorCode] = useState("#4886FF");

  useEffect(() => {
    if (state === "danger") {
      setBgColorCode("#FF5E48");
    } else if (state === "success") {
      setBgColorCode("#68BA00");
    }
  }, [state]);

  return (
    <div
      className={twMerge(
        `bg-[${bgColorCode}] px-6 py-3 inline-block rounded-lg cursor-pointer`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
