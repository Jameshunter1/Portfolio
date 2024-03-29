import {motion} from "framer-motion"
import React,  { useState } from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
  directionLeft: boolean;
  description: string;
  title: string;
};

function Skills({ skills, directionLeft }: Props) {
  const [selectedSkill, setSelectedSkill] = useState(null as SkillType | null);

  const handleClick = (skill: SkillType) => {
    setSelectedSkill(skill);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex flex-col text-center items-center justify-center "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center ">
        Skills
      </h3>

      <h3 className="flex my-[50px]">
        Click on skill for a short description of it!
      </h3>

      {/* Skills Descriptions Modal */}

      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center z-10"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            className="w-[400px] bg-white p-6 rounded text-center  transition-all duration-300 "
            style={{ boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.2)" }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-[#5572af] font-semibold">
              {selectedSkill.title}
            </h2>
            <p className="text-[#5572af]">{selectedSkill.description}</p>
            <button
              className="mt-4 p-3 bg-gray-800 text-white rounded"
              onClick={() => setSelectedSkill(null)}
              style={{ backgroundColor: "#5572af" }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
      
      {/* Skills Grid */}

      <motion.div
        className="grid grid-cols-4  gap-4 sm:gap-6 "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.5 },
          },
        }}
      >
        {skills?.map((skill) => (
          <motion.div
            key={skill._id}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(skill)}
          >
            <Skill
              key={skill._id}
              skill={skill}
              onClick={() => handleClick(skill)}
              directionLeft={directionLeft}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;