import User from "../../model/user.model.js";
import Shivani from "../../model/bookSchema/shivaniSchema.js";
import cloudinary from "../../config/cloudinary.js";
import razorpayInstance from "../../config/razorpay.config.js";

//user id find
const addShivani = async (req, res) => {
  const { semester, department, subject, year, price, location } = req.body;
  // console.log("Request Body:", req.body);

  const userId = req.query.userId;
  // console.log(userId);

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
    // console.log("Uploaded Image URL:", imgUrl);

    // Create a new book entry
    const newShivani = new Shivani({
      semester,
      department,
      subject,
      location,
      price,
      year,
      imageUrl: imgUrl,

      soldBy: user._id,
    });

    await newShivani.save();
    user.soldBooks.push(newShivani._id);
    await user.save();
    // Convert user to an object to safely manipulate fields
    const userObj = user.toObject();

    // Remove the password field
    delete userObj.password;

    return res
      .status(201)
      .json({ message: "Book added successfully", newShivani, user: userObj });
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
    const books = await Shivani.find({isSold:false})
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
  const { id } = req.params;

  try {
    // Fetch the book by ID
    const book = await Shivani.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Get user who sold the book
    const user = await User.findById(book.soldBy).select("-password"); // Exclude sensitive data

    if (!user) {
      return res
        .status(404)
        .json({ message: "User who sold the book not found" });
    }

    return res.status(200).json({
      message: "Book fetched successfully",
      book,
      userEmail: user.email, // Or return whole user if needed
    });
  } catch (error) {
    console.error("Error while fetching book:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
//get book for single user
const userShivaniBook = async (req, res) => {
  const { id } = req.params;
  try {
    const userBook = await Shivani.find({ soldBy: id });

    if (userBook)
      return res
        .status(200)
        .json({ message: "Book fetched successfully", userBook });
    else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
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
    const user = await User.findById(book.soldBy);
    if (user) {
      user.soldBooks.pull(book._id);
      await user.save();
    }
    // Convert user to an object to safely manipulate fields
    const userObj = user.toObject();

    // Remove the password field
    delete userObj.password;
    

    await book.deleteOne();
    return res
      .status(200)
      .json({ message: "Book deleted successfully", user: userObj });
  } catch (error) {
    console.error("Error while deleting the book:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


const shivaniBought = async (req, res) => {
  const { loggedInUserId, bookSellerId, bookId } = req.body;
  console.log(loggedInUserId, bookSellerId, bookId);
  try {
    const paymentInfo = await bookInfoPayment(); // Only create payment

    return res.status(200).json({
      message: "Please complete the payment process",
      paymentInfo,
      loggedInUserId,
      bookSellerId,
      bookId,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err });
  }
};
const confirmPayment = async (req, res) => {
  const { loggedInUserId, bookSellerId, bookId } = req.body;

  try {
    const loggedInUser = await User.findById(loggedInUserId);
    if (!loggedInUser)
      return res.status(404).json({ message: "User not found" });

    loggedInUser.buyBooks.push(bookId);
    loggedInUser.soldBooks.pull(bookId);

    const bookSeller = await User.findById(bookSellerId);
    if (!bookSeller)
      return res.status(404).json({ message: "Book Seller not found" });

    bookSeller.bookSolded.push(bookId);
    bookSeller.soldBooks.pull(bookId);

    const book = await Shivani.findById(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    book.isSold = true;
    

    await loggedInUser.save();
    await bookSeller.save();
    await book.save();

    // Convert document to plain object
    const userObj = loggedInUser.toObject();

    // Remove the password field
    delete userObj.password;

    return res.status(200).json({
      message: "Payment confirmed and data updated",
      user: userObj,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err });
  }
};


const bookInfoPayment = async () => {
  const amountInPaise = 5 * 100;

  const options = {
    amount: amountInPaise,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  const order = await razorpayInstance.orders.create(options);
  return {
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
  };
};




// Exporting CRUD Functions
export {
  addShivani,
  deleteShivaniBook,
  updateShivaniBook,
  getSingleShivaniBook,
  getAllShivaniBooks,
  userShivaniBook,
  bookInfoPayment,
  shivaniBought,
  confirmPayment
};
