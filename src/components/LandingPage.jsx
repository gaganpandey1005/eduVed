
import Hero from './Pages/Landing Page/Hero'
import HeroCards from './Pages/Landing Page/HeroCards'
import AboutUs from './Pages/Landing Page/AboutUs'
import Services from './Pages/Landing Page/Services';
const LandingPage = () => {
  return (
    <>
          {/* Assuming Department is a component */}
          <Hero />
          <Services/>
          <HeroCards />
          <AboutUs />
    </>
  )
}

export default LandingPage