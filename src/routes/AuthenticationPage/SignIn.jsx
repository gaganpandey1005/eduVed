import { useRef, useContext, useState } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // 🔹 Track checkbox state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await apirequest.post("/user/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const { user, token } = response.data;

        updateUser(user);

        // 🔐 Store token and user based on rememberMe
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user));

        if (rememberMe) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        toast.success(response.data.message, { position: "top-center" });

        setTimeout(() => {
          navigate("/dashboard", {
            state: { department: user.department, semester: user.semester },
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed!", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="flex flex-col items-center justify-center min-h-screen bg-black mt-6"
    >
      <ToastContainer />

      {isLoading && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          {/* Loader can be added here */}
        </div>
      )}

      <div className="group backdrop-blur-md bg-white/5 shadow-xl border border-white/20 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-white text-3xl text-center">
          Sign <span className="text-blue-600">In</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label className="text-white">E-mail</label>
            <input
              type="email"
              ref={emailRef}
              className="border-2 rounded-md p-2 w-full text-white bg-transparent"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white">Password</label>
            <input
              type="password"
              ref={passwordRef}
              className="border-2 rounded-md p-2 w-full text-white bg-transparent"
              placeholder="********"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="accent-blue-600"
            />
            <label htmlFor="rememberMe" className="text-gray-300 text-sm">
              Remember Me
            </label>
          </div>

          {!isLoading && (
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Sign In
            </button>
          )}
        </form>

        <h1
          onClick={() => navigate("/signup")}
          className="cursor-pointer mt-4 text-gray-300 hover:text-white"
        >
          Create Account? <span className="text-blue-600 ml-3">Sign Up</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default SignIn;
