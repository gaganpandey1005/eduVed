import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (page, path) => {
    setActive(page);
    navigate(path);
    setMenuOpen(false); // Close menu on selection (for mobile)
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="flex z-50 items-center justify-between bg-black text-white p-5 relative">
        {/* Logo */}
        <h1
          className="text-lg font-bold cursor-pointer hover:text-blue-600 transition"
          onClick={() => handleNavigation("Home", "/")}
        >
          EduVed
        </h1>

        {/* Hamburger Menu Button (Mobile) */}
        <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Study Material", path: "/study-material" },
            { name: "Books", path: "/books" },
            { name: "About", path: "/about" },
          ].map((item) => (
            <h1
              key={item.name}
              className={`cursor-pointer px-2 relative transition ${
                active === item.name ? "text-blue-600" : ""
              }`}
              onClick={() => handleNavigation(item.name, item.path)}
            >
              {item.name}
              {active === item.name && (
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></div>
              )}
            </h1>
          ))}
        </div>

        {/* Profile / Auth Links (Desktop) */}
        {isLoggedIn ? (
          <div
            className="hidden md:flex items-center gap-x-4 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <div className="avatar h-10 w-10 rounded-full">
              <CgProfile className="h-10 w-10" />
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-x-4">
            <h1
              className="cursor-pointer px-4 py-2 border-2 border-white rounded-md text-white transition-all duration-300 hover:bg-white hover:text-black"
              onClick={() => handleNavigation("Sign In", "/signin")}
            >
              Sign In
            </h1>

            <h1
              className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md transition-all duration-300 hover:scale-105"
              onClick={() => handleNavigation("Sign Up", "/signup")}
            >
              Sign Up
            </h1>
          </div>
        )}
      </div>

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

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-start p-6 gap-y-6 mt-12">
          {[
            { name: "Home", path: "/" },
            { name: "Study Material", path: "/study-material" },
            { name: "Books", path: "/books" },
            { name: "About", path: "/about" },
          ].map((item) => (
            <h1
              key={item.name}
              className={`cursor-pointer text-lg w-full ${
                active === item.name ? "text-blue-600 font-bold" : ""
              }`}
              onClick={() => handleNavigation(item.name, item.path)}
            >
              {item.name}
            </h1>
          ))}

          {/* Profile / Auth Links (Mobile) */}
          {isLoggedIn ? (
            <div
              className="flex items-center gap-x-4 cursor-pointer mt-4"
              onClick={() => navigate("/profile")}
            >
              <CgProfile className="h-10 w-10" />
              <h1 className="text-lg">Profile</h1>
            </div>
          ) : (
            <div className="flex flex-col gap-y-4 w-full mt-4">
              <h1
                className="cursor-pointer px-4 py-2 border-2 border-white rounded-md text-white transition-all duration-300 hover:bg-white hover:text-black w-full text-center"
                onClick={() => handleNavigation("Sign In", "/signin")}
              >
                Sign In
              </h1>

              <h1
                className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md transition-all duration-300 hover:scale-105 w-full text-center"
                onClick={() => handleNavigation("Sign Up", "/signup")}
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
