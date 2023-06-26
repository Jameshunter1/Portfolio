import React, { useState } from "react";
import { DevelopmentProject, AnalysisProject } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";


type Props = {
 developmentProjects: DevelopmentProject[];
analysisProjects: AnalysisProject[];

};

enum Tab {
  Development,
  Analysis,
}

function ProjectCarousel({ analysisProjects, developmentProjects }: Props) {
  const [currentProject, setCurrentProject] = useState(0);
    const [currentTab, setCurrentTab] = useState(Tab.Development);


  const nextProject = () => {
    setCurrentProject((currentProject + 1) % developmentProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((currentProject + developmentProjects.length - 1) % developmentProjects.length);
  };

   const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);
  };
  return (
    <><h3 className="uppercase tracking-[20px] text-gray-500 text-2xl flex justify-center pt-[120px]">
        analysisProjects
    </h3>
      <div className="h-screen flex flex-col">      
         <div className="flex  mt-6 justify-center">
          <button
            className={`mr-4 text-lg font-medium ${
              currentTab === Tab.Development
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => handleTabChange(Tab.Development)}
          >
            Development
          </button>
          <button
            className={`text-lg font-medium ${
              currentTab === Tab.Analysis
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => handleTabChange(Tab.Analysis)}
          >
            Analysis
          </button>
        </div>
        {currentTab === Tab.Development && (
          // Development tab content goes here
          <div className="flex  items-center justify-evenly">
        <button className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none mt-40 " 
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
            className="w-10 h-10"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="justify-center w-[350px] md:w-[450px] h-[150px] md:h-[200px]">
          <h4 className="text-lg font-semibold text-center  md:p-10">
            {developmentProjects[currentProject].title}
          </h4>

          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${urlFor(
                developmentProjects[currentProject].image
              ).url()})`,
            }}
          />

          <div className="flex justify-around p-2 md:p-4">
            {developmentProjects[currentProject].technologies.map((technology) => (
              <Image
                className="rounded-sm cursor-pointer hover:opacity-80"
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt=""
                width="30"
                height="30"
              />
            ))}
          </div>
          <div className="mt-6">
            <p className=" text-sm text-left text-white max-w-lg tracking-wide bg-gray-700 border border-white p-2 md:visible">
              {developmentProjects[currentProject].summary}
            </p>

            <div className="flex justify-between p-7">
              <a href={developmentProjects[currentProject].url}>
                <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                  Visit Site
                </button>
              </a>
              <a href={developmentProjects[currentProject].sourceCodeUrl}>
                <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                  Source
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none mt-40 items-center "
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
            className="w-10 h-10"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          </button>
          </div>
        )}
        {currentTab === Tab.Analysis && (
          // Analysis tab content goes here
          <div className="flex  items-center justify-evenly">
        <button className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none mt-40 " 
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
            className="w-10 h-10"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="justify-center w-[350px] md:w-[450px] h-[150px] md:h-[200px]">
          <h4 className="text-lg font-semibold text-center  md:p-10">
            {analysisProjects[currentProject].title}
          </h4>

          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${urlFor(
                analysisProjects[currentProject].image
              ).url()})`,
            }}
          />

          <div className="flex justify-around p-2 md:p-4">
            {analysisProjects[currentProject].technologies.map((technology) => (
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
          <div className="mt-6">
            <p className=" text-sm text-left text-white max-w-lg tracking-wide bg-gray-700 border border-white p-2 md:visible">
              {analysisProjects[currentProject].summary}
            </p>

            <div className="flex justify-between p-7">
              <a href={analysisProjects[currentProject].url}>
                <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                  Visit Site
                </button>
              </a>
              <a href={analysisProjects[currentProject].sourceCodeUrl}>
                <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                  Source
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none mt-40 items-center "
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
            className="w-10 h-10"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          </button>
          </div>
        )}
      </div>
    
     
   
  </>);
}

export default ProjectCarousel;
