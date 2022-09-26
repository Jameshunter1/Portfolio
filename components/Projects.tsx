import React from 'react'
import {motion }from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
projects:Project[]
}

export default function Projects({projects }: Props) {
   
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration:1.5}}
          className='h-screen relative flex overflow-hidden flex-col text-left md:flex-flow max-w-full justify-evenly mx-auto items-center z-0 '>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
              Projects
          </h3>
          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40">
              
              {/* Maps through the array of projects */}
              {projects?.map((project, i) => (
                  <div key="project"className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                      <motion.img
                          initial={{
                              y: -300,
                              opacity: 0,
                          }}
                          transition={{ duration: 1.2 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          src={urlFor(project?.image).url()} alt=""
                         />
                      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                          <h4 className='text-4xl font-semibold text-center'>
                              <span className='underline decoration-[#f7ab0a]/50'>Case Study {i+ 1} of {projects.length}: </span>
                              {""} Netflix Clone
                          </h4>
                          <p className='text-lg text-center md:text-left'>Netflix 2.0 app that has Log In and Log Out Authentication with Google. You are able to add or remove saved movies while logged in to your account and it will be stored in Googles Cloud Firestore database and update accordingly. It has a beautiful home screen with all the movies looking like Netflix.</p>
                      </div>
                      </div>
              ))}
         
          </div>
          <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'>
              
          </div>
      </motion.div>
  )
}