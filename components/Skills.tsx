import { motion } from "framer-motion";
import React, { useState } from "react";
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
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-5">
        Skills
      </h3>
      <h3 className="grid pb-4 ">
        {" "}
        Click on skill for a short description of it!
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills?.map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            onClick={() => handleClick(skill)}
            directionLeft={directionLeft}
          />
        ))}
      </div>

      {selectedSkill && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="bg-white p-4 rounded max-w-lg mx-auto text-center z-10 transition-shadow duration-300"
            style={{ boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[#5572af] font-semibold">
              {selectedSkill.title}
            </h2>
            <p style={{ color: "#5572af" }}>{selectedSkill.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
              onClick={() => setSelectedSkill(null)}
              style={{ backgroundColor: "#5572af" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
export default Skills;
