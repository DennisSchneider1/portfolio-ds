import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RWVImg from '../public/assets/rwv2.png';
import AIBotImg from '../public/assets/ai-bot2.png'
import VRImg from '../public/assets/eqs2.png'
import ConfiguratorImg from '../public/assets/vw2.png'
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
            title='Radiology Workflow Visualiser'
            backgroundImg={RWVImg}
            projectUrl='/rwv'
            tech='Java, JS, Vaadin, Springboot, Tomee'
          />
          <ProjectItem
            title='AI Assistant - Python Discord-Bot'
            backgroundImg={AIBotImg}
            projectUrl='/ai-bot'
            tech='Python, Langchain'

          />
          <ProjectItem
            title='XR/VR Headlight Simulator & VR for Business Intelligence'
            backgroundImg={VRImg}
            projectUrl='/vr'
            tech='C#, Unity, Blender'

          />
          <ProjectItem
            title='VW Car Configurator App'
            backgroundImg={ConfiguratorImg}
            projectUrl='/car-configurator'
            tech='Java, Android Studio'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
