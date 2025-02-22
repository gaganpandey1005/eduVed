import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/Pages/Authenticatoin page/SignUp";
import LandingPage from "./components/LandingPage";

const App = () =>
{
  const location=useLocation();
  return (
    <>
    
    {location.pathname!=="/signup"&&<Navbar/>}
   
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    
     
    </>
  );
};

export default App;
