import { useState, useEffect } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const user = JSON.parse(sessionStorage.getItem("user"));
      const id = user?._id;
      try {
        const response = await apirequest.get(`/shivani/user/${id}`);
        if (response.data.userBook.length === 0) {
          toast.info("You haven't added any books yet");
        }
        setBooks(response.data.userBook);
      } catch (error) {
        toast.error("Error fetching your books");
        console.error("Error fetching user books:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleEditClick = (book) => {
    setSelectedBook(book);
    setEditForm({ ...book });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await apirequest.put(`/shivani/update/${selectedBook._id}`, editForm);
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === selectedBook._id ? { ...book, ...editForm } : book
        )
      );
      setSelectedBook(null);
      toast.success("Book updated successfully");
    } catch (error) {
      toast.error("Failed to update book details");
      console.error("Error updating book details:", error);
    }
  };

  const handleDelete = async (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await apirequest.delete(`/shivani/delete/${bookId}`);
        setBooks(books.filter((book) => book._id !== bookId));
        toast.success("Book deleted successfully");
      } catch (error) {
        toast.error("Failed to delete book");
        console.error("Error deleting book:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            My Books Collection
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Manage your book inventory, update details, or remove books from your collection
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : books.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-semibold text-gray-300 mb-2">No Books Found</h2>
            <p className="text-gray-400 max-w-md">
              You haven t added any books to your collection yet. When you add books, they will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book, index) => (
              <div
                key={book._id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={book.imageUrl || "https://via.placeholder.com/150"}
                    alt={book.subject}
                    className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-lg text-sm font-bold">
                    ₹{book.price}
                  </div>
                </div>
                
                <div className="p-5">
                  <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {book.subject}
                  </h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <span className="mr-2">📚</span>
                      <span className="font-medium">Department:</span>
                      <span className="ml-2 text-gray-400">{book.department}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-300">
                      <span className="mr-2">📅</span>
                      <span className="font-medium">Year:</span>
                      <span className="ml-2 text-gray-400">{book.year}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-300">
                      <span className="mr-2">📍</span>
                      <span className="font-medium">Location:</span>
                      <span className="ml-2 text-gray-400">{book.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-300">
                      <span className="mr-2">🔢</span>
                      <span className="font-medium">Quantity:</span>
                      <span className="ml-2 text-gray-400">{book.quantity}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleEditClick(book)}
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-2 px-4 rounded-lg transition-all transform hover:-translate-y-1 font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-4 rounded-lg transition-all transform hover:-translate-y-1 font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal with Animation */}
      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm transition-all duration-300">
          <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl w-full max-w-md mx-4 shadow-2xl transform transition-all duration-300 animate-fadeIn"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Update Book Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={editForm.subject || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={editForm.department || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={editForm.price || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Year</label>
                <input
                  type="number"
                  name="year"
                  value={editForm.year || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editForm.location || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={editForm.quantity || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleUpdate}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg transition-all transform hover:-translate-y-1 font-medium"
              >
                Save Changes
              </button>
              <button
                onClick={() => setSelectedBook(null)}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-4 rounded-lg transition-all transform hover:-translate-y-1 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style  >{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .grid > div {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MyBooks;