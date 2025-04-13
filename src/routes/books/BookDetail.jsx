import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apirequest from "../../utils/lib/apiRequest";

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [paid, setPaid] = useState(false);
  const [showQR, setShowQR] = useState(false);

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

  if (!book)
    return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 text-white p-6 rounded-xl mt-10 shadow-md relative">
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

      {/* QR Modal */}
      {showQR && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-10 rounded-xl">
          <div className="bg-white p-4 rounded-lg text-center text-black">
            <h2 className="text-lg font-semibold mb-2">
              Scan QR to Pay ₹{book.book.price}
            </h2>
            <img
              src="/qr.png" // Replace this with your actual QR code image
              alt="QR Code"
              className="w-48 h-48 mx-auto mb-3"
            />
            <button
              onClick={() => {
                setPaid(true);
                setShowQR(false);
              }}
              className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              I Have Paid
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          if (!paid) setShowQR(true);
          else navigate("/message");
        }}
        className={`mt-4 ${
          paid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-500 cursor-not-allowed"
        } text-white py-2 px-4 rounded-lg transition-all duration-200 w-full`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default BookDetail;
