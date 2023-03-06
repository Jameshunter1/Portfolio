import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import james from "../styles/james.png"
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';



type Props = {
    pageInfo: PageInfo
};

 function Hero({pageInfo}: Props) { 
      const [text, count] = useTypewriter({
          words: [`Hey, I'm ${pageInfo?.name}`, "<React Developer/>"],
          loop: true,
          delaySpeed: 2000,
      });
    return (
        <div className='h-screen  flex flex-col items-center space-y-8 justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            
            <Image className='relative rounded-full mx-auto object-cover'
                src={james}
                alt="" 
                height="100"
                width="100"
            />
           <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold '>
                <span>{text}</span>
                <Cursor cursorColor='#4c6ab3' />
                </h1>
           
                <div className='pt-5 pb-12'>
                    <Link href="#about">       
                <button className='heroButton'>About</button>
                    </Link>
                   
                    <Link href="#skills">
                        < button className='heroButton'>Skills</button>
                    </Link >
                    <Link href="#projects">
                        < button className='heroButton'>Projects</button>
                    </Link >           
                </div> 
                       
                  
                    
                </div>
            </div>
           

    );
}

export default Hero;