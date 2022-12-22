import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience: Experience;
}

 function ExperienceCard({ experience }: Props) {
  return (
      <article className='flex flex-col rounded-lg items-center space-y-7 w-[200px] flex-shrink-0 h-[700px] md:w-[650px] md:h-[400px] xl:w-[900px] xl:h-[700px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden p-10'>
          <motion.img
              initial={{
                  y: -100,
                  opacity:0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true}}
              className='w-32 h-32 rounded-full md:rounded-full object-cover object-center'
              src={urlFor(experience?.companyImage).url()}
              alt="company logo"
             
          />
          <div className='px-0 md:px-10 w-[200px]'>
              <h4 className='text-4xl font-light w-32'>
                  {experience?.jobTitle}</h4>
              <p className='font-bold text-2xl mt-1'>{experience.company}</p>
              <div className='flex space-x-2 my-2'>
                  {experience.technologies.map((technology) => (
                      <Image
                          key={technology._id}
                          className='rounded-full'
                          src={urlFor(technology?.image).url()} alt="technologies used"
                          height="45"
                          width="45"
                      />
                  ))}             
                </div>
              <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()}-{""}
                  {experience.isCurrentlyWorkingHere ? "Present" : new Date (experience.dateEnded).toDateString()}</p>
              <ul className='list-disc space-y-4 text-lg h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#5572af]/80'>
                  {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                  ))}

              </ul>
          </div>
   </article>
  )
}

export default ExperienceCard;