import Image from 'next/image';
import React from 'react';
import { useTypewriter,  Cursor } from 'react-simple-typewriter'
import james from "../styles/james.png";
import { PageInfo } from '../typings';



type Props = {
    pageInfo: PageInfo
};

 function Hero({pageInfo}: Props) { 
      const [text] = useTypewriter({
        words: [`Hey, I'm ${pageInfo?.name}`, `Data Analyst`],
        loop: 0,
     
        deleteSpeed:50,
        typeSpeed: 100,

      });
     return (
       <>
         <div className="h-screen flex flex-col text-center mx-auto items-center space-y-20 justify-center">
           <Image
             className="relative object-cover"
             src={james}
             alt=""
             height="100"
             width="100"
           />
           <div>
             <h2 className="text-sm uppercase text-gray-500  tracking-[15px] py-7">
               {pageInfo?.role}
             </h2>
             <h1 className="text-2xl lg:text-6xl font-semibold ">
               <span>{text}</span>
               <Cursor  />
             </h1>
           </div>
         </div>
       </>
     );
}

export default Hero;