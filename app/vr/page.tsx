import Image from 'next/image';
import React from 'react';
import VRImg from '../../public/assets/eqs2.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const vr_project = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={VRImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>XR/VR Projects</h2>
          <h3>C# / Unity / Blender</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built multiple VR/XR based projects using mostly C# and the Unity game engine.
          </p>
          <div className='py-4'>
          <h3>XR/VR Headlight Simulator</h3>
          <p>
            I collaborated on the XR/VR headlight simulation project in partnership with Mercedes Benz Design and Hochschule Karlsruhe. 
            The primary objective of this project was to investigate the synchronization between real-world object representations and their virtual counterparts.
          </p>
          <p>
            This synchronization was employed as a valuable tool in the design process of automotive components, 
            specifically focusing on the headlights of the Mercedes EQS.
          </p>
          </div>
          <div className='py-4'>
          <h3>Business Intelligence for VR</h3>
          <p>
          This project revolves around the practical use of VR technologies within the domain of Business Intelligence. 
          It involved the processing and visualization of exchange student data, with a specific emphasis on locality-based visualizations.
          The application featured various locality-based visualizations, including a mutable globe and 3D plotting of data.
          </p>
          </div>
          {/*
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
          */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C#
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Unity
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Blender
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Git LFS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default vr_project;