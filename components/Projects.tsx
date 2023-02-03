import React from 'react'
import {motion }from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import {useState} from"react"
import Link from 'next/link';


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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
     
        {/* Maps through the array of projects */}
        
{projects?.map((project, i) => {
  const isCurrentProject = i === currentProjectIndex;
  return (  
    <section key={project._id} style={{ display: isCurrentProject ? 'block' : 'none' }}>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col  items-center justify-center p-20 md:p-44 h-screen">
        <button 
          className="absolute left-0 text-[50px] w-[200px] text-blue-500 " 
          onClick={() => currentProjectIndex > 0 && setCurrentProjectIndex (currentProjectIndex - 1)}>&#10094;
        </button>
        <motion.img src={urlFor(project?.image).url()} alt="" className='w:hidden w-[400px] mb-10'/>
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
          <h4 className='text-xl md:text-3xl font-semibold text-center pt-10'>
            <span className='underline decoration-[#5572af]/50'>Project {i + 1} of {projects.length}: </span>
            {project?.title}
          </h4>
          <div className='flex items-center  justify-center'>
            {project.technologies.map((technology) => (
              <Image className='h-10 w-10 rounded-full cursor-pointer'
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt=""
                width="40"
                height="40"
              />
            ))}
           
          </div>
        
          
          <p className='text-lg text-center md:text-left hidden lg:block'>{project.summary}</p>

         <a href={project.url}>
          <button  className="w-[200px] h-[200px]">
          
              
           </button>
          </a>

        </div>
        <button className="absolute right-0 text-[50px] w-[200px] text-blue-500" onClick={() => currentProjectIndex < projects.length-1 && setCurrentProjectIndex(currentProjectIndex + 1)}>&#10095;</button>
      </div>
    </section>
  )
})}
    </motion.div>)
}
   

export default Project;