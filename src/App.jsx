import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Layout,RequireAuth }from "./components/layout/layout";
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
<<<<<<< HEAD

import Profile from "./components/Profile";
import BuySellBooks from "./components/books/book";
import MyBooks from "./components/books/myBooks";
// import NavbarWithProfile from "./components/Navbar2";
=======
import BuySellBooks from "./components/book";
import Profile from "./components/Profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/verify-email/:token",
          element: <VerifyEmail />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/books",
          element: <BuySellBooks />,
        },
        {
          path: "/study-material",
          element: <Department />,
        },
        {
          path: "/select-sem/:department",
          element: <Semester />,
        },
        {
          path: "/subjects/:department/:semester",
          element: <Subjects />,
        },
        {
          path: "/chapter/:department/:semester/:subject",
          element: <Chapter />,
        },
        {
          path: "/uploadNotes",
          element: <UploadNotes />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/dashboard",
          element: <DashBoard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
>>>>>>> 7c0d8ff3d605f9051b60075e5765dafe119001e0

  ]);

<<<<<<< HEAD
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
         <Route path="/myBooks" element={<MyBooks/>}/>
      </Routes>
    
     
    </>
  );
};
=======
  return <RouterProvider router={router} />;
}
>>>>>>> 7c0d8ff3d605f9051b60075e5765dafe119001e0

export default App;
