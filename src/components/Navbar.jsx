import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () =>
{
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle mobile menu
  const toggleMenu = () =>
  {
    setMenuOpen(!menuOpen);
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
        whileTap={{ scale: 0.9, color: "#facc15" }}
        onClick={() => navigate("/")}
      >
        EduVed
      </motion.h1>

      {/* Hamburger Menu (For Mobile) */}
      <motion.button
        onClick={toggleMenu}
        className="text-white text-2xl md:hidden"
        whileTap={{ scale: 0.8 }}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </motion.button>

      {/* Desktop Navigation Links */}
      <motion.div className="hidden md:flex items-center gap-x-6">
        {["Home", "Study Material", "Books"].map((item) => (
          <motion.h1
            key={item}
            className="cursor-pointer relative px-2"
            onClick={() => setActive(item)}
            whileHover={{ scale: 1.1, color: "#facc15" }}
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

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-x-4">
        <motion.button
          whileHover={{ scale: 1.05, background: "#2072AF", color: "#ffff" }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border border-gray-600 rounded-md"
          onClick={() => navigate("/signup")}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 w-[75%] h-full bg-black text-white flex flex-col items-center p-5 space-y-6 md:hidden shadow-lg"
        >
          {["Home", "Study Material", "Books", "Sign Up", "Sign In"].map((item) => (
            <motion.h1
              key={item}
              className="cursor-pointer text-lg"
              onClick={() =>
              {
                setActive(item);
                toggleMenu();
                if (item === "Sign Up") navigate("/signup");
                if (item === "Sign Ip") navigate("/signin");
              }}
              whileTap={{ scale: 0.9, color: "#facc15" }}
            >
              {item}
            </motion.h1>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
