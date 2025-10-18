"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const ScrollToTopComponent = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 450) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  });

  return (
    <button
      className={`focus:outline-0 bg-primary fixed bottom-20 right-0 z-40 flex h-10 w-10 items-center justify-center rounded-l text-white shadow-md outline-0 transition duration-1000 ease-in-out hover:opacity-80 md:bottom-[482px] xl:bottom-[325px] cursor-pointer ${
        visible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
