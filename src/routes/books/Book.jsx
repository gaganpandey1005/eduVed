import { useState, useEffect, useRef } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FiSearch, FiBookOpen, FiPlus, FiUpload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import BookCard from "./BookCard";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const toggleSearch = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    fetchBooks();
  }, []);

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

    setIsSubmitting(true);
    const formData = new FormData();
    for (const key in bookData) {
      formData.append(key, bookData[key]);
    }
    const user = JSON.parse(sessionStorage.getItem("user"));
    const id = user?._id;

    if (!id) {
      toast.error("You must be logged in to sell books");
      setIsSubmitting(false);
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
        await fetchBooks();
        // Switch to Buy mode to see the newly added book
        setBuyMode(true);
      } else {
        toast.error("Failed to add book");
      }
    } catch (error) {
      console.error("Error while adding book:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div 
        className="w-full max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {buyMode ? "Campus Book Exchange" : "List Your Book"}
          </motion.h1>
          
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              onClick={toggleSearch}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiSearch className="text-xl" />
            </motion.button>
            
            <motion.button
              onClick={handleMyBooksClick}
              className={`bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-all ${
                activeButton === "myBooks" ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiBookOpen className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showSearch && (
          <motion.div 
            className="mb-8 w-full max-w-xl mx-auto"
            variants={searchVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-4 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search by department, subject, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 text-gray-800 bg-white shadow-lg text-lg"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="w-full max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-between items-center">
          <div className="bg-gray-800 rounded-xl p-1 shadow-lg">
            <motion.button
              onClick={() => setBuyMode(true)}
              className={`py-3 px-8 rounded-lg transition-all duration-300 font-medium ${
                buyMode
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              whileHover={!buyMode ? { scale: 1.05 } : {}}
              whileTap={!buyMode ? { scale: 0.95 } : {}}
            >
              Browse Books
            </motion.button>
            <motion.button
              onClick={() => setBuyMode(false)}
              className={`py-3 px-8 rounded-lg transition-all duration-300 font-medium ${
                !buyMode
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              whileHover={buyMode ? { scale: 1.05 } : {}}
              whileTap={buyMode ? { scale: 0.95 } : {}}
            >
              Sell Books
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            className="flex justify-center items-center h-64"
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <div className="w-16 h-16 border-t-4 border-l-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              <div className="w-16 h-16 border-t-4 border-r-4 border-transparent border-solid rounded-full animate-pulse absolute top-0 left-0"></div>
            </div>
          </motion.div>
        ) : buyMode ? (
          <motion.div 
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            key="buyMode"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <motion.div key={book._id} variants={itemVariants}>
                  <BookCard book={book} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-3 py-16 flex flex-col items-center justify-center bg-gray-800 bg-opacity-30 rounded-2xl"
                variants={itemVariants}
              >
                <div className="bg-blue-900 bg-opacity-30 p-5 rounded-full mb-5">
                  <FiSearch className="text-4xl text-blue-400" />
                </div>
                <p className="text-center text-2xl text-gray-300 mb-4">
                  No books found
                </p>
                <p className="text-center text-gray-500 max-w-md">
                  Try adjusting your search or check back later for new books.
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            className="w-full max-w-md mx-auto"
            key="sellMode"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-gray-900 bg-opacity-70 rounded-2xl shadow-2xl p-6 border border-gray-800"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Sell Your Book
              </h2>
              <form ref={formRef} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={bookData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Computer Science"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={bookData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Data Structures"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Semester</label>
                      <input
                        type="text"
                        name="semester"
                        value={bookData.semester}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Fall 2024"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Year (Optional)</label>
                      <input
                        type="text"
                        name="year"
                        value={bookData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 2023"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Price ($)</label>
                      <input
                        type="number"
                        name="price"
                        value={bookData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 25"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={bookData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Library"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Book Image</label>
                    <div className="flex flex-col items-center">
                      {previewImage ? (
                        <div className="relative mb-4">
                          <img
                            src={previewImage}
                            alt="Book preview"
                            className="w-full h-48 object-cover rounded-lg border border-gray-700"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setPreviewImage(null);
                              setBookData(prev => ({ ...prev, image: null }));
                              if (fileInputRef.current) {
                                fileInputRef.current.value = "";
                              }
                            }}
                            className="absolute top-2 right-2 bg-red-600 rounded-full p-1 hover:bg-red-700 transition-colors"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full h-48 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors mb-4"
                        >
                          <FiUpload className="text-3xl text-gray-400 mb-2" />
                          <p className="text-gray-400 text-center">
                            Click to upload image
                            <br />
                            <span className="text-sm text-gray-500">
                              JPG, PNG, JPEG (max 5MB)
                            </span>
                          </p>
                        </div>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/jpg"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
                
                <motion.button
                  type="button"
                  onClick={handleSell}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-gray to-blue-600 hover:from-blue-400 hover:to-blue-600 rounded-xl text-white font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FiPlus className="mr-2" />
                      List Book for Sale
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default BuySellBooks;