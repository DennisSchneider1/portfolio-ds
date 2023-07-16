import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/navLogo.png';
import cryptoImg from '../public/assets/navLogo.png'
import netflixImg from '../public/assets/navLogo.png'
import twitchImg from '../public/assets/navLogo.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Radiology Workflow Analyzer'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='Java, JS, Vaadin, Springboot, Tomee'
          />
          <ProjectItem
            title='Rust Chat App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='Rust, Yew'

          />
          <ProjectItem
            title='XR/VR Headlight Simulator & VR for Business Intelligence'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='C#, Unity, Blender'

          />
          <ProjectItem
            title='VW Car Configurator App'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Java, Android Studio'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
