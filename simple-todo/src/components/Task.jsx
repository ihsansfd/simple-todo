import React from "react";
import { useState, useEffect } from "react";
import CheckSvg from "../assets/check.svg?react";

export default function Task({
  id,
  title,
  datelineDateTime,
  onSelect,
  onUnselect,
}) {
  const [remainingHours, setRemainingHours] = useState(null);
  const [isCheckShown, setIsCheckShown] = useState(false);

  const onCheckContainerClick = () => {
    setIsCheckShown(!isCheckShown);

    const updatedIsCheckShown = !isCheckShown;

    updatedIsCheckShown && onSelect(id);
    !updatedIsCheckShown && onUnselect(id);

    console.log(isCheckShown);
  };

  useEffect(() => {
    const remainingHours = getRemainingHours(datelineDateTime);
    setRemainingHours(remainingHours);
  }, [datelineDateTime]);

  const getRemainingHours = (datelineDateTime) => {
    const now = new Date();
    const dateline = new Date(datelineDateTime);

    const diffInMilliseconds = dateline - now;
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));

    return diffInHours;
  };

  return (
    <div className="py-5 px-7 border-white border rounded-lg flex items-center">
      <div
        className="rounded-md border-white border p-1 mr-6 cursor-pointer w-7 h-7 flex justify-center items-center"
        onClick={onCheckContainerClick}
      >
        {isCheckShown && <CheckSvg />}
      </div>
      <div className="font-medium">{title}</div>
      {remainingHours && (
        <div className="ml-auto">{`${remainingHours} hours remaining`}</div>
      )}
    </div>
  );
}
