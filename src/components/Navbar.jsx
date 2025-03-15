import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [showLogout, setShowLogout] = useState(false);

//   const handleClick = () => {
//     setShowLogout(!showLogout); // Toggle logout message
//   };

//   return (
//     <div className="relative">
//       <div className="profile cursor-pointer" onClick={handleClick}>
//         <div className="avatar h-10 w-10 rounded-full">
//           <img className="h-10 w-10 rounded-full" src="/src/assets/images/user.png" alt="User" />
//         </div>
//       </div>
//       {showLogout && (
//         <div className="absolute right-0 mt-2 p-2 bg-white text-black border rounded shadow-lg">
//           <p className="text-red-600 cursor-pointer">Logout</p>
//         </div>
//       )}
//     </div>
//   );
// };

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (page, path) => {
    setActive(page);
    navigate(path);
    setMenuOpen(false); // Close menu on mobile after navigation
  };

  return (
    <div className="flex z-50 items-center justify-between bg-black text-white p-5 relative">
      {/* Logo */}
      <h1
        className="text-lg font-bold cursor-pointer hover:text-blue-600 transition"
        onClick={() => handleNavigation("Home", "/")}
      >
        EduVed
      </h1>

      {/* Hamburger Menu (For Mobile) */}
      <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-x-6">
        {[
          { name: "Home", path: "/" },
          {name: "Dashboard", path: "/dashboard"},
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

      {/* Profile Component */}
      {/* <Profile /> */}

      {/* Desktop Buttons */}
       <div className="hidden md:flex items-center gap-x-4">
      <button
          className="px-4 py-2 border border-gray-600 rounded-md hover:bg-blue-600 transition"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>

        <button
          className="px-4 py-2 border border-gray-600 rounded-md hover:bg-blue-600 transition"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div> 

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[75%] h-full bg-black text-white flex flex-col items-center p-5 space-y-6 md:hidden shadow-lg">
          {[
            { name: "Home", path: "/" },
            { name: "Study Material", path: "/study-material" },
            { name: "Books", path: "/books" },
            { name: "Sign Up", path: "/signup" },
            { name: "Sign In", path: "/signin" },
          ].map((item) => (
            <h1
              key={item.name}
              className="cursor-pointer text-lg hover:text-amber-500 transition"
              onClick={() => handleNavigation(item.name, item.path)}
            >
              {item.name}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
