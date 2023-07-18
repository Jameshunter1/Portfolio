import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";
import Skills from "../components/Skills";
import { PageInfo, DevelopmentProject, AnalysisProject, Skill, Social } from "../typings";
import james from "/styles/james.png";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";
import { useState } from "react";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  developmentProjects: DevelopmentProject[];
  analysisProjects: AnalysisProject[];
  socials: Social[];
};

const Home = ({ pageInfo, developmentProjects, analysisProjects, skills, socials }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" text-white h-screen scroll-smooth overflow-y-scroll w-25 overflow-x-hidden scrollbar  scrollbar-thumb-[#5572af]/40">
      <Head>
        <title>{pageInfo?.name} Portfolio</title>
      </Head>
      {/* Header */}
      <Header
        socials={socials}
        isSmallScreen={isSmallScreen}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
      />

      {/* Hero */}
      <section id="hero" className=" scroll-smooth">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="scroll-smooth">
        <About pageInfo={pageInfo} />
      </section>
      {/* Skills */}
      <section id="skills" className="scroll-smooth">
        <Skills
          skills={skills}
          directionLeft={false}
          description={""}
          title={""}
        />
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-smooth">
        <ProjectCarousel developmentProjects={developmentProjects} analysisProjects={analysisProjects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="scroll-smooth">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="fixed bottom-5 right-8">
          
            <Image
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer z-10"
              src={james}
              alt=""
              height="40"
              width="40"
            />
         
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const pageInfoQuery = groq`
*[_type == "pageInfo"][0]`;

  const skillQuery = groq`
*[_type =="skill"]{
    ...,
    technologies[]->
}`;
  const developmentProjectQuery = groq`
*[_type =="developmentProjects"]{
    ...,
    technologies[]->
}`;
    const analysisProjectQuery = groq`
*[_type =="analysisProjects"]{
    ...,
    technologies[]->
}`;
  const socialQuery = groq`
*[_type =="social"]
`;
  // Make a request to each API endpoint
  const [pageInfo, skills, developmentProjects, analysisProjects, socials] = await Promise.all([
    sanityClient.fetch(pageInfoQuery),
    sanityClient.fetch(skillQuery),
    sanityClient.fetch(developmentProjectQuery),
    sanityClient.fetch(analysisProjectQuery),
    sanityClient.fetch(socialQuery),
  ]);
  // Return the response data as props
  return {
    props: {
      pageInfo,
      skills,
      developmentProjects,
      analysisProjects,
      socials,
    },
  };
};
