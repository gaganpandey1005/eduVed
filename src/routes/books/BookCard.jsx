import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Animation variants
  const cardVariants = {
    hover: {
      y: -15,
      boxShadow: "0px 15px 25px rgba(0, 0, 255, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    initial: {
      y: 0,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    }
  };

  // Price tag animation
  const priceTagVariants = {
    hover: { scale: 1.1, rotate: -3 },
    initial: { scale: 1, rotate: 0 }
  };

  // Button animation
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "#1e40af",
      transition: { duration: 0.2 }
    },
    initial: { 
      scale: 1,
      backgroundColor: "#2563eb",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  // Shimmer effect for loading state
  const shimmerVariants = {
    animate: {
      backgroundPosition: ["0px 0px", "500px 0px"],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear"
      }
    }
  };

  useEffect(() => {
    // Clean up URL object when component unmounts
    return () => {
      if (book.imageUrl && book.imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(book.imageUrl);
      }
    };
  }, [book.imageUrl]);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.div
      className="max-w-sm rounded-t-3xl rounded-b-2xl  ed-fu overflow-hidden shadow-lg bg-gray-900 h-full flex flex-col"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layoutId={`book-card-${book._id}`}
    >
      {/* Image container with fixed height */}
      <div className="relative w-full h-56 overflow-hidden">
        {!imageLoaded && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:500px_100%]"
            variants={shimmerVariants}
            animate="animate"
          />
        )}
        
        {imageError ? (
          <div className="flex items-center justify-center h-full bg-gray-800 text-gray-400">
            <span className="text-lg">No Image Available</span>
          </div>
        ) : (
          <motion.img
            className="w-full h-full object-cover"
            src={book.imageUrl || "/placeholder-book.jpg"}
            alt={book.subject}
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        
        {/* Floating price tag */}
        <motion.div 
          className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg font-bold"
          variants={priceTagVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          ₹{book.price}
        </motion.div>
      </div>

      {/* Book information */}
      <div className="p-4 flex-grow flex flex-col">
        <motion.h2 
          className="text-xl font-bold text-white mb-2 truncate"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {book.subject}
        </motion.h2>
        
        <motion.div 
          className="text-gray-400 flex-grow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="mb-1 flex items-center">
            <span className="w-4 h-4 inline-block bg-blue-500 rounded-full mr-2"></span>
            {book.department}
          </p>
          {book.year && (
            <p className="mb-1 flex items-center">
              <span className="w-4 h-4 inline-block bg-green-500 rounded-full mr-2"></span>
              Year: {book.year}
            </p>
          )}
          {book.location && (
            <p className="mb-1 flex items-center">
              <span className="w-4 h-4 inline-block bg-yellow-500 rounded-full mr-2"></span>
              {book.location}
            </p>
          )}
        </motion.div>
      </div>

      {/* Button container */}
      <div className="p-4 pt-0">
        <motion.button
          onClick={() => navigate(`/book/${book._id}`)}
          className="bg-blue-600 text-white py-3 px-4 rounded-lg w-full font-semibold flex items-center justify-center"
          variants={buttonVariants}
          whileTap="tap"
        >
          <span>View Details</span>
          <svg 
            className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
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