import { useEffect } from "react";
import Hero from "./Pages/Landing Page/Hero";
import HeroCards from "./Pages/Landing Page/HeroCards";
import About from "./Pages/Landing Page/About";
import Services from "./Pages/Landing Page/Services";

const LandingPage = () => {
  useEffect(() => {
    // Clear local storage on page load or refresh
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <HeroCards />
      <About />
    </>
  );
};

export default LandingPage;
