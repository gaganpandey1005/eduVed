import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Pages/Landing Page/Hero'
import AboutUs from './components/Pages/Landing Page/AboutUs'
import HeroCards from './components/Pages/Landing Page/HeroCards'
const App = () => {
  return (
    <>
    
    <Navbar/>
    <Hero/>
    <HeroCards/>
    <AboutUs/>
    </>
  )
}

export default App