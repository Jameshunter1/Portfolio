import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <>
      <div className="h-screen flex flex-col text-center items-center  pt-[120px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-10">
          About
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
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
            className=" flex flex-col w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full md:rounded-none border-2 border-gray-500 shadow-md "
          />
          <div className="space-y-4 p-10 items-center mt-5 md:mt-7">
            <h4 className="text-xl md:text-4xl font-semibold">
              Here is a{" "}
              <span className="underline decoration-[#5572af]/50">little</span>{" "}
              background
            </h4>
            <p className="flex text-[12px] md:text-base md:text-[16px] leading-6 md:leading-8 max-w-[400px] justify-center">
              {pageInfo.backgroundInformation}
            </p>
          </div>
        </div>{" "}
      </motion.div></div>
    </>
  );
}

export default About;
