import React, { useState } from "react";
import { DevelopmentProject, AnalysisProject } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import Tabs from "@material-ui/core/Tabs";
import { Tab as MaterialTab } from "@material-ui/core";
import {motion} from "framer-motion"


type Props = {
 developmentProjects: DevelopmentProject[];
analysisProjects: AnalysisProject[];

};

enum Tab {
  Development,
  Analysis,
}

function ProjectCarousel({ analysisProjects, developmentProjects }: Props) {
  const [currentDevelopmentProject, setCurrentDevelopmentProject] = useState(Tab.Development);
  const [currentAnalysisProject, setCurrentAnalysisProject] = useState(Tab.Analysis);

const [currentTab, setCurrentTab] = useState(
  Tab.Development
);
  const nextProject = () => {
    if (currentTab === Tab.Development) {
      setCurrentDevelopmentProject((currentDevelopmentProject + 1) % developmentProjects?.length);
    } else if (currentTab === Tab.Analysis) {
      setCurrentAnalysisProject((currentAnalysisProject + 1) % analysisProjects?.length);
    }
  };

  const prevProject = () => {
    if (currentTab === Tab.Development) {
      setCurrentDevelopmentProject((currentDevelopmentProject + developmentProjects?.length - 1) % developmentProjects?.length);
    } else if (currentTab === Tab.Analysis) {
      setCurrentAnalysisProject((currentAnalysisProject + analysisProjects?.length - 1) % analysisProjects?.length);
    }
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, tab: Tab) => {
  setCurrentTab(tab);
    setCurrentDevelopmentProject(0); // Reset the current project index when switching tabs
    setCurrentAnalysisProject(0);
  };
   
  return (
    <>
      <div className="h-screen flex flex-col text-center items-center justify-center ">
       <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center ">
        Projects
      </h3>
     
     
     
           
        <Tabs value={currentTab} onChange={handleTabChange} className="pt-[50px]">
          <MaterialTab label="Development" value={Tab.Development} />
          <MaterialTab label="Analysis" value={Tab.Analysis} />
          </Tabs>
        
        {currentTab === Tab.Development && developmentProjects?.length > 0 && (
          <h2 className="pt-5 text-lg uppercase font-semibold font-seri underline tracking-wide">
            {developmentProjects.length > 0 && developmentProjects[currentDevelopmentProject].title}
          </h2>
        )}
       
        {currentTab === Tab.Analysis && analysisProjects?.length > 0 && (
          <h2 className="pt-5 text-lg uppercase font-semibold font-seri underline tracking-wide">
            {analysisProjects.length > 0 && analysisProjects[currentAnalysisProject].title}
          </h2>
        )}
          
       
      {currentTab === Tab.Development && (
        // Development tab content goes here
     
        <div className="flex  items-center justify-center">
          <button className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none "
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
          <div className="justify-center w-[350px] md:w-[450px] h-[150px] md:h-[200px] mt-[40px]">
              
              <motion.div
                animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    
    }}

              className="h-full w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: developmentProjects?.length > 0
                  ? `url(${urlFor(developmentProjects[currentDevelopmentProject]?.image).url()})`
                  : 'none',
              }}
            />


            <div className="flex justify-around p-5 md:p-4">
              {developmentProjects?.length > 0 && developmentProjects[currentDevelopmentProject]?.technologies.map((technology) => (
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
            
              {developmentProjects?.length > 0 && developmentProjects[currentDevelopmentProject]?.summary}
              <div className="flex justify-evenly p-7">
              <a href={developmentProjects[currentDevelopmentProject]?.url}>
                  <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                    Visit Site
                  </button>
              </a>
                <a href={developmentProjects[currentDevelopmentProject]?.sourceCodeUrl}>
                  <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                    Source
                  </button>
                </a>
            </div>
      
         
            </div>
            <div className="flex  items-center justify-evenly">   
             <button
            className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none  "
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
        
        
    </div>
    
      )} 
      {currentTab === Tab.Analysis && (
        // Analysis tab content goes here
     
      
        <div className="flex  items-center justify-evenly">
          <button className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none "
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
          <div className="justify-center w-[350px] md:w-[450px] h-[150px] md:h-[200px] mt-[40px]">
              
             <motion.div
                animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    
    }}
              className="h-full w-full bg-contain bg-center bg-no-repeat justify-center"
              style={{
                backgroundImage: analysisProjects?.length > 0
                  ? `url(${urlFor(analysisProjects[currentAnalysisProject]?.image).url()})`
                  : 'none',
              }}
            />


            <div className="flex justify-around p-2 md:p-4">
              {analysisProjects?.length > 0 && analysisProjects[currentAnalysisProject]?.technologies.map((technology) => (
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
           
              {analysisProjects?.length > 0 && analysisProjects[currentAnalysisProject]?.summary}
           
    
           <div className="flex justify-between p-7">
             <a href={analysisProjects[currentDevelopmentProject]?.url}>
                  <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                    Visit Site
                  </button>
              </a>
                <a href={analysisProjects[currentAnalysisProject]?.sourceCodeUrl}>
                  <button className="w-[100px] h-[50px] text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none">
                    Source
                  </button>
                </a>
      </div>
       
          </div>
           
           
            <div className="flex  items-center justify-evenly">   
             <button
            className="hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none "
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
        
    </div>
        )}
      </div>
   
    </>
     
  );
}

export default ProjectCarousel;
