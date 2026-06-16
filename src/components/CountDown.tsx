"use client"
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("2026-09-17");

  const getTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      s: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // ✅ empty dependency array

  const { d, h, m, s } = timeLeft;

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default CountDown;