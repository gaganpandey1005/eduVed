import { useState, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  const isLoggedIn = !!currentUser;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after selection
  };

  const menuItems = [
    { name: "Home", path: "/" },
    ...(isLoggedIn ? [{ name: "My Subjects", path: "/dashboard" }] : []),
    { name: "Study Material", path: "/study-material" },
    { name: "Books", path: "/books" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      {/* Fixed Navbar Container with reduced height */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black text-white py-2 px-5 shadow-md h-18">
        {/* Logo - medium size */}
        <div className=" rounded-full p-0 flex items-start justify-center" onClick={() => navigate("/")}>
          <img src="src/assets/images/logo.png" className="h-16 w-auto" alt="Logo" />
        </div>
        
        {/* Hamburger Menu Button (Mobile) */}
        <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation Links - centered and properly spaced */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          {menuItems.map((item) => (
            <h1
              key={item.name}
              className={`cursor-pointer px-3 relative transition hover:text-blue-400 ${
                location.pathname === item.path ? "text-blue-600" : ""
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
              {location.pathname === item.path && (
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></div>
              )}
            </h1>
          ))}
        </div>

        {/* Profile / Auth Links (Desktop) - keeping original size */}
        {isLoggedIn ? (
          <div className="hidden md:flex items-center gap-x-4">
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <CgProfile className="h-8 w-8" />
              <span>Profile</span>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate("/message")}
            >
              Message
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-x-4">
            <h1
              className="cursor-pointer px-4 py-2 border-2 border-white rounded-md transition hover:bg-white hover:text-black"
              onClick={() => handleNavigation("/signin")}
            >
              Sign In
            </h1>
            <h1
              className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md transition hover:scale-105"
              onClick={() => handleNavigation("/signup")}
            >
              Sign Up
            </h1>
          </div>
        )}
      </div>

      {/* Empty space to offset fixed navbar */}
      <div className="h-16"></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50 shadow-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={toggleMenu}
        >
          <FiX />
        </button>

        {/* Mobile Menu Logo */}
        <div className="flex justify-center mt-8 mb-4">
          <img src="src/assets/images/logo.png" className="h-10" alt="Logo" />
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-start p-6 gap-y-6 mt-4">
          {menuItems.map((item) => (
            <h1
              key={item.name}
              className={`cursor-pointer text-lg w-full ${
                location.pathname === item.path ? "text-blue-600 font-bold" : ""
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </h1>
          ))}

          {/* Profile / Auth Links (Mobile) */}
          {isLoggedIn ? (
            <div className="flex flex-col gap-y-4 w-full mt-4">
              <div
                className="flex items-center gap-x-4 cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <CgProfile className="h-10 w-10" />
                <h1 className="text-lg">Profile</h1>
              </div>
              <button
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                onClick={() => handleNavigation("/message")}
              >
                Message
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-y-4 w-full mt-4">
              <h1
                className="cursor-pointer px-4 py-2 border-2 border-white rounded-md transition hover:bg-white hover:text-black w-full text-center"
                onClick={() => handleNavigation("/signin")}
              >
                Sign In
              </h1>
              <h1
                className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md transition hover:scale-105 w-full text-center"
                onClick={() => handleNavigation("/signup")}
              >
                Sign Up
              </h1>
            </div>
          )}
        </div>
      </div>

      {/* Background Overlay when Menu is Open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default NavBar;