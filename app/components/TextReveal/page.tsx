"use client"
import { useState, useEffect } from "react";

const TextReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const revealTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => {
      clearTimeout(revealTimeout);
    };
  }, []);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold text-to-reveal ${
        isVisible ? "reveal-delay" : ""
      }`}
    >
      {isVisible ? "70121211 холбогдоно уу" : ""}
    </div>
  );
};

export default TextReveal;
