import React, { useState } from "react";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import Link from "next/link";
import arrow from "../styles/arrow.png";

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
    <div className="h-screen flex flex-col relative text-center items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center p-[120px]">
        Projects
      </h3>
      <div className="flex flex-col h-[400px] w-full items-center relative px-4 ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none absolute left-10 md:left-[100px] top-1/3 transform -translate-y-1/2 z-10"
          onClick={prevProject}
        >
         
          Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none absolute right-10 md:right-[100px] top-1/3 transform -translate-y-1/2 z-10"
          onClick={nextProject}
        >
          Next
          
        </button>
        <div
          className="carousel-slide"
          style={{
            backgroundImage: `url(${urlFor(
              projects[currentProject].image
            ).url()})`,
          }}
        >

        </div>
      </div>
     
        <h4 className="text-lg font-semibold text-center">
          {projects[currentProject].title}
        </h4>
        <p className="text-lg text-center md:text-left lg:block text-white">
          {projects[currentProject].summary}
        </p>
  

      <div className="flex justify-between gap-4">
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

      <div className="p-10">
        <a href={projects[currentProject].url}>
          <button className="w-[100px] h-[35px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none mr-2">
            Visit Site
          </button>
        </a>
        <a href={projects[currentProject].url}>
          <button className="w-[100px] h-[35px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none ml-2">
            Source
          </button>
        </a>
      </div>

      <style jsx>
        {`
          .carousel-slide {
            flex-shrink: 0;
            display: flex;
            
            border-radius: 10px;
            transition: all 0.5s ease-in-out;
            width: 70%;
            height: 70%;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </div>
  );
}

export default ProjectCarousel;
