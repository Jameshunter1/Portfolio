import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";
import Skills from "../components/Skills";
import { PageInfo, Project, Skill, Social } from "../typings";
import james from "/styles/james.png";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, projects, skills, socials }: Props) => {
  return (
    <div className=" text-white h-screen  scroll scroll-smooth overflow-y-scroll w-25 overflow-x-hidden scrollbar  scrollbar-thumb-[#5572af]/40">
      <Head>
       
        <title>{pageInfo?.name} Portfolio</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />

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
        <ProjectCarousel projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="scroll-smooth">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="fixed bottom-5 right-10">
          <div
            onClick={() => {
              window.location.href = "#hero";
            }}
          >
            <Image
              className=" rounded-full filter grayscale hover:grayscale-0 cursor-pointer z-10"
              src={james}
              alt=""
              height="50"
              width="50"
            />
          </div>
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
  const projectQuery = groq`
*[_type =="project"]{
    ...,
    technologies[]->
}`;
  const socialQuery = groq`
*[_type =="social"]
`;
  // Make a request to each API endpoint
  const [pageInfo, skills, projects, socials] = await Promise.all([
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
      socials,
    },
  };
};
