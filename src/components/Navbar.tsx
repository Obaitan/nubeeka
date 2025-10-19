"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/lib/resources";

import { usePathname } from "next/navigation";

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navList = (
    <div className="flex flex-col lg:flex-row gap-7 lg:gap-16 text-base">
      {links.map((item) => (
        <Link
          href={item.url}
          key={item.label}
          className={`relative group font-medium hover:text-primary hoverEffect ${
            pathname === item.url ? "text-primary" : "text-gray-700"
          }`}
        >
          {item.label}
          <span
            className={`hidden lg:block absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#137804] hoverEffect group-hover:w-1/2 group-hover:left-0 ${
              pathname === item.url && "w-1/2"
            }`}
          />
          <span
            className={`hidden lg:block absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#137804] hoverEffect group-hover:w-1/2 group-hover:right-0 ${
              pathname === item.url && "w-1/2"
            }`}
          />
        </Link>
      ))}
      <Link
        href="mailto:"
        target="_blank"
        className="relative group font-medium text-primary"
      >
        Contact Us
      </Link>
    </div>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white border-b border-b-[#ddd]" : "bg-background"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 md:py-3.5 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:[1240px] mx-auto">
        <Link href="/">
          <Image
            src="/brand/nubeeka.png"
            alt="Logo"
            height={209}
            width={285}
            className="w-20 lg:w-28"
          />
        </Link>
        <div className="mr-4 hidden lg:block">{navList}</div>

        <button
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
