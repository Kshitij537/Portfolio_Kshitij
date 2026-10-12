'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { navLinks } from '@/constants/constants'
import { styles } from '@/styles'
import { menu, close } from '@/assets'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { FiDownload } from 'react-icons/fi'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? " bg-primary  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 " : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt='Kshitij monogram' className='w-10 h-10 object-contain' />
          <span className='text-white text-[29px] font-bold'>Kshitij</span>
        </Link>

        <ul className='list-none hidden xl:flex flex-row gap-6'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a data-scroll-to href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <a
          href='/Kshitij_Deshmukh_Resume.pdf'
          download='Kshitij_Deshmukh_Resume.pdf'
          className='hidden xl:inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-[#915EFF] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7c4de0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
        >
          <FiDownload aria-hidden='true' />
          Download Resume
        </a>

        <div className='xl:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl flex-col gap-5`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a data-scroll-to href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <a
              href='/Kshitij_Deshmukh_Resume.pdf'
              download='Kshitij_Deshmukh_Resume.pdf'
              onClick={() => setToggle(false)}
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#915EFF] px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              <FiDownload aria-hidden='true' />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
