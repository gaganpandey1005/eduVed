
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/Pages/Authenticatoin page/SignUp";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/Pages/Authenticatoin page/SignIn";
import DashBoard from "./components/DashBoard";
import Department from "./components/Pages/Material/Department";
import Semester from "./components/Pages/Material/Semester";  
import Subjects from "./components/Pages/Material/Subjects";
import Chapter  from "./components/Pages/Material/Chapter";
import UploadNotes from "./components/UploadNotes";
import VerifyEmail from "./components/Pages/Authenticatoin page/VerifyEmail";
import About from "./components/Pages/Landing Page/About";

import Profile from "./components/Profile";
import BuySellBooks from "./components/book";
// import NavbarWithProfile from "./components/Navbar2";


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
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<DashBoard/>} /> 
        <Route path="/study-material" element={<Department />} />
        <Route path="/select-sem/:department" element={<Semester />} />
        <Route path="/subjects/:department/:semester" element={<Subjects />} />
        <Route path="/chapter/:department/:semester/:subject"element ={<Chapter/>}/>
         <Route path="/uploadNotes" element={<UploadNotes/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/books" element={<BuySellBooks/>}/>
      </Routes>
    
     
    </>
  );
};

export default App;
