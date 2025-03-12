import { useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();

  // Refs for input fields
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const semesterRef = useRef();
  const departmentRef = useRef();

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      toast.error("Passwords do not match!");
      return;
    }
  
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      semester: semesterRef.current.value,
      department: departmentRef.current.value,
    };
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/register",
        formData,
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
  
      toast.success(response.data.message || "Please check your email for verification!");
      
      // Wait 3 seconds and then navigate to Sign In
      setTimeout(() => navigate("/signin"), 3000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="flex flex-col items-center justify-center min-h-screen bg-black mt-6"
    >
      <div className="group backdrop-blur-md bg-white/5 shadow-xl border border-white/20 p-8 rounded-lg w-full max-w-md">
        <div className="flex justify-center">
          <h1 className="font-semibold text-white text-3xl mb-6 text-center">
            Sign<span className="text-blue-600"> Up</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Full Name</label>
            <input
              type="text"
              ref={fullNameRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-transparent text-white"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Department</label>
            <input
              type="text"
              ref={departmentRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-transparent text-white"
              placeholder="Department Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Semester</label>
            <input
              type="number"
              ref={semesterRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-transparent text-white"
              placeholder="Semester"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">E-mail</label>
            <input
              type="email"
              ref={emailRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-transparent text-white"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Password</label>
            <input
              type="password"
              ref={passwordRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-transparent text-white"
              placeholder="********"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Confirm Password</label>
            <input
              type="password"
              ref={confirmPasswordRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-transparent text-white"
              placeholder="********"
              required
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
          <span className="text-blue-600 ml-3">Sign In</span>
        </h1>
        <ToastContainer />
      </div>
    </motion.div>
  );
};

export default SignUp;
