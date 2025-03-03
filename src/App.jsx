import { useEffect, useState } from 'react'
import './assets/styles/App.css'

import { Footer } from './components/common/Footer/Footer'
import { Header } from './components/common/Header/Header'
import { CTA } from './components/sections/CTA/CTA'
import { HeroSection } from './components/sections/HeroSection/HeroSection'
import { HowItWorks } from './components/sections/HowItWorks/HowItWorks'
import { SocialPS } from './components/sections/SocialPS/SocialPS'

function App() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <Header  windowSize={windowSize}/>
    <HeroSection windowSize={windowSize}/>
    {/* <main className="container">
    <SocialPS/>
    <HowItWorks/>
    </main>
    <CTA/>
    <Footer/> */}
    </>
  )
}

export default App
