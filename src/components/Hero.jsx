'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../assets/user.svg";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <section className='relative isolate w-full min-h-screen mx-auto banner overflow-hidden'>
      <div className='relative z-10 flex min-h-screen flex-col justify-center gap-10 py-32 sm:gap-14'>
        <div className='mx-auto w-full max-w-7xl px-6 sm:px-16'>
          <div className='flex items-start gap-5'>
            <div className='flex shrink-0 flex-col items-center mt-2'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 h-24 sm:h-36 violet-gradient' />
            </div>

            <h1 className='min-w-0 font-black text-[38px] leading-[1.15] text-white sm:text-[60px] lg:text-[90px]'>
              Hi, I'm <span className='block text-[31px] leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 sm:text-[48px] lg:text-[60px]'>Kshitij Deshmukh</span>
            </h1>
          </div>
        </div>

        <div className='sliderContainer text-secondary text-[36px] leading-tight sm:text-[60px] lg:text-[88px]'>
          <div ref={slider} className='slider'>
            <p ref={firstText}>Full-Stack Developer And AI/ML Developer.</p>
            <p ref={secondText}>Full-Stack Developer And AI/ML Developer.</p>
          </div>
        </div>
      </div>

      <Image loading='lazy' src={heroImg} alt='hero' className='pointer-events-none z-0 absolute bottom-24 right-0 h-auto w-[45vw] max-w-[600px] lg:w-[38vw] animation' />

      <div className='absolute bottom-8 sm:bottom-10 w-full flex justify-center items-center z-30 cursor-pointer'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
