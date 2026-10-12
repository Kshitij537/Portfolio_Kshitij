'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import { styles } from "../styles";
import { education } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Academic Background</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>
    </motion.div>

    <div className='relative mt-12 border-l border-[#915EFF]/50 pl-7 sm:pl-10'>
      {education.map((item, index) => (
        <motion.article
          key={item.institution}
          variants={fadeIn("up", "spring", index * 0.16, 0.75)}
          className='relative border-b border-white/10 py-7 first:pt-0 last:border-b-0 last:pb-0'
        >
          <span
            className={`absolute -left-[37px] h-4 w-4 rounded-full border-[3px] border-[#52D6D1] bg-primary sm:-left-[49px] ${index === 0 ? "top-1" : "top-8"}`}
            aria-hidden='true'
          />
          <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6'>
            <div className='flex min-w-0 gap-4'>
              <div className='hidden h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#915EFF]/20 text-[#dfd9ff] sm:flex'>
                <FaGraduationCap size={22} aria-hidden='true' />
              </div>
              <div>
                <h3 className='text-white text-[21px] sm:text-[24px] font-bold leading-snug'>
                  {item.degree}
                </h3>
                <p className='mt-1 text-[#dfd9ff] text-[16px] font-semibold'>
                  {item.institution}
                </p>
                {item.location && <p className='mt-1 text-secondary text-[14px]'>{item.location}</p>}
              </div>
            </div>
            <p className='shrink-0 text-[#52D6D1] text-[15px] font-semibold sm:text-right'>
              {item.date}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education");
