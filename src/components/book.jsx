import React, { useState } from "react";

const BuySellBooks = () => {
  const [buyMode, setBuyMode] = useState(true);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSell = async () => {
    const formData = new FormData();
    for (const key in bookData) {
      formData.append(key, bookData[key]);
    }
    try {
      const response = await fetch("/api/books/add", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
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
        alert(result.message || "Failed to add book");
      }
    } catch (error) {
      console.error("Error while adding book:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8 animate-bounce">
        {buyMode ? "Buy Books" : "Sell Your Book"}
      </h1>
      <button
        onClick={() => setBuyMode(!buyMode)}
        className="block mx-auto mb-8 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition-all transform hover:scale-105"
      >
        {buyMode ? "Switch to Sell Mode" : "Switch to Buy Mode"}
      </button>
      {buyMode ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-gray-800 rounded-xl shadow-lg transform transition hover:scale-105">
            <img
              src={previewImage || "https://via.placeholder.com/150"}
              alt="Book"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold text-blue-400 mt-2">
              Book Title
            </h2>
            <p className="text-gray-300">Author: John Doe</p>
            <p className="text-gray-400">Price: ₹200</p>
            <p className="text-gray-400">Year: 2023</p>
            <p className="text-gray-400">Location: Indore</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto">
          {Object.keys(bookData).map(
            (key) =>
              key !== "image" && (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={bookData[key]}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )
          )}
          <label className="text-gray-400">Upload Book Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          />
          {previewImage && (
            <div className="mb-4">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}
          <button
            onClick={handleSell}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
          >
            Add Book
          </button>
        </div>
      )}
    </div>
  );
};

export default BuySellBooks;
