import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        About
      </h3>
      <div className="flex flex-row bg-[#5572af] items-center max-h-60">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={urlFor(pageInfo.profilePic).url()}
          className="flex-shrink-0 hidden w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full md:rounded-none items-center align-center justify-center"
        />
        <div className="space-y-4 md:p-10 items-center mt-10 ">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#5572af]/50">little</span>{" "}
            background
          </h4>
          <p className="text-[14px] md:text-base md:text-[16px] leading-6 md:leading-8">
            {pageInfo.backgroundInformation}
          </p>
        </div>
      </div>{" "}
    </motion.div>
  );
}

export default About;
