import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [paid, setPaid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const res = await apirequest.get(`/shivani/${id}`);
        setBook(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch book:", err);
        toast.error("Failed to load book details");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  useEffect(() => {
    // Handle clicking outside modal to close it
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      toast.error("Razorpay SDK failed to load. Please try again later.");
      return;
    }

    try {
      toast.info("Preparing payment...", { autoClose: 2000 });
      
      const { data } = await apirequest.post("/razorpay/create-order", {
        bookId: id,
      });

      // Get the user data from sessionStorage and parse it
      const userData = JSON.parse(sessionStorage.getItem("user"));

      // Extract the email from the user data
      const userEmail = userData ? userData.email : "user@example.com"; // Fallback email if not found

      // Get the user name
      const userName = userData ? userData.fullName : "eduVed User"; // Default to "eduVed User"

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "eduVed",
        description: "Book Purchase",
        order_id: data.orderId,
        handler: function (response) {
          setPaid(true);
          setShowModal(true); // Show modal after payment
          console.log("Payment Success:", response);
        },
        prefill: {
          name: userName,
          email: userEmail,
        },
        theme: {
          color: "#3366FF",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment failed", err);
      toast.error("Payment setup failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-t-4 border-l-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
          <p className="text-white text-xl font-medium">Loading book details...</p>
        </motion.div>
      </div>
    );
  }

  if (!book) {
    return (
      <motion.div 
        className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center p-8 bg-gray-800 rounded-xl shadow-2xl">
          <h2 className="text-2xl text-red-400 mb-4">Book Not Found</h2>
          <p className="text-white mb-6">Sorry, we couldnt find the book youre looking for.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    );
  }

  const bookData = book.book;

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Books
        </motion.button>

        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="lg:flex">
            {/* Book Image Section */}
            <div className="lg:w-2/5 relative">
              {!imageLoaded && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:500px_100%]"
                  animate={{ 
                    backgroundPosition: ["0px 0px", "500px 0px"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear"
                  }}
                />
              )}
              <motion.img
                src={bookData.imageUrl || "/placeholder-book.jpg"}
                alt={bookData.subject}
                className={`w-full h-80 lg:h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.target.src = "/placeholder-book.jpg";
                  setImageLoaded(true);
                }}
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: imageLoaded ? "blur(0px)" : "blur(10px)" }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute top-4 right-4">
                <motion.div
                  className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    delay: 0.3
                  }}
                >
                  ₹{bookData.price}
                </motion.div>
              </div>
            </div>

            {/* Book Details Section */}
            <div className="lg:w-3/5 p-6 lg:p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  {bookData.subject}
                </h1>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center bg-gray-700 bg-opacity-40 p-3 rounded-lg">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-300 w-24">Department:</span>
                    <span className="text-white font-medium">{bookData.department}</span>
                  </div>
                  
                  <div className="flex items-center bg-gray-700 bg-opacity-40 p-3 rounded-lg">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-300 w-24">Year:</span>
                    <span className="text-white font-medium">{bookData.year}</span>
                  </div>
                  
                  <div className="flex items-center bg-gray-700 bg-opacity-40 p-3 rounded-lg">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                    <span className="text-gray-300 w-24">Location:</span>
                    <span className="text-white font-medium">{bookData.location}</span>
                  </div>
                  
                  {bookData.quantity && (
                    <div className="flex items-center bg-gray-700 bg-opacity-40 p-3 rounded-lg">
                      <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                      <span className="text-gray-300 w-24">Quantity:</span>
                      <span className="text-white font-medium">{bookData.quantity}</span>
                    </div>
                  )}

                  <div className="flex items-center bg-gray-700 bg-opacity-40 p-3 rounded-lg">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-300 w-24">Seller:</span>
                    <span className={`font-medium ${!paid ? "blur-sm text-gray-400" : "text-white"}`}>
                      {book.userEmail || "Contact after purchase"}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <motion.button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Buy Now</span>
                    <svg className="ml-2 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              ref={modalRef}
              className="bg-gradient-to-b from-gray-100 to-white text-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-md relative"
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <motion.div 
                  className="bg-green-500 rounded-full p-4 shadow-lg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-center text-green-700 mt-6">
                Payment Successful!
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-lg mb-2">
                  <span className="font-medium text-gray-600">Seller:</span> <span className="font-bold">{book.userEmail}</span>
                </p>
                <p className="text-gray-600">
                  You can now contact the seller to arrange pickup or delivery of your book.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <motion.button
                  onClick={() => navigate("/message")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Chat with Seller
                </motion.button>
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer position="top-center" autoClose={3000} />
    </motion.div>
  );
};

export default BookDetail;