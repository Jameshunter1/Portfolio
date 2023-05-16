import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
  isSmallScreen: boolean;
  toggleMenu: () => void;
  showMenu: boolean;
};

function Header({ socials , toggleMenu, showMenu}: Props) {
 
  const links = (
    <>
      <Link href="#about">
        <button className="heroButton ">About</button>
      </Link>
      <Link href="#skills">
        <button className="heroButton">Skills</button>
      </Link>
      <Link href="#projects">
        <button className="heroButton ">Projects</button>
      </Link>
      <Link href="#contact">
        <button className="flex flex-row text-gray-300 cursor-pointer space-x-5 hover:bg-gray-800 rounded-full items-center h-[40px]">
          <SocialIcon
            network="email"
            fgColor="white"
            className=" bg-gray-900 rounded-full
            hover:scale-110 cursor-pointer text-white  shadow-md hover:bg-gray-800"
          />

          <span className="pr-5 items-center flex justify-center" >Contact</span>
        </button>
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 p-3 flex justify-around z-10 items-center">
      <div className="flex flex-row space-x-4 pl-5">
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="white"
            className="flex flex-col justify-between bg-gray-900 rounded-full
            hover:scale-110 cursor-pointer text-white  shadow-md hover:bg-gray-800 hover:rounded-full focus:outline-none "
          />
        ))}
      </div>

      <div className="hidden md:block">
        <nav className="flex space-x-8 ">{links}</nav>
      </div>

      <div className="md:hidden pr-5">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {showMenu && (
          <div className="absolute top-16 right-10 z-50 bg-gray-900 text-white rounded-xl">
            <nav className="flex flex-col space-y-4 p-4">{links}</nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
