import React, { useState } from "react";
import { DevelopmentProject, AnalysisProject } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
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
      setCurrentDevelopmentProject((prevDevelopmentProject) => (prevDevelopmentProject + 1) % developmentProjects?.length);
    } else if (currentTab === Tab.Analysis) {
      setCurrentAnalysisProject((prevAnalysisProject) => (prevAnalysisProject + 1) % analysisProjects?.length);
    }
  };

  const prevProject = () => {
    if (currentTab === Tab.Development) {
      setCurrentDevelopmentProject((prevDevelopmentProject) => (prevDevelopmentProject + developmentProjects?.length - 1) % developmentProjects?.length);
    } else if (currentTab === Tab.Analysis) {
      setCurrentAnalysisProject((prevAnalysisProject) => (prevAnalysisProject + analysisProjects?.length - 1) % analysisProjects?.length);
    }
  };

  const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);

    if (tab === Tab.Development) {
      setCurrentDevelopmentProject(0);
    } else if (tab === Tab.Analysis) {
      setCurrentAnalysisProject(0);
    }
  };
   
  return (
    <>
      <div className="h-screen flex flex-col text-center justify-center items-center">
       <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center ">
        Projects
      </h3>
   
         <div className="mt-[50px] flex justify-center space-x-3">
      <button
        className={`px-4 py-2 rounded-full ${
          currentTab === Tab.Development ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
        }`}
        onClick={() => handleTabChange(Tab.Development)}
      >
        Development
      </button>
      <button
        className={`px-4 py-2 rounded-full ${
          currentTab === Tab.Analysis ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
        }`}
        onClick={() => handleTabChange(Tab.Analysis)}
      >
        Analysis
      </button>
    </div>
          
       
      {currentTab === Tab.Development && (
        // Development tab content goes here
     
         <div className=" ">
       
         
            
          <div className=" flex p-5 md:p-4 items-center justify-evenly">
              <motion.button className=" hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none animate-slideLeft w-10 h-10"
            onClick={prevProject}>
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
              </motion.button>
              
            <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            
          }}
          className="bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: developmentProjects?.length > 0
              ? `url(${urlFor(developmentProjects[currentDevelopmentProject]?.image).url()})`
              : 'none',
            width: "550px", // Set a fixed width to maintain consistent image size
            height: "350px", // Set a fixed height to maintain consistent image size
          }}
        />
  <motion.button className=" hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none animate-slideLeft w-10 h-10"
            onClick={prevProject}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
     
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
            </motion.button>
            </div>
           <div>
              {developmentProjects?.length > 0 && developmentProjects[currentDevelopmentProject]?.technologies.map((technology) => (
                <Image
                  className="rounded-sm cursor-pointer hover:opacity-80 bg-center bg-contain "
                  key={technology._id}
                  src={urlFor(technology.image).url()}
                  alt=""
                  width="30"
                  height="30"
                />
              ))}

          </div>
     <div className="max-w-[600px] ">
              {developmentProjects?.length > 0 && developmentProjects[currentDevelopmentProject]?.summary} 
              </div>
              <div className="pt-9">
                
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
           <div className=" flex items-center">   
           
            </div>
          </div>
      
  
    
      )} 
      {currentTab === Tab.Analysis && (
        // Analysis tab content goes here
  
                <div className="items-center">
              <motion.button className=" hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none animate-slideLeft "
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
          </motion.button>
              
  <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            
          }}
          className="bg-center bg-no-repeat bg-contain justify-center items-center"
          style={{
            backgroundImage: analysisProjects?.length > 0
              ? `url(${urlFor(analysisProjects[currentAnalysisProject]?.image).url()})`
              : 'none',
            width: "300px", // Set a fixed width to maintain consistent image size
            height: "300px", // Set a fixed height to maintain consistent image size
          }}
        />



            <div className="justify-center">
              {analysisProjects?.length > 0 && analysisProjects[currentAnalysisProject]?.technologies.map((technology) => (
                <Image
                  className="rounded-sm cursor-pointer hover:opacity-80 bg-center bg-cover"
                  key={technology._id}
                  src={urlFor(technology.image).url()}
                  alt=""
                  width="30"
                  height="30"
                />
              ))}

        
           
              {/* {analysisProjects?.length > 0 && analysisProjects[currentAnalysisProject].summary} */}
           
    
              <div className="flex justify-evenly p-7 space-x-2">
             <a href={analysisProjects[currentAnalysisProject]?.url}>
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
           
           
            <div className="  items-center justify-evenly">   
             <motion.button
            className="flex hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none "
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
                  </motion.button>
                  </div>
        
    </div>
        )}
      </div>
   
    </>
     
  );
}

export default ProjectCarousel;
