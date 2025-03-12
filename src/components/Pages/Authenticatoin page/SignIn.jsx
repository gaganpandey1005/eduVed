import { useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  // Using refs for form fields
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post("http://localhost:8000/api/user/login", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Important for authentication
      });

      alert(response.data.message); // Show success message
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Invalid credentials!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="flex flex-col items-center justify-center min-h-screen bg-black mt-6"
    >
      <div className="group backdrop-blur-md bg-white/5 shadow-xl border border-white/20 p-8 rounded-lg w-full max-w-md transition-all duration-300 relative hover:shadow-[inset_0_0_20px_5px_rgba(59,130,246,0.5)] active:shadow-[inset_0_0_20px_5px_rgba(59,130,246,0.5)]">
        <div className="flex justify-center">
          <h1 className="font-semibold text-white text-3xl mb-6 text-center">
            Sign<span className="text-blue-600"> In</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">E-mail</label>
            <input
              type="email"
              ref={emailRef}
              className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Password</label>
            <input
              type="password"
              ref={passwordRef}
              className="focus:border-blue-600 focus:outline-none border-2 rounded-md p-2 w-full text-sm bg-transparent text-white placeholder-gray-300"
              placeholder="********"
              required
            />
          </div>

          <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all duration-300">
            Sign In
          </button>
        </form>

        <h1
          onClick={() => navigate("/signup")}
          className="cursor-pointer mt-4 text-gray-300 hover:text-white transition-all duration-300"
        >
          Create Account? <span className="text-blue-600 ml-3">Sign Up</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default SignIn;
