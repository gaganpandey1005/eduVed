/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Cards = ({ title, image, link }) => {
  const navigate = useNavigate();

  // Ensure the link is a proper URL
  const handleClick = () => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.open(link, "_blank"); // Open external links
    } else {
      navigate(link); // Navigate for internal links
    }
  };

  return (
    <div className="bg-gray-800 mx-2 sm:mx-4 text-center rounded-xl mt-4 shadow-lg transition-transform transform hover:scale-105 sm:hover:scale-110 duration-300 ease-in-out hover:shadow-2xl animate-slide-up">
      {/* Card Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 rounded-t-xl "
        />
      )}

      {/* Card Content */}
      <div className="p-3 sm:p-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white">
          {title}
        </h2>

        {/* View Notes Button */}
        <button
          className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          onClick={handleClick}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Cards;
