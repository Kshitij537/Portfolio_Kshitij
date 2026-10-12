'use client'
import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectVisual from "./ProjectVisual";

const ProjectCard = ({ project, index }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className='grid items-center gap-8 border-t border-white/10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-12'
  >
    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
      <ProjectVisual type={project.visual} />
    </div>
    <div className='min-w-0'>
      <p className='text-[13px] font-semibold uppercase tracking-wider text-[#52D6D1]'>
        Project {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className='mt-2 text-[27px] font-bold leading-tight text-white sm:text-[34px]'>
        {project.name}
      </h3>
      <p className='mt-4 text-[16px] leading-7 text-gray-300'>
        {project.description}
      </p>
      <ul className='mt-5 space-y-2 text-[14px] leading-6 text-secondary'>
        {project.features.slice(0, 2).map((feature) => (
          <li key={feature} className='flex gap-3'>
            <span className='mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#52D6D1]' aria-hidden='true' />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className='mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5'>
        {project.tags.map((tag) => (
          <span key={tag} className='flex items-center gap-2 text-[13px] font-medium text-[#dfd9ff]'>
            <span className='h-1 w-1 rounded-full bg-[#915EFF]' aria-hidden='true' />
            {tag}
          </span>
        ))}
      </div>
      <div className='mt-6 flex flex-wrap gap-6'>
        <a
          href={project.source_code_link}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 text-[14px] font-semibold text-white transition-colors hover:text-[#52D6D1]'
        >
          <ImGithub size={18} aria-hidden='true' /> Source code
        </a>
        {project.live_link && (
          <a
            href={project.live_link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-[14px] font-semibold text-white transition-colors hover:text-[#52D6D1]'
          >
            <HiExternalLink size={19} aria-hidden='true' /> Live demo
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'
    >
      Applications built across AI, agriculture and public-interest workflows.
    </motion.p>
    <div className='mt-12'>
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, 'work');
