import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apirequest from "../../utils/lib/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const { token } = useParams(); // Get token from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await apirequest.get(
          `/user/verify-email/${token}`
        );
        toast.success(response.data.message);
        setTimeout(() => navigate("/signin"), 3000);
      } catch (error) {
        toast.error(error.response?.data?.message || "Invalid or expired link.");
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-6 rounded-md shadow-lg w-96 text-center">
        {loading ? <h2 className="text-xl">Verifying Email...</h2> : <h2 className="text-xl">Redirecting...</h2>}
        <ToastContainer />
      </div>
    </div>
  );
};

export default VerifyEmail;
