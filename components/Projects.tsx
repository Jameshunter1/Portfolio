import React from "react";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  projects: Project[];
};

function Project({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Projects
      </h3>

      {/* Maps through the array of projects */}
      <div className="grid-container grid grid-cols-4 gap-4">
        {projects?.map((project, i) => {
          return (
            <section key={project._id}>
              <AnimatePresence>
                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="image"
                    src={urlFor(project?.image).url()}
                    alt=""
                    width="300"
                    height="200"
                  />

                  <div className="space-y-3 md:px-10 max-w-6xl">
                    <h4 className="text-lg  font-semibold text-center">
                     
                      {project?.title}
                    </h4>
                    <div className="flex items-center justify-center">
                      {project.technologies.map((technology) => (
                        <Image
                          className="h-10 w-10 rounded-full cursor-pointer"
                          key={technology._id}
                          src={urlFor(technology.image).url()}
                          alt=""
                          width="40"
                          height="40"
                        />
                      ))}
                    </div>

                    <p className="text-lg text-center md:text-left hidden lg:block">
                      {project.summary}
                    </p>
                    <div className="flex justify-evenly">
                      <a href={project.url}>
                        <button className="w-[100px]  h-[35px] text-whitebg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                          Visit Site
                        </button>
                        <button className="w-[100px]  h-[35px] text-whitebg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                          Source
                        </button>
                      </a>
                      <a href={project.url}></a>
                    </div>
                  </div>
                </div>
              </AnimatePresence>
            </section>
          );
        })}
        
      </div>
      
    </motion.div>
  );
}

export default Project;
