'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

import { styles } from "../styles";
import { achievements } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Achievements = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Recognition</p>
      <h2 className={styles.sectionHeadText}>Achievements.</h2>
    </motion.div>

    <div className='mt-12 grid gap-5 md:grid-cols-3'>
      {achievements.map((achievement, index) => (
        <motion.article
          key={achievement.title}
          variants={fadeIn("up", "spring", index * 0.2, 0.75)}
          className='group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-tertiary/80 p-6 transition-colors duration-300 hover:border-[#52D6D1]/50'
        >
          <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#915EFF] via-[#52D6D1] to-transparent' />
          <div className='flex items-start justify-between gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-[#915EFF]/15 text-[#52D6D1]'>
              <FaAward size={23} aria-hidden='true' />
            </div>
            <span className='text-[44px] font-black leading-none text-[#915EFF]/40' aria-hidden='true'>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className='mt-8 text-white text-[21px] font-bold leading-snug'>
            {achievement.title}
          </h3>
          <p className='mt-3 text-gray-300 text-[15px] leading-[26px]'>
            {achievement.description}
          </p>
        </motion.article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Achievements, "achievements");
