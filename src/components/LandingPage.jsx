
import Department from './Pages/Landing Page/department';
import Hero from './Pages/Landing Page/Hero'
import HeroCards from './Pages/Landing Page/HeroCards'
import AboutUs from './Pages/Landing Page/AboutUs'
const LandingPage = () => {
  return (
    <>
          {/* Assuming Department is a component */}
          <Hero />
          <Department />
          <HeroCards />
          <AboutUs />
    </>
  )
}

export default LandingPage