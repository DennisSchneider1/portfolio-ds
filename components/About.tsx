import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Hello, I’m Dennis Schneider, a software developer from Karlsruhe. 
          </p>
          <p className='py-2 text-gray-600'>
            My professional experience includes several companies and institutions, 
            including the Karlsruher Institute of Technology, H&L Software GmbH, and medavis GmbH. 
            In my time there I was mainly focusing on software development in either Java or .Net environments as a fullstack developer.
          </p>
          <p className='py-2 text-gray-600'>
            My education is built on a strong technical background, 
            starting with my time at Technisches Berufskolleg I & II, 
            where I gained a solid understanding of programming fundamentals and hardware knowledge. 
            Currently, I’m completing my computer science degree, set to graduate in march of 2025.
          </p>
          <p className='py-2 text-gray-600'>
            I also have quite a few personal projects, here are just a few examples.
            Unity VR Projects using C# aiming for a realistic and comfortable experience and high performance in mind.
            Multiple chatbots, mostly Java and Python-based, integrating Language models and Databases.
            A car configurator Android app developed in Java. yt-dlp clients in Python using qt and in Rust using iced.
          </p>
          <p className='py-2 text-gray-600'>
            I’m always up for a new challenge, so feel free to explore my portfolio and reach out to collaborate on exciting projects. 
            Let’s create something together!
          </p>
          <Link href='/#projects' legacyBehavior>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects here if you didn’t yet.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;