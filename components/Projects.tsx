import React from 'react'
import {motion }from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image'
import {useState} from "react"
import Slider from 'react-slick';
import 'react-slideshow-image/dist/styles.css';
type Props = {
projects:Project[]
}


function Project({ projects }: Props) {
   const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // include other desired settings here

};const slider = React.useRef(null);
  return (
   <Slide {...settings}> 
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-5 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5572af]/40">
              
        {/* Maps through the array of projects */}
   
          {projects?.map((project, i) => (
            <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img src={urlFor(project?.image).url()} alt="" />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#5572af]/50'>Case Study {i + 1} of {projects.length}: </span>
                  {project?.title}
                </h4>
              
                <div className='flex items-center space-x-7 justify-center'>
                  {project.technologies.map((technology) => (
                    <Image className='h-10 w-10 space-x-2'
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt=""
                      width="40"
                      height="40"
                    />
                  ))}
                </div>
                <p className='text-lg text-center md:text-left'>{project.summary}</p>
              </div>
            </div>))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#5572af]/10 left-0 h-[500px] -skew-y-6'>
              
      </div>
  </motion.div></Slide>
    )
}

export default Project;