import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apirequest from "../../utils/lib/apiRequest";

const BookDetail = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);

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
    <div className="max-w-2xl mx-auto bg-gray-800 text-white p-6 rounded-xl mt-10 shadow-md">
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
      <p className="text-gray-300">Sold By: {book.userEmail}</p>
      {book.book.quantity && (
        <p className="text-gray-300">Quantity: {book.book.quantity}</p>
      )}
      <button
        onClick={() => navigate(`/message`)}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-200 w-full"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BookDetail;
