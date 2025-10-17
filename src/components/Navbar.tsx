"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "@/types";

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const links: NavLinks[] = [
    { label: "About Us", url: "/about" },
    { label: "Designs", url: "/designs" },
    { label: "Academy", url: "/academy" },
    { label: "Contact Us", url: "/contact" },
  ];

  const navList = (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 text-[15px]">
      {links.map((item) => (
        <Link
          href={item.url}
          key={item.label}
          className="block px-4 py-2.5 text-gray-700 hover:text-purple-700"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <div
      className={`sticky top-0 z-50 ${
        scrolled ? "bg-white border-b border-b-[#ddd]" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
        <a href="/">
          <img
            src="/m30-logo.svg"
            alt="Logo"
            height="436"
            width="566"
            className="w-16"
          />
        </a>
        <div className="mr-4 hidden xl:block">{navList}</div>

        <button
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-7 w-7 text-primary-400"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`bg-white fixed z-50 top-[73px] right-0 w-full h-full px-6 md:px-12 overflow-hidden transform transition-transform duration-700 ease-in-out border-y border-y-[#eee] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navList}
      </div>
    </div>
  );
}
