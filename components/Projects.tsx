import React from 'react'
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"


type Props = {
projects:Project[]
}


function Project({ projects }: Props) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl mb-12'>
        Projects
      </h3>
     
        {/* Maps through the array of projects */}
          
{projects?.map((project, i) => {
  const isCurrentProject = i === currentProjectIndex;
  return (  
    <section key={project._id} style={{ display: isCurrentProject ? 'block' : 'none' }}>
      <AnimatePresence>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col  items-center justify-center p-20 md:p-44 h-screen">
        <button 
          className="animate-pulse left-20 absolute text-[50px] w-[50px] text-[#5572af] px-6" 
          onClick={() => currentProjectIndex > 0 && setCurrentProjectIndex (currentProjectIndex - 1)}>&#10094;
        </button>
        <motion.img src={urlFor(project?.image).url()} alt="" className='w-[350px] md:w-[500px] h-[200px] md:h-[400px] lg:h-[600px] pt-12  relative align-middle'/>
        <button className="animate-pulse absolute right-20 text-[50px] w-[50px] text-[#5572af] px-12" onClick={() => currentProjectIndex < projects.length - 1 && setCurrentProjectIndex(currentProjectIndex + 1)}>&#10095;</button>
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
          <h4 className='text-xl md:text-3xl font-semibold text-center pt-10'>
            <span className='underline decoration-[#5572af]/50'>Project {i + 1} of {projects.length}: </span>
            {project?.title}
          </h4>
          <div className='flex items-center  justify-center'>
            {project.technologies.map((technology) => (
              <Image className='h-10 w-10 px-2 rounded-full cursor-pointer'
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt=""
                width="40"
                height="40"
              />
            ))}
           
          </div>
        
          
          <p className='text-lg text-center md:text-left hidden lg:block'>{project.summary}</p>
<div className='flex justify-evenly'>
         <a href={project.url}>
          <button  className="w-[100px] md:w-[100px] h-[35px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Source
           </button>
            </a>
            <a href={project.url}>
          <button  className=" w-[100px] h-[35px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Live
           </button>
          </a>
</div>
        </div>
      
      </div>
  </AnimatePresence>
     </section>
  )
})}
    </motion.div>)
}
   

export default Project;
         
       