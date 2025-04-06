import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuySellBooks = () => {
  const navigate = useNavigate();
  const [buyMode, setBuyMode] = useState(true);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState({
    semester: "",
    department: "",
    subject: "",
    year: "",
    price: "",
    location: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://eduved-backend-tpos.onrender.com/api/shivani/all"
        );
        setBooks(response.data.books || []);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching books");
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type and size (5 MB limit)
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only JPG, JPEG, and PNG files are allowed");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should not exceed 5 MB");
        return;
      }

      setBookData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSell = async () => {
    setLoading(true);
    const formData = new FormData();
    for (const key in bookData) {
      formData.append(key, bookData[key]);
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user?._id;

    try {
      const response = await axios.post(
        `https://eduved-backend-tpos.onrender.com/api/shivani/add?userId=${id}`,
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setBookData({
          semester: "",
          department: "",
          subject: "",
          year: "",
          price: "",
          location: "",
          image: null,
        });
        setPreviewImage(null);
        return;
      } else {
        toast.error("Failed to add book");
      }
    } catch (error) {
      console.error("Error while adding book:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleMyBooksClick = () => {
    setActiveButton("myBooks");
    navigate("/myBooks");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="items-center text-4xl font-bold text-center mb-8 animate-bounce">
        {buyMode ? "Buy Books" : "Sell Your Book"}
      </h1>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex justify-between items-center mb-6">
        <div>
          <button
            onClick={() => setBuyMode(true)}
            className={`py-2 px-4 rounded-l-lg ${
              buyMode ? "bg-blue-700 text-white" : "bg-gray-600 text-gray-300"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setBuyMode(false)}
            className={`py-2 px-4 rounded-r-lg ${
              !buyMode ? "bg-blue-700 text-white" : "bg-gray-600 text-gray-300"
            }`}
          >
            Sell
          </button>
        </div>
        <button
          onClick={handleMyBooksClick}
          className={`py-2 px-4 rounded-lg text-xl ${
            activeButton === "myBooks"
              ? "bg-blue-700 text-white"
              : "bg-gray-600 text-gray-300"
          } hover:bg-blue-800 transition duration-300`}
        >
          My Books
        </button>
      </div>

      {loading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : buyMode ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {books.length > 0 ? (
            books.map((book) => (
              <div
                key={book._id}
                className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition"
              >
                <img
                  src={book.imageUrl || "https://via.placeholder.com/150"}
                  alt={book.subject}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold text-blue-400 mt-2">
                  {book.subject}
                </h2>
                <p className="text-gray-300">Department: {book.department}</p>
                <p className="text-gray-400">Price: ₹{book.price}</p>
                <p className="text-gray-400">Year: {book.year}</p>
                <p className="text-gray-400">Location: {book.location}</p>
                <p className="text-gray-400">Quantity: {book.quantity}</p>
                <button
                  onClick={() => {
                    navigate("/chat");
                  }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
                >
                  Buy Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-xl">No books available</p>
          )}
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto">
          {/* Semester Dropdown */}
          <label className="text-gray-400">Select Semester:</label>
          <select
            name="semester"
            value={bookData.semester || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Semester
            </option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
          </select>

          {/* Department Dropdown */}
          <label className="text-gray-400">Select Department:</label>
          <select
            name="department"
            value={bookData.department || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="CS">Computer Science</option>
            <option value="IT">Information Technology</option>
            <option value="ECE">Electronics & Communication</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="EE">Electrical Engineering</option>
          </select>

          {Object.keys(bookData).map(
            (key) =>
              key !== "image" &&
              key !== "semester" &&
              key !== "department" && (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={bookData[key]}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500"
                />
              )
          )}
          <label className="text-gray-400">Upload Book Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          />

          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          <button
            onClick={handleSell}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            {loading ? "Adding..." : "Add Book"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BuySellBooks;
