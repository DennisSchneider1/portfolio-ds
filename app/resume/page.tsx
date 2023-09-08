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
              Software Developer <span className='px-1'>|</span> Full Stack Developer <span className='px-1'>|</span> XR/VR Developer
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className='py-2'>Software Developer</p>
            <p className='py-2'>Full Stack Developer</p>
            <p className='py-2'>XR/VR Developer</p>
          </div>
        </div>
        <p>
          I’m Dennis Schneider, a software developer with experience in .Net and XR/VR Development in C# and 
          Web & Mobile development in Java & JavaScript.
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
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Java Development</span>
            <span className='px-2'>|</span>Springboot
            <span className='px-2'>|</span>Vaadin
            <span className='px-2'>|</span>Maven
            <span className='px-2'>|</span>Jenkins
            <span className='px-2'>|</span>Jira
            <span className='px-2'>|</span>Tomee
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
              Comprehensively documented with a wiki as a userguide.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              H&L Software GmbH
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

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Karlsruher Institute of Technology
            </span>
            <span className='px-2'>|</span>Karlsruhe, Baden-Württemberg
          </p>
          <p className='py-1 italic'>Software Developer Internship (2013)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Got into contact and gained insight of serval software development related positions.
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
          <p className='py-1 italic'>Bachelors in Computer Science (2016-2024)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Used technologies: Java, C, C++, C#, Python, Go, Maple, LEGv8, VHDL, Verilog, ABAP, XML, JSON
            </li>
            <li>
              Additional courses: 
              Cloud Computing, Team Teaching, Robotics, XR/VR Development, Computer Vision, 
              Deadlock Analysis Modelchecking with UPAAL, Buisiness inteligence for VR
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Technisches Berufskolleg I & II
            </span>
            <span className='px-2'>|</span>Karlsruhe, Baden-Württemberg
          </p>
          <p className='py-1 italic'>Fachhochschulreife (2014-2016)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Learned foundations in software development and database management in Java, PHP, html and css.
            </li>
            <li>
              Additionally gained serval techincal skills such as general knowledge of PC hardware and usage of Linux.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
