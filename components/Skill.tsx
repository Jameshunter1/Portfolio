import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center">
      <motion.img
        initial={{
          x: directionLeft ? 200 : -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border  border-gray-500 object-cover w-[30px] h-[30px] md:w-[64px] md:h-[64px] xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute  w-[4rem] h-[4rem] md:w-24 md:h-24 xl:w-30 xl:h-30 rounded-full z-0"></div>{" "}
      <p className="text-sm font-medium text-white disp">{skill.description}</p>
    </div>
  );
}
export default Skill;
