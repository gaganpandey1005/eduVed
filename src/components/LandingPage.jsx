
import Hero from './Pages/Landing Page/Hero'
import HeroCards from './Pages/Landing Page/HeroCards'
import About from './Pages/Landing Page/About'
import Services from './Pages/Landing Page/Services';
const LandingPage = () => {
  return (
    <>
          {/* Assuming Department is a component */}
          <Hero />
          <Services/>
          <HeroCards />
          <About/>
    </>
  )
}

export default LandingPage