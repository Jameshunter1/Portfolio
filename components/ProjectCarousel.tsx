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
    <div className="h-screen px-10">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Projects
      </h3>

      <div className="justify-evenly overflow:hidden mt-[50px] ">
        <button onClick={prevProject} className="carousel-buttons-prev">
          Prev <i className="fas fa-chevron-left"></i>
        </button>

        <div className="flex w-[900px]">
          <div
            className="carousel-slide"
            style={{
              backgroundImage: `url(${urlFor(
                projects[currentProject].image
              ).url()})`,
            }}
          >
            <div className="carousel-slide-content">
              <h4 className="text-lg font-semibold text-center text-black">
                {projects[currentProject].title}
              </h4>
              <p className="text-lg text-center md:text-left hidden lg:block text-white">
                {projects[currentProject].summary}
              </p>

              <div className="carousel-slide-buttons">
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

              <div className="carousel-slide-technologies">
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
            </div>
          </div>
          <div>
       
          </div>
      
          <button onClick={nextProject} className="carousel-buttons-next">
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .carousel-slide {
          height: 600px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 10px;
          margin: 0 10px;
          transition: all 0.5s ease-in-out;
        }

        .carousel-slide-content {
          display: flex;
          flex-direction: column;
          justify-content:center;
align-items: center;
height: 100%;
padding: 1rem;
}
.carousel-slide-image {
      flex: 1;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .carousel-slide-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1rem;
    }
    
    .carousel-slide-description {
      font-size: 1rem;
      text-align: center;
      margin-top: 0.5rem;
    }
  `}
      </style>
    </div>)
}

export default ProjectCarousel;
