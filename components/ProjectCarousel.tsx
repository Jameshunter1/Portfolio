import React, { useState } from "react";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";


type Props = {
  projects: Project[];
};

function ProjectCarousel({ projects }: Props) {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((currentProject + projects.length - 1) % projects.length);
  };

  
  return (
    <div className="h-screen flex  flex-col ">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center pt-[120px]">
        Projects
      </h3>

      <div className="flex justify-center items-center pt-10">
        <button
          className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none "
          onClick={prevProject}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
         <div className="justify-center bg-opacity-20 w-[400px] md:w-[450px] h-[200px] md:h-[300px]">
          <h4 className="text-lg font-semibold text-center p-5  ">
            {projects[currentProject].title}
          </h4>

          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat p-10"
            style={{
              backgroundImage: `url(${urlFor(
                projects[currentProject].image
              ).url()})`,
            }}
          />
      
        <div className="flex justify-around p-10">
          {projects[currentProject].technologies.map((technology) => (
            <Image
              className="rounded-full cursor-pointer hover:opacity-80"
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              width="30"
              height="30"
            />
          ))}
        </div>
        <div className="flex flex-col items-center  ">
          <p className=" text-center text-sm md:text-left text-white max-w-lg">
            {projects[currentProject].summary}
          </p>

          <div className="flex p-10 ">
            <a href={projects[currentProject].url}>
              <button className="w-[100px] h-[35px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none mr-2">
                Visit Site
              </button>
            </a>
            <a href={projects[currentProject].sourceCodeUrl}>
              <button className="w-[100px] h-[35px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none ml-2">
                Source
              </button>
              </a>
              </div>
            </div>
          </div>
        <button
          className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none top top-1/3"
          onClick={nextProject}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        </div>
        
        </div>
     

  );
}

export default ProjectCarousel;
