import { useState, useEffect } from "react";
import apirequest from "../../utils/lib/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // To hold the book being edited
  const [editForm, setEditForm] = useState({}); // To hold updated details

  useEffect(() => {
    const fetchBooks = async () => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const id = user?._id;
      try {
        const response = await apirequest.get(`/shivani/user/${id}`);
        if(response.data.userBook.length===0) return toast.error("No book found");
        setBooks(response.data.userBook );
      } catch (error) {
        toast.error("Error fetching user books.");
        console.error("Error fetching user books:", error);
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
      setSelectedBook(null); // Close the modal
      toast.success("Book details updated successfully.");
    } catch (error) {
      toast.error("Failed to update book details.");
      console.error("Error updating book details:", error);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await apirequest.delete(`/shivani/delete/${bookId}`);
      setBooks(books.filter((book) => book._id !== bookId));
      toast.success("Book deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete book.");
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="items-center text-4xl font-bold text-center mb-8 animate-bounce">
        My Books
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="p-4 bg-gray-800 rounded-xl shadow-lg transform transition hover:scale-105"
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
            <div className="flex justify-between mt-4 flex-wrap gap-4">
              <button
                onClick={() => handleEditClick(book)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-all flex-1 sm:flex-none"
              >
                Edit Book Detail
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all flex-1 sm:flex-none"
              >
                Delete Book
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white p-8 rounded-lg w-full sm:w-96">
            <h2 className="text-2xl font-bold mb-4">Update Book Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="subject"
                value={editForm.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-2 bg-gray-700 rounded"
              />
              <input
                type="text"
                name="department"
                value={editForm.department}
                onChange={handleChange}
                placeholder="Department"
                className="w-full p-2 bg-gray-700 rounded"
              />
              <input
                type="number"
                name="price"
                value={editForm.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-2 bg-gray-700 rounded"
              />
              <input
                type="number"
                name="year"
                value={editForm.year}
                onChange={handleChange}
                placeholder="Year"
                className="w-full p-2 bg-gray-700 rounded"
              />
              <input
                type="text"
                name="location"
                value={editForm.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full p-2 bg-gray-700 rounded"
              />
            </div>
            <div className="flex justify-between mt-6 flex-wrap gap-4">
              <button
                onClick={handleUpdate}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
              >
                Save
              </button>
              <button
                onClick={() => setSelectedBook(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default MyBooks;
