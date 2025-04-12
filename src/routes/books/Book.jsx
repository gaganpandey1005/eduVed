import { useState, useEffect } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
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
    setLoading(true);
    const formData = new FormData();
    for (const key in bookData) {
      formData.append(key, bookData[key]);
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user?._id;

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

  // Fixed the filtering logic to search across multiple properties
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
          className="text-3xl text-gray-500 active:text-blue-600 cursor-pointer"
        />
      </div>

      {showSearch && (
        <div className="mb-6 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search by department, subject, location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none text-black bg-white"
          />
        </div>
      )}

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
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
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
                  onClick={() => navigate("/chat")}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
                >
                  Buy Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-xl col-span-3">No books found</p>
          )}
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto">
          <label className="text-gray-400">Select Semester:</label>
          <select
            name="semester"
            value={bookData.semester}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
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

          <label className="text-gray-400">Select Department:</label>
          <select
            name="department"
            value={bookData.department}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
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

          {["subject", "year", "price", "location"].map((field) => (
            <input
              key={field}
              name={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={bookData[field]}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
            />
          ))}

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
              className="w-full h-48 object-cover rounded-md mb-4"
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

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default BuySellBooks;
