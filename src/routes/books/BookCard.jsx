import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  
  
  const navigate = useNavigate();

  return (
    <div className="max-w-sm rounded h-100 overflow-hidden shadow-lg bg-gray-900 transition-transform transform hover:scale-105">
      <img
        className="w-auto h-auto object-cover"
        src={book.imageUrl}
        alt={book.subject}
      />
      <div className="p-2">
        <h2 className="text-xl font-bold text-white">{book.subject}</h2>
        <p className="text-gray-400">Department: {book.department}</p>
        <p className="text-gray-400">Price: ₹{book.price}</p>
      </div>
      <div className="flex justify-between p-4">
        
        <button
          onClick={() => navigate(`/book/${book._id}`)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-200 w-full"
        >
          View Info
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    location: PropTypes.string,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default BookCard;
