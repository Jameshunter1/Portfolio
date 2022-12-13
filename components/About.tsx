import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo;
}

 function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>
      
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()} className='-mb-20 mt-20 md:mb-0 flex-shrink-0 w-60 h-56 rounded-full object-cover md:w-64 md:h-95'
      />
      <div className='space-y-10 px-0 md:p-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#5572af]/50'>little</span> background</h4>
        <p className='text-base leading-7'>{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}

export default About;