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
            Hello, I’m Dennis Schneider, a passionate software developer from the beautiful city of Karlsruhe. 
            With a blend of education, diverse internship experiences, and a knack for innovative personal projects, 
            I’m on a mission to make the digital world a more exciting and efficient place.
          </p>
          <p className='py-2 text-gray-600'>
            My journey in software development has taken me through various notable organizations, 
            including the Karlsruher Institute of Technology, H&L Software GmbH, and medavis GmbH. 
            These experiences have not only broadened my technical expertise but have also provided me 
            with valuable insights into the dynamic world of software development.
          </p>
          <p className='py-2 text-gray-600'>
            My educational foundation is built on a strong technical background, 
            starting with my time at Technisches Berufskolleg I & II, 
            where I honed my technical skills and gained a solid understanding of programming fundamentals. 
            Currently, I’m on the cusp of completing my computer science degree, set to graduate at the beginning of next year.
          </p>
          <p className='py-2 text-gray-600'>
            But what truly sets me apart are my personal projects, 
            where I let my creativity and passion for software development run wild. 
            Among them, you’ll find a car configurator Android app developed in Java, 
            showcasing my ability to create practical and user-friendly mobile applications. 
            Additionally, I’ve dabbled in the world of chatbots, crafting both Java-based and Python-based conversational agents, 
            showcasing my versatility in multiple programming languages.
          </p>
          <p className='py-2 text-gray-600'>
            One of my most exciting ventures has been in the realm of Virtual Reality (VR), 
            where I’ve embarked on several projects related to business intelligence and the automotive industry. 
            My work includes syncing real-time car positions with realistic virtual models, 
            pushing the boundaries of immersive technology and data visualization.
          </p>
          <p className='py-2 text-gray-600'>
            When I’m not immersed in code, you can often find me enjoying the natural beauty of the areas around Karlsruhe 
            or venturing into the great outdoors for hikes. Nature provides the perfect balance to my digital life, 
            helping me recharge and find inspiration for my next coding adventure.
          </p>
          <p className='py-2 text-gray-600'>
            With a passion for innovation, a wealth of experience, and an ever-curious mind, 
            I’m excited to continue pushing the boundaries of what’s possible in the world of software development. 
            I’m always up for a new challenge, so feel free to explore my portfolio and reach out to collaborate on exciting projects. 
            Let’s create something extraordinary together!
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
