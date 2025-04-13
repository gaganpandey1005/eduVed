import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout and Protected Route
import { Layout, RequireAuth } from "./components/layout/layout.jsx";

// Auth Pages (correct folder: routes/AuthenticationPage)
import SignUp from "./routes/AuthenticationPage/SignUp.jsx";
import SignIn from "./routes/AuthenticationPage/SignIn.jsx";
import VerifyEmail from "./routes/AuthenticationPage/VerifyEmail.jsx";

// Material Pages (correct folder: routes/Material)
import Department from "./routes/Material/Department.jsx";
import Semester from "./routes/Material/Semester.jsx";
import Subjects from "./routes/Material/Subjects.jsx";
import Chapter from "./routes/Material/Chapter.jsx";

// Book-related Pages (correct folder: routes/books)
import BuySellBooks from "./routes/books/Book.jsx";
import MyBooks from "./routes/books/myBooks.jsx";
import ChatBox from "./routes/books/chat.jsx";

// Landing Page (correct folder: routes/LandingPage)
import About from "./routes/About/About.jsx";
import LandingPage from "./routes/LandingPage/LandingPage.jsx";

// Components (correct folder: components)
import DashBoard from "./components/DashBoard.jsx";
import UploadNotes from "./components/UploadNotes.jsx";
import Profile from "./components/Profile.jsx";
import NotFoundPage from "./components/NotFound.jsx";
import "./App.css";
import BookDetail from "./routes/books/BookDetail.jsx";



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
        {
          path: "/myBooks",
          element: <MyBooks />,
        },
        {
          path: "/message",
          element: <ChatBox/>,
        },
        {
          path: "/book/:id",
          element: <BookDetail/>,
        },
      ],
    },
    // Catch-all route for any unmatched path
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
