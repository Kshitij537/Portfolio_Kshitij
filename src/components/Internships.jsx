'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import { styles } from "../styles";
import { internships } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

const InternshipCard = ({ internship, index }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='relative pl-9 sm:pl-14'
  >
    <div className='absolute left-[3px] top-8 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#52D6D1]/60 bg-primary text-[#52D6D1] shadow-[0_0_22px_rgba(82,214,209,0.2)]'>
      <FaBriefcase size={14} aria-hidden='true' />
    </div>
    <div className='overflow-hidden rounded-lg border border-white/10 bg-tertiary/80 shadow-card'>
      <div className='h-1 bg-gradient-to-r from-[#52D6D1] via-[#915EFF] to-transparent' />
      <div className='p-5 sm:p-7'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
          <div className='min-w-0'>
            <p className='text-[#52D6D1] text-[14px] font-semibold uppercase tracking-wider'>
              {internship.company}
            </p>
            <h3 className='mt-2 text-white text-[21px] sm:text-[25px] font-bold leading-snug'>
              {internship.title}
            </h3>
            <p className='mt-2 text-secondary text-[14px]'>{internship.location}</p>
          </div>
          <p className='shrink-0 text-[#dfd9ff] text-[14px] font-semibold lg:text-right'>
            {internship.date}
          </p>
        </div>

        <ul className='mt-6 grid gap-3 border-t border-white/10 pt-5 md:grid-cols-2'>
          {internship.highlights.map((highlight) => (
            <li key={highlight} className='flex gap-3 text-gray-300 text-[14px] sm:text-[15px] leading-6'>
              <span className='mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#52D6D1]' aria-hidden='true' />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.article>
);

const Internships = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Experience</p>
      <h2 className={styles.sectionHeadText}>Internships.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-5 max-w-3xl text-secondary text-[17px] leading-[30px]'
    >
      Building real products across generative AI, machine learning, APIs and web development.
    </motion.p>

    <div className='relative mt-12 space-y-7 before:absolute before:bottom-10 before:left-[18px] before:top-8 before:w-px before:bg-gradient-to-b before:from-[#52D6D1] before:via-[#915EFF] before:to-transparent'>
      {internships.map((internship, index) => (
        <InternshipCard
          key={`${internship.company}-${internship.date}`}
          internship={internship}
          index={index}
        />
      ))}
    </div>
  </>
);

export default SectionWrapper(Internships, "internships");
