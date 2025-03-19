"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CountdownTimerProps {
  endDate: Date;
  className?: string;
}

function calculateTimeLeft(endDate: Date) {
  const difference = endDate.getTime() - new Date().getTime();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

const unitLabels: { [key: string]: string } = {
  days: "Days",
  hours: "Hours",
  minutes: "Mins",
  seconds: "Secs",
};

export default function Countdown({ endDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endDate);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className={twMerge("flex gap-5 flex-wrap", className)}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col px-4 py-2.5 rounded-md items-center border border-gray"
        >
          <span className="countdown text-2xl font-bold">{value}</span>
          <span>{unitLabels[unit]}</span>
        </div>
      ))}
    </div>
  );
}
