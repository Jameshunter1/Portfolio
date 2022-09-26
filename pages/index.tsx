import type { GetStaticProps } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from "../components/Header";
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProject } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchExperience } from '../utils/fetchExperiences';
import { fetchSocials } from '../utils/fetchSocials';
import james from "/styles/james.png"



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40">
      <Head>
        <title> James Portfolio </title>
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

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
        
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact/>
      </section>


      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image className=" rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src={james} alt="" height="50" width="50" />
          </div>
        </footer>
      </Link>
    </div>
  
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props>  = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocials(); 


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,

    },
    revalidate: 10,
  };
}
