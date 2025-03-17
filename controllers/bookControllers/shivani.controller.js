import User from "../../model/user.model.js";
import Shivani from "../../model/bookSchema/shivaniSchema.js";
import cloudinary from "../../config/cloudinary.js";

//user id find
const addShivani = async (req, res) => {
  const { semester, department, subject, year, price, location } = req.body;
  console.log("Request Body:", req.body);

  const userId = req.query.userId;
  console.log(userId);

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Image uploading failed" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "shivani_books",
      resource_type: "image",
    });

    const imgUrl = result.secure_url;
    console.log("Uploaded Image URL:", imgUrl);

    // Check if the book already exists
    const existingShivani = await Shivani.findOne({
      department,
      semester,
      subject,
      year,
    });

    let quantity = 1;
    if (existingShivani) {
      quantity = existingShivani.quantity + 1;
      existingShivani.quantity = quantity;
      await existingShivani.save();
      return res.status(200).json({
        message: "Quantity updated succesfully",
        existingShivani,
      });
    }

    // Create a new book entry
    const newShivani = new Shivani({
      semester,
      department,
      subject,
      location,
      price,
      year,
      imageUrl: imgUrl,
      quantity,
      soldBy: user._id,
    });

    await newShivani.save();
    return res
      .status(201)
      .json({ message: "Book added successfully", newShivani });
  } catch (error) {
    console.error("Error while adding the book:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get All Shivani Books with Pagination
const getAllShivaniBooks = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const books = await Shivani.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    return res.status(200).json({
      message: "Books fetched successfully",
      currentPage: page,
      totalBooks: books.length,
      books,
    });
  } catch (error) {
    console.error("Error while fetching books:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get a Single Shivani Book
const getSingleShivaniBook = async (req, res) => {
  const { id} = req.params;
  try {
    const user=await User.findById(id);
    
    const book=await Shivani.find({soldBy:user._id});
    console.log("books",book);
    
    
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book fetched successfully",  book});
  } catch (error) {
    console.error("Error while fetching book:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Update Shivani Book
const updateShivaniBook = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const book = await Shivani.findByIdAndUpdate(id, updates, { new: true });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    console.error("Error while updating the book:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Delete Shivani Book (with Image Deletion from Cloudinary)
const deleteShivaniBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Shivani.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Extract public ID from Cloudinary URL
    const publicId = book.imageUrl.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(`shivani_books/${publicId}`);

    await book.deleteOne();
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error while deleting the book:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Exporting CRUD Functions
export {
  addShivani,
  deleteShivaniBook,
  updateShivaniBook,
  getSingleShivaniBook,
  getAllShivaniBooks,
};
