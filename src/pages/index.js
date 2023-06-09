import Head from 'next/head'    
import About from '../Components/About';
import Experience from '../Components/Experience';
import Education from '../Components/Education'; 
import Sidebar from '../Components/Sidebar';
import Skills from '../Components/Skills';
import Certifications from '../Components/Certifications';
import Profileinfo from '../Components/Profileinfo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sridhar's Resume</title>
        <meta name="description" content="Sridhar Frontend Developer Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>
      <main>  
       <Sidebar/> 
        <div className='main'>
          <Profileinfo/>
        <About/>
        <Experience/> 
        <Education/> 
        <Skills/>
        <Certifications/>
        </div>
        
      </main>
    </>
  )
}
