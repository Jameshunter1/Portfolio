import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex justify-between z-20 bg-[#5572af]/80 xl:justify-evenly">
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
        className="flex flex-row items-center space-x-4"
      >
        {/* Social Icons */}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="white"
            className="flex flex-col justify-between space-x-3
            hover:scale-110
            
            cursor-pointer text-white  shadow-md hover:bg-gray-800 hover:rounded-full focus:outline-none "
          />
        ))}
      </motion.div>
      <div className="flex flex-row justify-between space-x-4 pl-6 items-center">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>

        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
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
         text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 mr-3 focus:outline-none"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-white">
            {" "}
            Get in Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
