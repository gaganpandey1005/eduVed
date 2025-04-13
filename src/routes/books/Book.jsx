import { useState, useEffect } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import BookCard from "./BookCard"; // Adjust the import path as needed

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
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await apirequest.get("/shivani/all");
        setBooks(response.data.books || []);
        
        
        
        
      } catch (error) {
        toast.error("Error fetching books");
        console.error("Error fetching books:", error);
      } finally {
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
    // Validate required fields
    const requiredFields = [
      "semester",
      "department",
      "subject",
      "price",
      "location",
    ];
    const missingFields = requiredFields.filter((field) => !bookData[field]);

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    if (!bookData.image) {
      toast.error("Please upload an image of the book");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    for (const key in bookData) {
      formData.append(key, bookData[key]);
    }
    const user = JSON.parse(sessionStorage.getItem("user"));
    const id = user?._id;

    if (!id) {
      toast.error("You must be logged in to sell books");
      setLoading(false);
      return;
    }

    try {
      const response = await apirequest.post(
        `/shivani/add?userId=${id}`,
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

        // Refresh book list after adding new book
        const updatedResponse = await apirequest.get("/shivani/all");
        setBooks(updatedResponse.data.books || []);
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

  // Filtering logic for search
  const filteredBooks = books.filter((book) => {
    if (!searchTerm) return true;

    const term = searchTerm.toLowerCase();
    return (
      (book.department && book.department.toLowerCase().includes(term)) ||
      (book.subject && book.subject.toLowerCase().includes(term)) ||
      (book.location && book.location.toLowerCase().includes(term)) ||
      (book.year && book.year.toString().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="w-full max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold animate-bounce">
          {buyMode ? "Buy Books" : "Sell Your Book"}
        </h1>
        <FiSearch
          onClick={toggleSearch}
          className="text-3xl text-gray-500 active:text-blue-600 cursor-pointer hover:text-gray-300 transition"
        />
      </div>

      {showSearch && (
        <div className="mb-6 w-full max-w-md mx-auto">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search by department, subject, location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 text-black bg-white"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div>
          <button
            onClick={() => setBuyMode(true)}
            className={`py-2 px-6 rounded-l-lg transition duration-300 ${
              buyMode
                ? "bg-blue-700 text-white"
                : "bg-gray-600 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setBuyMode(false)}
            className={`py-2 px-6 rounded-r-lg transition duration-300 ${
              !buyMode
                ? "bg-blue-700 text-white"
                : "bg-gray-600 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Sell
          </button>
        </div>
        <button
          onClick={handleMyBooksClick}
          className={`py-2 px-6 rounded-lg text-lg ${
            activeButton === "myBooks"
              ? "bg-blue-700 text-white"
              : "bg-gray-600 text-gray-300"
          } hover:bg-blue-800 transition duration-300`}
        >
          My Books
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : buyMode ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookCard key={book._id} book={book} />)
          ) : (
            <p className="text-center text-xl col-span-3 py-12">
              No books found
            </p>
          )}
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
            Sell Your Book
          </h2>

          <div className="mb-4">
            <label className="text-gray-400 block mb-1">Select Semester:</label>
            <select
              name="semester"
              value={bookData.semester}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Semester
              </option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Semester
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="text-gray-400 block mb-1">
              Select Department:
            </label>
            <select
              name="department"
              value={bookData.department}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Department
              </option>
              {["CS", "IT", "ECE", "ME", "CE", "EE"].map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "CS"
                    ? "Computer Science"
                    : dept === "IT"
                    ? "Information Technology"
                    : dept === "ECE"
                    ? "Electronics & Communication"
                    : dept === "ME"
                    ? "Mechanical Engineering"
                    : dept === "CE"
                    ? "Civil Engineering"
                    : "Electrical Engineering"}
                </option>
              ))}
            </select>
          </div>

          {["subject", "year", "price", "location"].map((field) => (
            <div key={field} className="mb-4">
              <label className="text-gray-400 block mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                name={field}
                type={field === "price" || field === "year" ? "number" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={bookData[field]}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="mb-6">
            <label className="text-gray-400 block mb-1">
              Upload Book Image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 bg-gray-700 text-white rounded cursor-pointer"
            />
            {previewImage && (
              <div className="mt-3">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleSell}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-semibold"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Adding...
              </span>
            ) : (
              "Add Book"
            )}
          </button>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default BuySellBooks;
