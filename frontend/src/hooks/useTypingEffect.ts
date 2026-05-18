"use client";

import { useState, useEffect } from "react";

export const useTypingEffect = (text: string, speed: number = 100): string => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    setDisplayedText("");
    if (text) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prevState) => prevState + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [text, speed]);

  return displayedText;
};
