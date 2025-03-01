import './assets/styles/App.css'
// import backgroundVector from './assets/images/BackgroundVector.svg'

import { Footer } from './components/common/Footer/Footer'
import { Header } from './components/common/Header/Header'
import { Menu } from './components/common/Menu/Menu'
import { CTA } from './components/sections/CTA/CTA'
import { HeroSection } from './components/sections/HeroSection/HeroSection'
import { HowItWorks } from './components/sections/HowItWorks/HowItWorks'
import { SocialPS } from './components/sections/SocialPS/SocialPS'

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <main className="container">
    <SocialPS/>
    <HowItWorks/>
    </main>
    <CTA/>
    <Footer/>
    </>
  )
}

export default App
