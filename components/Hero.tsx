import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import james from "../styles/james.png"
import Link from 'next/link';


type Props = {}

export default function Hero({}: Props) { 
      const [text, count] = useTypewriter({
          words: ["Hey, I'm James Hunter", "<React Developer/>", "Possibly your Father"],
          loop: true,
          delaySpeed: 2000,
      });
    return (
        <div className='h-screen flex flex-col  items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image className='relative rounded-full mx-auto object-cover'
                src={james}
                alt=""
                
               />
          
           
            <div>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#f7ab0a' />
                </h1>
                <div className='pt-5'>
                    <Link href="about">       
                < button className='heroButton'>About</button>
                    </Link>
                    <Link href="experience">
                        < button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="skills">
                        < button className='heroButton'>Skills</button>
                    </Link >
                    <Link href="projects">
                        < button className='heroButton'>Projects</button>
                    </Link >
                </div>
           </div>
        </div>
    );
}