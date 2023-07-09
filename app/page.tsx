import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Dennis | Fullstack Developer</title>
        <meta name="description" content="I’m a full stack developer specializing in Java" />
        <link rel="icon" href="/assets/navLogo.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
