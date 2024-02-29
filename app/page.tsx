import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
 
export default function Page() {
  return (
    <div>
      <Main />
      <Projects />
      <About />
      <Skills />
      {/*<Contact />*/}
      <div className='flex justify-center py-12'>
        <Link href='/'>

          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp
              className='text-[#5651e5]'
              size={30}
            />
          </div>

        </Link>
      </div>
    </div>
  )
}