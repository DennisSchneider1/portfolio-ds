import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const metadata = {
  title: 'Dennis | Resume',
  description: 'Portfolio Website',
}

const resume = () => {
  return (
    <>
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Dennis Schneider</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/dennis-schneider-797409239/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/DennisSchneider1'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Developer <span className='px-1'>|</span> XR/VR Developer
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className='py-2'>Web Developer</p>
            <p>XR/VR Developer</p>
          </div>
        </div>
        <p>
          From .Net and VR Development in C# to Web and Mobile development in Java & JavaScript, I have developed a diverse skillset.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>Rust
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>XR/VR Development</span>
            <span className='px-2'>|</span>Unity
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>Blender
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            medavis GmbH
            </span>
            <span className='px-2'>|</span>Karlsruhe, Baden-Württemberg
          </p>
          <p className='py-1 italic'>Full Stack Web Developer Internship (2019 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed a Full Stack data analysis tool with use of Java, JavaScript, HTML and CSS.
            </li>
            <li>
              Comrehensively documented with a wiki as a userguide.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              h&l Software GmbH
            </span>
            <span className='px-2'>|</span>Konstanz, Baden-Württemberg
          </p>
          <p className='py-1 italic'>.Net Developer Internship (2015)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed tool for finding errors in datasets as a .Net application.
            </li>
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Hochschule Karlsruhe für Wirtschaft und Technik
            </span>
            <span className='px-2'>|</span>Karlsruhe, Baden-Württemberg
          </p>
          <p className='py-1 italic'>Bachelors in Computer Science (2020 - 2024)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Advanced courses innclude: 
              Software Engineering, Operating Systems, Distributed Systems, ERP Systems, 
              Advanced Database Engineering, Embeded Software, Computer Architecture, Autonomous Systems
            </li>
            <li>
              Chosen courses: 
              Cloud Computing, Team Teaching, Robotics, XR/VR Development, Computer Vision, 
              Deadlock Analysis Modelchecking with UPAAL, Buisiness inteligence for VR
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Development Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Car Configurator Android App (2018)
            </span>
            <span className='px-2'>|</span>VW Group
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Android App wirtten in Java to configure, display, save and load car cofigurations of the VW Group.
            </li>
            <li>
              Data access through the official VW Group REST API.
            </li>
            <li>
              Made as part of a code competition of the VW Group.
            </li>
          </ul>
          <p className='italic'>
            <span className='font-bold italic'>
              Discord Bot - E-Card Bot (2018)
            </span>
            <span className='px-2'>|</span>Private use
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Discord Bot with quality of life features and serval games.
            </li>
            <li>
              Written in Java to interact with Discords JDA API.
            </li>
            <li>
              Managing persisting user data in local file storage.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
