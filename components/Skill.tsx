import { motion } from "framer-motion";
import React from "react";

import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  onClick: () => void;
  directionLeft: boolean;
};

function Skill({ skill, onClick }: Props) {
  return (
    <div
      className="cursor-pointer text-center flex items-center"
      onClick={onClick}
    >
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        src={urlFor(skill?.image).url()}
        className="border border-gray-500 object-cover w-14 h-14 md:w-88 md:h-88 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out rounded-full"
      />
    </div>
  );
}
export default Skill;
