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
      className="h-screen grid text-center md:text-left  p-10  mx-auto  max-w-fit"

    >
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Projects
      </h3>

      {/* Maps through the array of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  justify-center">
        {projects?.map((project, i) => {
          return (
            <section key={project._id}>
              <AnimatePresence>
                <div className=" grid justify-center p-2 border border-white mx-auto">
                  <Image
                    className="image"
                    src={urlFor(project?.image).url()}
                    alt=""
                  
                    width="300px"
                    height="250px"
                    

                   
                  />

                  <div className="space-y-7 max-w-6xl">
                    <h4 className="text-lg font-semibold text-center">
                      {project?.title}
                    </h4>
                    <div className="flex items-center justify-around">
                      {project.technologies.map((technology) => (
                        <Image
                          className="rounded-full cursor-pointer space-x-4"
                          key={technology._id}
                          src={urlFor(technology.image).url()}
                          alt=""
                          width="20"
                          height="20"
                        />
                      ))}
                    </div>

                    <p className="text-lg text-center md:text-left hidden lg:block">
                      {project.summary}
                    </p>
                    <div className="flex justify-around">
                      <a href={project.url}>
                        <button className="w-[100px]  h-[35px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none mr-2">
                          Visit Site
                        </button>
                        <button className="w-[100px]  h-[35px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none ml-2 ">
                          Source
                        </button>
                      </a>
                    
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
