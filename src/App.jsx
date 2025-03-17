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

  ]);

  return <RouterProvider router={router} />;
}

export default App;
