import User from "../../model/user.model.js";
import Shivani from "../../model/bookSchema/shivaniSchema.js";
import cloudinary from "../../config/cloudinary.js";

const addShivani = async (req, res) => {
  const { semester, department, subject, year, price, location } = req.body;
  console.log("Request Body:", req.body);

  const userId = req.params.userId; // Fixing userId extraction
  try {
    const user = await User.findById(userId); // Fetch the user with await
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Image uploading failed" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "shivani_books", // Custom folder name
      resource_type: "image",
    });

    // Get the secure URL from the uploaded result
    const imgUrl = result.secure_url;
    console.log("Uploaded Image URL:", imgUrl);

    // Check if the book already exists
    const existingShivani = await Shivani.findOne({
      department,
      semester,
      subject,
    });

    let quantity = 1;
    if (existingShivani) {
      quantity = existingShivani.quantity + 1;

      // Update the quantity of the existing book
      existingShivani.quantity = quantity;
      await existingShivani.save();

      return res
        .status(200)
        .json({ message: "Quantity updated successfully", existingShivani });
    }

    // Create a new book entry if not already present
    const newShivani = new Shivani({
      semester,
      department,
      subject,
      location,
      price,
      year,
      imageUrl: imgUrl, // Store the Cloudinary image URL
      quantity,
      soldBy: user._id, // Linking the user as the seller
    });

    await newShivani.save();

    return res
      .status(201)
      .json({ message: "Book added successfully", newShivani });
  } catch (error) {
    console.error("Error while adding the book:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export default addShivani;
