import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu icons
import { Navigate, useNavigate } from "react-router-dom";
const Navbar = ({ setIsMenuOpen }) => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
const navigate=useNavigate();
  // Function to toggle menu and update state in parent
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex z-50 items-center justify-between bg-black text-white p-5 relative"
    >
      {/* Logo with Tap Animation */}
      <motion.h1
        className="text-lg font-bold cursor-pointer"
        whileTap={{ scale: 0.9, color: "#facc15" }} // Yellow on touch
      >
        EduVed
      </motion.h1>

      {/* Hamburger Menu (For Mobile) */}
      <motion.button
        onClick={toggleMenu}
        className="text-white text-2xl md:hidden"
        whileTap={{ scale: 0.8 }} // Shrink effect on tap
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </motion.button>

      {/* Desktop Navigation Links with Hover Animation */}
      <motion.div className="hidden md:flex items-center gap-x-6">
        {["Home", "Study Material", "Books"].map((item) => (
          <motion.h1
            key={item}
            className="cursor-pointer relative px-2"
            onClick={() => setActive(item)}
            whileHover={{ scale: 1.1, color: "#facc15" }} // Hover effect
            whileTap={{ scale: 0.9 }}
          >
            {item}
            {active === item && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-500"
                transition={{ type: "spring", stiffness: 350, damping: 40 }}
              />
            )}
          </motion.h1>
        ))}
      </motion.div>

      {/* Buttons with Animation */}
      <div className="hidden md:flex items-center gap-x-4">
        <motion.button
          whileHover={{ scale: 1.05, background: "#2072AF", color: "#ffff" }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border border-gray-600 rounded-md hover:cursor-pointer"
          onClick={()=>navigate('/signup')}
        >
          Sign Up
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#2072AF] p-2 rounded-md hover:bg-blue-700 transition"
        >
          <FaCartArrowDown className="text-[23px]" />
        </motion.button>
      </div>

      {/* Mobile Menu Animation */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center p-5 space-y-4 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {["Home", "Study Material", "Books"].map((item) => (
          <motion.h1
            key={item}
            className="cursor-pointer text-lg"
            onClick={() => {
              setActive(item);
              toggleMenu();
            }}
            whileTap={{ scale: 0.9, color: "#facc15" }} // Shrink + color change on tap
          >
            {item}
          </motion.h1>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
