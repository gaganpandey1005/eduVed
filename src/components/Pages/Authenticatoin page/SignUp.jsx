import React from "react";
import { motion } from "framer-motion"; // Corrected motion import
import { easeOut } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .5, ease: easeOut }}
      className="flex flex-col items-center justify-center min-h-screen bg-black mt-6 "
    >
      <div className="group backdrop-blur-md bg-white/5 shadow-xl border border-white/20 p-8 rounded-lg w-full max-w-md transition-all duration-300 relative hover:shadow-[inset_0_0_20px_5px_rgba(59,130,246,0.5)] active:shadow-[inset_0_0_20px_5px_rgba(59,130,246,0.5)]">
        <div className="flex justify-center">
          <h1 className="font-semibold rounded w-40  text-white text-3xl mb-6 text-center">
            Sign
            <span className="text-blue-600 font-semibold rounded  w-40  text-3xl mb-6 text-center">
              Up
            </span>
          </h1>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-sm text-white">
                Full Name
              </label>
              <input
                type="text"
                className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
                placeholder="Pratham"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="font-medium text-sm text-white">
                Last Name
              </label>
              <input
                type="text"
                className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
                placeholder="Pandey"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Department</label>
            <input
              type="text"
              className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
              placeholder="Eg: Information Technology"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Semester</label>
            <input
              type="number"
              className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
              placeholder="Eg: 5"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">E-mail</label>
            <input
              type="email"
              className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
              placeholder="example@email.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Password</label>
            <input
              type="password"
              className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
              placeholder="********"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">
              Confirm Password
            </label>
            <input
              type="password"
              className="border-2 focus:border-blue-600 focus:outline-none rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
              placeholder="********"
            />
          </div>

          <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all duration-300">
            Sign Up
          </button>
        </form>
      <h1
        onClick={() => navigate("/signin")}
        className="cursor-pointer mt-4 text-gray-300 hover:text-white transition-all duration-300"
      >
        Already have an account?
        <span className="text-blue-600 ml-3">
          Sign In
        </span>
      </h1>
      </div>

    </motion.div>
  );
};

export default SignUp;
