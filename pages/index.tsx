import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from "../components/Header";
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import {  PageInfo, Project, Skill, Social } from '../typings';
import james from '/styles/james.png';
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, projects, skills, socials }: Props) => {
  

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll w-25 overflow-x-hidden scrollbar  scrollbar-thumb-[#5572af]/40">
      <Head>
        <title>{pageInfo?.name} Portfolio</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
       
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

     {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
        
      </section>

     

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact/>
      </section>


      <Link href="#hero">
        <footer className='sticky bottom-5 '>
          <div className='flex  items-center justify-center m-0'>
            <Image className=" rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src={james} alt="" height="50" width="50" />
          </div>
        </footer>
      </Link>
    </div>
  
  );
};

export default Home;
    
export const getStaticProps = async () => {

  const pageInfoQuery = groq`
*[_type == "pageInfo"][0]`
 
  const skillQuery = groq`
*[_type =="skill"]{
    ...,
    technologies[]->
}`
  const projectQuery = groq`
*[_type =="project"]{
    ...,
    technologies[]->
}`
  const socialQuery = groq`
*[_type =="social"]
` ;
  // Make a request to each API endpoint
  const [
    pageInfo,
    skills,
    projects,
    socials,
  ] = await Promise.all([
    sanityClient.fetch(pageInfoQuery),
    sanityClient.fetch(skillQuery),
    sanityClient.fetch(projectQuery),
    sanityClient.fetch(socialQuery),
  ]);
  // Return the response data as props
  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials
    }
  }
}

