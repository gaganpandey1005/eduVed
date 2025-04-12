import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apirequest from "../../utils/lib/apiRequest";
// import { BookLoaderComponent } from "../../components/BookLoaderComponent"; // Import loader component

const SignUp = () => {
  const navigate = useNavigate();

  // Refs for input fields
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const semesterRef = useRef();
  const departmentRef = useRef();

  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

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

    setIsLoading(true); // Start loader

    try {
      const response = await apirequest.post(
        "/user/register",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(
        response.data.message ||
          "User registered successfully. Please check your email to verify your account!"
      );

      // Wait 3 seconds and then navigate to Sign In
      setTimeout(() => navigate("/signin"), 3000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="flex flex-col items-center justify-center min-h-screen bg-black mt-6"
    >
      <ToastContainer />

      {/* Full-screen loader with darker background */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          {/* <BookLoaderComponent /> */}
        </div>
      )}

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
            <select
              ref={departmentRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-black text-white"
              required
            >
              <option value="" disabled selected>
                Select Department
              </option>
              <option value="CS">Computer Science</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="AIML">Artificial Intelligence & Machine Learning</option>
              <option value="DS">Data Science</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-sm text-white">Semester</label>
            <select
              ref={semesterRef}
              className="border-2 rounded-md p-2 w-full text-sm bg-black text-white"
              required
            >
              <option value="" disabled selected>
                Select Semester
              </option>
              {Array.from({ length: 8 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
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
            <label className="font-medium text-sm text-white">
              Confirm Password
            </label>
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
      </div>
    </motion.div>
  );
};

export default SignUp;
