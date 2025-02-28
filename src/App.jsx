import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/Pages/Authenticatoin page/SignUp";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/Pages/Authenticatoin page/SignIn";
import DashBoard from "./components/DashBoard";




const App = () =>
{
  const location=useLocation();
  return (
    <>
    
      {(location.pathname !== "/signup" && location.pathname !== "/signin")&&<Navbar/>}
   
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/dashboard" element={<DashBoard/>} /> 
        
      </Routes>
    
     
    </>
  );
};

export default App;
