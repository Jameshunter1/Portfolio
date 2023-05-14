// Importing necessary modules from external libraries
import { useState } from "react"; // for state management
import { SocialIcon } from "react-social-icons"; // for social icons
import { motion } from "framer-motion"; // for animations
import Link from "next/link"; // for client-side navigation
import { Social } from "../typings"; // custom typings for social media links
import { useMediaQuery } from "@material-ui/core"; // for responsive design

// Defining Props type for the Header component
type Props = {
  socials: Social[]; // an array of social media links
};

// Defining the Header component
function Header({ socials }: Props) {
  // Using a custom hook from the Material-UI library to check if screen is small
  const isSmallScreen = useMediaQuery("(max-width: 608px)");

  // Defining a state variable to toggle the mobile menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  // JSX for the links/buttons in the header
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
        <div
          className="flex flex-row items-center
         text-gray-300 cursor-pointer space-x-1 hover:bg-gray-800 rounded-full"
        >
          {/* Social Icon component from the react-social-icons library */}
          <SocialIcon
            className="cursor-pointer text-white hover:bg-gray-800 bg-gray-900 rounded-full w-8 h-8 md:w-10 md:h-10 shadow-md focus:outline-none"
            fgColor="white"
          />
        </div>
      </Link>
    </>
  );

  // JSX for the header component
  return (
    <header className="sticky top-0 p-3 flex justify-evenly">
      {/* JSX for social media icons */}
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
            {/* Hamburger icon */}
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
          {/* Mobile menu */}
          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" flex flex-col z-50 bg-gray-900 bg-opacity-50  justify-center items-center"
            >
              <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-5 rounded-lg"
              >
                {links}
              </motion.div>
            </motion.div>
          )}
        </div>
      ) : (
        // JSX for the desktop navigation
        <nav className="hidden md:flex md:space-x-8">{links}</nav>
      )}
    </header>
  );
}

export default Header;