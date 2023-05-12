import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { useMediaQuery } from "@material-ui/core";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const isSmallScreen = useMediaQuery("(max-width: 608px)");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const links = (
    <>
      <Link href="#about">
        <button className="heroButton mb-5">
          About
        </button>
      </Link>
      <Link href="#skills">
        <button className="heroButton mb-5" >
          Skills
        </button>
      </Link>
      <Link href="#projects">
        <button className="heroButton mb-5" >
          Projects
        </button>
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 p-3 flex justify-evenly bg-secondary-light">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center space-x-1 md:space-x-4"
      >
        {/* Social Icons */}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="white"
            className="flex flex-col justify-between items-center w-6 h-6 md:w-10 md:h-10 bg-gray-900 rounded-full
            hover:scale-110
            cursor-pointer text-white  shadow-md hover:bg-gray-800 hover:rounded-full focus:outline-none "
          />
        ))}
      </motion.div>
      {isSmallScreen ? (
        <div className="flex justify-around items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex  items-center justify-center">{links}</div>
      )}
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="flex flex-row items-center
         text-gray-300 cursor-pointer space-x-1 hover:bg-gray-800 rounded-full"
        >
          <SocialIcon
            className="cursor-pointer text-white hover:bg-gray-800 bg-gray-900 rounded-full w-8 h-8 md:w-10 md:h-10 shadow-md focus:outline-none"
            fgColor="white"
      
          />
          <span className="hidden md:block">Contact</span>
        </motion.div>
      </Link>
     
      {/* Mobile menu */}
      {showMenu && (
        <div className="sm:hidden absolute  z-20   items-center space-y-5 bg-secondary-light justify-around mt-16">
          {links}
         
          
         
        </div>
      )}
    </header>
  );
}

export default Header;