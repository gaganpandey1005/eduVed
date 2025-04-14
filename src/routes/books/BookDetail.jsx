import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { useNavigate } from "react-router-dom";
const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [paid, setPaid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await apirequest.get(`/shivani/${id}`);
        setBook(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch book:", err);
      }
    };

    fetchBook();
  }, [id]);

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
      alert("Razorpay SDK failed to load.");
      return;
    }

    try {
      const { data } = await apirequest.post("/razorpay/create-order", {
        bookId: id,
      });

      // Get the user data from sessionStorage and parse it
      const userData = JSON.parse(sessionStorage.getItem("user"));

      // Extract the email from the user data
      const userEmail = userData ? userData.email : "user@example.com"; // Fallback email if not found

      // Get the user name (optional if you want to use it)
      const userName = userData ? userData.fullName : "eduVed User"; // Default to "eduVed User"

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "eduVed", // You can replace this with dynamic app name if needed
        description: "Book Purchase",
        order_id: data.orderId,
        handler: function (response) {
          setPaid(true);
          setShowModal(true); // Show modal after payment
          console.log("Payment Success:", response);
        },
        prefill: {
          name: userName, // Use dynamic or static name as per your requirement
          email: userEmail, // Use the email from sessionStorage
        },
        theme: {
          color: "#1D4ED8",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment failed", err);
    }
  };

  if (!book)
    return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 text-white p-6 rounded-xl mt-10 shadow-md relative">
      {/* Book Info */}
      <img
        src={book.book.imageUrl || "null"}
        alt={book.subject}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold text-blue-400 mb-2">
        {book.book.subject}
      </h1>
      <p className="text-gray-300">Department: {book.book.department}</p>
      <p className="text-gray-300">Price: ₹{book.book.price}</p>
      <p className="text-gray-300">Year: {book.book.year}</p>
      <p className="text-gray-300">Location: {book.book.location}</p>

      <p className={`text-gray-300 ${!paid && "blur-sm"}`}>
        Sold By: {book.userEmail}
      </p>

      {book.book.quantity && (
        <p className="text-gray-300">Quantity: {book.book.quantity}</p>
      )}

      <button
        onClick={handlePayment}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-200 w-full"
      >
        Buy Now
      </button>

      {/* Payment Success Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold mb-4 text-green-700">
              Payment Successful!
            </h2>
            <p className="mb-2">
              Sold By: <strong>{book.userEmail}</strong>
            </p>
            <p className="mb-4">
              You can chat with <strong>{book.userEmail}</strong> for buying
              book.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/message");
              }}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
