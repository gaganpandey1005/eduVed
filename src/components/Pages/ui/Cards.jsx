/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Cards = ({ title = "Software Engineering", image, link = "/view-notes" }) => {
  const navigate = useNavigate();

  return (
    <div className="gray ml-6 mr-6 text-center rounded-xl mt-4 ">
      {/* Card Image */}
      {image && (
        <img src={image} alt="Notes" className="w-full h-48 rounded-xl object-cover" />
      )}

      {/* Card Content */}
      <div className="p-5">
        <h2 className="text-xl  font-semibold text-white ">{title}</h2>

        {/* View Notes Button */}
        <button
          className="mt-4 w-3xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
          onClick={() => navigate(link)}
        >
        Select
        </button>
      </div>
    </div>
  );
};

export default Cards;
