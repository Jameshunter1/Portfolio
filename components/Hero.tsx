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
        words: [`Hey, I'm ${pageInfo?.name}`, `Software Engineer`],
        loop: true,
        delaySpeed: 1500,
      });
     return ( 
         <>
   
        <div className='h-screen  flex flex-col items-center space-y-8 justify-center text-center overflow-hidden'>
            
            
            <Image className='relative  mx-auto object-cover'
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
           
               
                       
                  
                    
                </div>
            </div>
           </>

    );
}

export default Hero;